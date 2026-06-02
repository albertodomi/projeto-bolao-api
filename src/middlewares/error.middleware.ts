import type { Request, Response, NextFunction } from "express"
import { z } from "zod"

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof z.ZodError) {
    res.status(400).json({ error: "Dados inválidos", details: err.issues })
    return
  }

  if (err instanceof Error) {
    const message = err.message
    if (message.includes("Unique constraint failed")) {
      res.status(409).json({ error: "Conflito de unicidade", details: message })
      return
    }
    if (message.includes("Foreign key constraint")) {
      res.status(400).json({ error: "Referência inválida", details: message })
      return
    }
    if (message.includes("inválido")) {
      res.status(400).json({ error: message })
      return
    }
  }

  console.error(err)
  res.status(500).json({ error: "Erro interno" })
}
