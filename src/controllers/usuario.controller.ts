import type { Request, Response, NextFunction } from "express"
import { UsuarioService } from "../services/usuario.service.js"
import { CreateUserSchema } from "../schemas/index.js"

export class UsuarioController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = CreateUserSchema.parse(req.body)
      const result = await UsuarioService.create(body)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UsuarioService.findAll()
      res.json(result)
    } catch (err) {
      next(err)
    }
  }
}
