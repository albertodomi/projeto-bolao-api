import { z } from "zod";
import { TipoCampanhaService } from "../services/tipoCampanha.service.js";
import { MeioPagamentoService } from "../services/meioPagamento.service.js";
import { ApostaService } from "../services/aposta.service.js";
import { CreateTipoCampanhaSchema, CreateMeioPagamentoSchema, CreateApostaSchema } from "../schemas/index.js";
export class TipoCampanhaController {
    static async create(req, res, next) {
        try {
            const body = CreateTipoCampanhaSchema.parse(req.body);
            const result = await TipoCampanhaService.create(body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findAll(_req, res, next) {
        try {
            const result = await TipoCampanhaService.findAll();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
export class MeioPagamentoController {
    static async create(req, res, next) {
        try {
            const body = CreateMeioPagamentoSchema.parse(req.body);
            const result = await MeioPagamentoService.create(body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findAll(_req, res, next) {
        try {
            const result = await MeioPagamentoService.findAll();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
export class ApostaController {
    static async create(req, res, next) {
        try {
            const body = CreateApostaSchema.parse(req.body);
            const result = await ApostaService.create(req.auth.userId, body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findAll(req, res, next) {
        try {
            const status = req.query.status;
            const result = await ApostaService.findAll(status);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findMinhas(req, res, next) {
        try {
            const result = await ApostaService.findMinhas(req.auth.userId);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async updateStatus(req, res, next) {
        try {
            const id = z.coerce.number().int().positive().parse(req.params.id);
            const { UpdateApostaStatusSchema } = await import("../schemas/index.js");
            const body = UpdateApostaStatusSchema.parse(req.body);
            const result = await ApostaService.updateStatus(id, body);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=outros.controller.js.map