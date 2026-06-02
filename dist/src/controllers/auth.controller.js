import { z } from "zod";
import { AuthService } from "../services/auth.service.js";
import { LoginSchema, RegisterUserSchema } from "../schemas/index.js";
export class AuthController {
    static async login(req, res, next) {
        try {
            const body = LoginSchema.parse(req.body);
            const result = await AuthService.login(body);
            res.json(result);
        }
        catch (err) {
            if (err instanceof Error && err.message.includes("Credenciais")) {
                res.status(401).json({ error: err.message });
                return;
            }
            if (err instanceof Error && err.message.includes("inativo")) {
                res.status(403).json({ error: err.message });
                return;
            }
            next(err);
        }
    }
    static async register(req, res, next) {
        try {
            const body = RegisterUserSchema.parse(req.body);
            const result = await AuthService.register(body);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async bootstrapAdmin(req, res, next) {
        try {
            const body = RegisterUserSchema.parse(req.body);
            const result = await AuthService.bootstrapAdmin(body);
            res.status(201).json(result);
        }
        catch (err) {
            if (err instanceof Error && err.message.includes("bloqueado")) {
                res.status(403).json({ error: err.message });
                return;
            }
            next(err);
        }
    }
    static async me(req, res, next) {
        try {
            const result = await AuthService.getMe(req.auth.userId);
            res.json(result);
        }
        catch (err) {
            if (err instanceof Error && err.message.includes("não encontrado")) {
                res.status(404).json({ error: err.message });
                return;
            }
            next(err);
        }
    }
}
//# sourceMappingURL=auth.controller.js.map