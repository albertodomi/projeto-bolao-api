import type { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/auth.js"

declare global {
  namespace Express {
    interface Request {
      auth?: { userId: number; role: "ADMIN" | "USER" }
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"]
  if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Não autenticado" })
    return
  }
  
  const token = authHeader.slice("Bearer ".length).trim()
  const payload = verifyToken(token)
  
  if (!payload) {
    res.status(401).json({ error: "Token inválido" })
    return
  }
  
  const userId = typeof payload["userId"] === "number" ? payload["userId"] : null
  const role = payload["role"] === "ADMIN" || payload["role"] === "USER" ? payload["role"] : null
  
  if (!userId || !role) {
    res.status(401).json({ error: "Token inválido" })
    return
  }
  
  req.auth = { userId, role }
  next()
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.auth) {
    res.status(401).json({ error: "Não autenticado" })
    return
  }
  
  if (req.auth.role !== "ADMIN") {
    res.status(403).json({ error: "Acesso negado" })
    return
  }
  
  next()
}
