import { UsuarioService } from "../services/usuario.service.js";
import { CreateUserSchema } from "../schemas/index.js";
export class UsuarioController {
    static async create(req, res, next) {
        try {
            const body = CreateUserSchema.parse(req.body);
            const result = await UsuarioService.create(body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findAll(_req, res, next) {
        try {
            const result = await UsuarioService.findAll();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=usuario.controller.js.map