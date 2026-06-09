import type { Request, Response, NextFunction } from "express"
import { z } from "zod"

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof z.ZodError) {
    res.status(400).json({ error: "Dados inválidos", details: err.issues })
    return
  }

  if (err instanceof Error) {
    const message = err.message
    if (message.includes("Unique constraint failed") || (err as any).code === "P2002") {
      const target = (err as any).meta?.target
      const targetStr = Array.isArray(target) ? target.join(", ") : ""
      const originalMessage = (err as any).meta?.driverAdapterError?.cause?.originalMessage || ""
      
      const fullErrorContext = `${message} ${targetStr} ${originalMessage}`.toLowerCase()
      
      let errorMsg = "Conflito de unicidade: dado já cadastrado."
      if (fullErrorContext.includes("email") || fullErrorContext.includes("usuario_email_key")) {
        errorMsg = "Este e-mail já está cadastrado."
      } else if (fullErrorContext.includes("cpf") || fullErrorContext.includes("usuario_cpf_key")) {
        errorMsg = "Este CPF já está cadastrado."
      } else if (fullErrorContext.includes("codigo_campanha") || fullErrorContext.includes("campanha_codigo_campanha_key")) {
        errorMsg = "Este código de campanha já está cadastrado."
      }
      
      res.status(409).json({ error: errorMsg, details: message })
      return
    }
    if (message.includes("Foreign key constraint")) {
      res.status(400).json({ error: "Referência inválida", details: message })
      return
    }
    if ((err as any).code === "P2025") {
      res.status(404).json({ error: "Registro não encontrado" })
      return
    }
    if (
      message.includes("inválido") ||
      message.includes("período") ||
      message.includes("aberta") ||
      message.includes("obrigatório") ||
      message.includes("permitido") ||
      message.includes("não encontrada") ||
      message.includes("inativo") ||
      message.includes("Credenciais") ||
      message.includes("maior ou igual") ||
      message.includes("bloqueado")
    ) {
      res.status(400).json({ error: message })
      return
    }
  }

  console.error(err)
  res.status(500).json({ error: "Erro interno" })
}
