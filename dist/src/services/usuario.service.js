import { prisma } from "../config/prisma.js";
import { z } from "zod";
import { CreateUserSchema } from "../schemas/index.js";
import { hashPassword, getRoleFromUsuario } from "../utils/auth.js";
import { normalizeCpf } from "../utils/validation.js";
export class UsuarioService {
    static async create(data) {
        const created = await prisma.usuario.create({
            data: {
                nome: data.nome,
                cpf: normalizeCpf(data.cpf),
                email: data.email.toLowerCase(),
                senha: hashPassword(data.senha),
                status: data.status,
                telefone: data.telefone ?? null,
                tipoUsuario: data.role,
            },
            select: { id: true, nome: true, cpf: true, email: true, status: true, tipoUsuario: true },
        });
        return { ...created, role: getRoleFromUsuario(created.tipoUsuario) };
    }
    static async findAll() {
        const items = await prisma.usuario.findMany({
            orderBy: { id: "asc" },
            select: { id: true, nome: true, cpf: true, email: true, status: true, tipoUsuario: true },
        });
        return items.map((u) => ({ ...u, role: getRoleFromUsuario(u.tipoUsuario) }));
    }
}
//# sourceMappingURL=usuario.service.js.map