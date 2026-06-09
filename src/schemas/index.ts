import { z } from "zod"

export const StatusCampanhaSchema = z.enum(["ABERTA", "ENCERRADA", "APURADA", "INATIVA"])
export const StatusOpcaoSchema = z.enum(["ATIVA", "INATIVA"])
export const StatusUsuarioSchema = z.enum(["ATIVO", "INATIVO"])
export const StatusApostaSchema = z.enum(["PENDENTE", "CONFIRMADA", "CANCELADA"])
export const RoleSchema = z.enum(["ADMIN", "USER"])

export const LoginSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(1)
})

export const RegisterUserSchema = z.object({
  nome: z.string().min(1),
  cpf: z.string().min(11),
  email: z.string().email(),
  senha: z.string().min(6),
  telefone: z.string().min(1).optional(),
})

export const CreateUserSchema = RegisterUserSchema.extend({
  status: StatusUsuarioSchema.default("ATIVO"),
  role: RoleSchema.default("USER"),
})

export const CreateCampanhaSchema = z.object({
  nome: z.string().min(1),
  dt_inicio: z.coerce.date(),
  dt_fim: z.coerce.date(),
  taxa_operacional: z.unknown(),
  valor_bolao: z.unknown(),
  codigo_campanha: z.string().min(1),
  status: StatusCampanhaSchema.default("ABERTA"),
  tipo_campanha_id: z.number().int().positive(),
})

export const UpdateCampanhaStatusSchema = z.object({
  status: StatusCampanhaSchema
})

export const CreateCampanhaOpcaoSchema = z.object({
  descricao: z.string().min(1),
  status: StatusOpcaoSchema.default("ATIVA"),
})

export const CreateMeioPagamentoSchema = z.object({
  descricao: z.string().min(1),
  exige_comprovante: z.boolean().optional(),
})

export const CreateTipoCampanhaSchema = z.object({
  descricao: z.string().min(1)
})

export const CreateApostaSchema = z.object({
  campanha_opcao_id: z.number().int().positive(),
  meio_pagamento_id: z.number().int().positive(),
  comprovante: z
    .string()
    .trim()
    .url("O comprovante deve ser um link (URL) válido")
    .or(z.literal(""))
    .transform((val) => (val === "" ? undefined : val))
    .optional(),
})

export const UpdateApostaStatusSchema = z.object({
  status: StatusApostaSchema
})

export const UpdateUsuarioStatusSchema = z.object({
  status: StatusUsuarioSchema
})

