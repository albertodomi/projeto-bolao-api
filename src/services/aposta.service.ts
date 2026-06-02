import { prisma } from "../config/prisma.js"
import { z } from "zod"
import { CreateApostaSchema, UpdateApostaStatusSchema } from "../schemas/index.js"

function isCampanhaAbertaParaApostas(campanha: { status: string; dtInicio: Date; dtFim: Date }) {
  if (campanha.status !== "ABERTA") return false
  const now = new Date()
  return now >= campanha.dtInicio && now <= campanha.dtFim
}

export class ApostaService {
  static async create(userId: number, data: z.infer<typeof CreateApostaSchema>) {
    const [usuario, meioPagamento, opcao] = await Promise.all([
      prisma.usuario.findUnique({ where: { id: userId } }),
      prisma.meioPagamento.findUnique({ where: { id: data.meio_pagamento_id } }),
      prisma.campanhaOpcao.findUnique({
        where: { id: data.campanha_opcao_id },
        include: { campanha: true },
      }),
    ])

    if (!usuario) {
      throw new Error("usuario_id inválido")
    }
    if (usuario.status !== "ATIVO") {
      throw new Error("Usuário inativo não pode apostar")
    }
    if (!meioPagamento) {
      throw new Error("meio_pagamento_id inválido")
    }
    if (meioPagamento.exigeComprovante && !data.comprovante) {
      throw new Error("Comprovante é obrigatório para este meio de pagamento")
    }
    if (!opcao) {
      throw new Error("campanha_opcao_id inválido")
    }
    if (opcao.status !== "ATIVA") {
      throw new Error("Aposta não pode existir para uma opção inativa")
    }
    if (!isCampanhaAbertaParaApostas(opcao.campanha)) {
      throw new Error("Campanha não está aberta para apostas")
    }

    return prisma.aposta.create({
      data: {
        usuarioId: userId,
        meioPagamentoId: data.meio_pagamento_id,
        campanhaOpcaoId: data.campanha_opcao_id,
        comprovante: data.comprovante ?? null,
        status: "PENDENTE",
      },
    })
  }
  static async findAll(status?: string) {
    const whereClause = status ? { status: status as any } : {}
    return prisma.aposta.findMany({
      where: whereClause,
      include: {
        usuario: true,
        meioPagamento: true,
        campanhaOpcao: {
          include: { campanha: true }
        }
      },
      orderBy: { dtCriacao: "desc" }
    })
  }

  static async findMinhas(userId: number) {
    return prisma.aposta.findMany({
      where: { usuarioId: userId },
      include: {
        meioPagamento: true,
        campanhaOpcao: {
          include: { campanha: true }
        }
      },
      orderBy: { dtCriacao: "desc" }
    })
  }

  static async updateStatus(id: number, data: z.infer<typeof UpdateApostaStatusSchema>) {
    return prisma.aposta.update({
      where: { id },
      data: { status: data.status },
    })
  }
}
