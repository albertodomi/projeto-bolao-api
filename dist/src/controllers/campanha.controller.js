import { z } from "zod";
import { CampanhaService } from "../services/campanha.service.js";
import { CampanhaOpcaoService } from "../services/campanhaOpcao.service.js";
import { CreateCampanhaSchema, UpdateCampanhaStatusSchema, CreateCampanhaOpcaoSchema } from "../schemas/index.js";
export class CampanhaController {
    static async create(req, res, next) {
        try {
            const body = CreateCampanhaSchema.parse(req.body);
            const result = await CampanhaService.create(body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findAll(_req, res, next) {
        try {
            const result = await CampanhaService.findAll();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findById(req, res, next) {
        try {
            const id = z.coerce.number().int().positive().parse(req.params.id);
            const result = await CampanhaService.findById(id);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async updateStatus(req, res, next) {
        try {
            const id = z.coerce.number().int().positive().parse(req.params.id);
            const body = UpdateCampanhaStatusSchema.parse(req.body);
            const result = await CampanhaService.updateStatus(id, body);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async createOpcao(req, res, next) {
        try {
            const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId);
            const body = CreateCampanhaOpcaoSchema.parse(req.body);
            const result = await CampanhaOpcaoService.create(campanhaId, body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findOpcoesByCampanha(req, res, next) {
        try {
            const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId);
            const result = await CampanhaOpcaoService.findByCampanha(campanhaId);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async definirResultadoFinal(req, res, next) {
        try {
            const opcaoId = z.coerce.number().int().positive().parse(req.params.id);
            const result = await CampanhaOpcaoService.definirResultadoFinal(opcaoId);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=campanha.controller.js.map