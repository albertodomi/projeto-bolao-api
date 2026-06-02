import type { Request, Response, NextFunction } from "express"
import { z } from "zod"
import { CampanhaService } from "../services/campanha.service.js"
import { CampanhaOpcaoService } from "../services/campanhaOpcao.service.js"
import { CreateCampanhaSchema, UpdateCampanhaStatusSchema, CreateCampanhaOpcaoSchema } from "../schemas/index.js"

export class CampanhaController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = CreateCampanhaSchema.parse(req.body)
      const result = await CampanhaService.create(body)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await CampanhaService.findAll()
      res.json(result)
    } catch (err) {
      next(err)
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z.coerce.number().int().positive().parse(req.params.id)
      const result = await CampanhaService.findById(id)
      res.json(result)
    } catch (err) {
      next(err)
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = z.coerce.number().int().positive().parse(req.params.id)
      const body = UpdateCampanhaStatusSchema.parse(req.body)
      const result = await CampanhaService.updateStatus(id, body)
      res.json(result)
    } catch (err) {
      next(err)
    }
  }

  static async createOpcao(req: Request, res: Response, next: NextFunction) {
    try {
      const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId)
      const body = CreateCampanhaOpcaoSchema.parse(req.body)
      const result = await CampanhaOpcaoService.create(campanhaId, body)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async findOpcoesByCampanha(req: Request, res: Response, next: NextFunction) {
    try {
      const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId)
      const result = await CampanhaOpcaoService.findByCampanha(campanhaId)
      res.json(result)
    } catch (err) {
      next(err)
    }
  }

  static async definirResultadoFinal(req: Request, res: Response, next: NextFunction) {
    try {
      const opcaoId = z.coerce.number().int().positive().parse(req.params.id)
      const result = await CampanhaOpcaoService.definirResultadoFinal(opcaoId)
      res.json(result)
    } catch (err) {
      next(err)
    }
  }
}
