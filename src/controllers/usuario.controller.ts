import type { Request, Response, NextFunction } from "express"
import { z } from "zod"
import { UsuarioService } from "../services/usuario.service.js"
import { CreateUserSchema, UpdateUsuarioStatusSchema } from "../schemas/index.js"

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

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z.coerce.number().int().positive().parse(req.params.id)
      const body = UpdateUsuarioStatusSchema.parse(req.body)
      const result = await UsuarioService.updateStatus(id, body.status)
      res.json(result)
    } catch (err) {
      next(err)
    }
  }
}
