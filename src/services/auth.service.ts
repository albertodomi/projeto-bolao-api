import { prisma } from "../config/prisma.js"
import { z } from "zod"
import { LoginSchema, RegisterUserSchema } from "../schemas/index.js"
import { verifyPassword, signToken, getRoleFromUsuario, hashPassword } from "../utils/auth.js"
import { normalizeCpf } from "../utils/validation.js"

export class AuthService {
  static async login(data: z.infer<typeof LoginSchema>) {
    const usuario = await prisma.usuario.findUnique({ where: { email: data.email.toLowerCase() } })
    if (!usuario) {
      throw new Error("Credenciais inválidas")
    }
    if (usuario.status !== "ATIVO") {
      throw new Error("Usuário inativo")
    }
    if (!verifyPassword(data.senha, usuario.senha)) {
      throw new Error("Credenciais inválidas")
    }

    const role = getRoleFromUsuario(usuario.tipoUsuario)
    const token = signToken({ userId: usuario.id, role, exp: Date.now() + 1000 * 60 * 60 * 12 })
    
    return {
      token,
      user: { id: usuario.id, nome: usuario.nome, email: usuario.email, role },
    }
  }

  static async register(data: z.infer<typeof RegisterUserSchema>) {
    const created = await prisma.usuario.create({
      data: {
        nome: data.nome,
        cpf: normalizeCpf(data.cpf),
        email: data.email.toLowerCase(),
        senha: hashPassword(data.senha),
        status: "ATIVO",
        telefone: data.telefone ?? null,
        tipoUsuario: "USER",
      },
      select: { id: true, nome: true, cpf: true, email: true, status: true, tipoUsuario: true },
    })
    return { ...created, role: "USER" }
  }

  static async bootstrapAdmin(data: z.infer<typeof RegisterUserSchema>) {
    const count = await prisma.usuario.count()
    if (count > 0) {
      throw new Error("Bootstrap bloqueado (já existe usuário no sistema)")
    }

    const created = await prisma.usuario.create({
      data: {
        nome: data.nome,
        cpf: normalizeCpf(data.cpf),
        email: data.email.toLowerCase(),
        senha: hashPassword(data.senha),
        status: "ATIVO",
        telefone: null,
        tipoUsuario: "ADMIN",
      },
      select: { id: true, nome: true, cpf: true, email: true, status: true, tipoUsuario: true },
    })

    return { ...created, role: "ADMIN" }
  }

  static async getMe(userId: number) {
    const usuario = await prisma.usuario.findUnique({ where: { id: userId } })
    if (!usuario) {
      throw new Error("Usuário não encontrado")
    }
    return {
      id: usuario.id,
      nome: usuario.nome,
      cpf: usuario.cpf,
      email: usuario.email,
      status: usuario.status,
      role: getRoleFromUsuario(usuario.tipoUsuario),
    }
  }
}
