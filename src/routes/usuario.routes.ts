import { Router } from "express"
import { AuthController } from "../controllers/auth.controller.js"
import { UsuarioController } from "../controllers/usuario.controller.js"
import { requireAuth, requireAdmin } from "../middlewares/auth.middleware.js"

const authRouter = Router()
authRouter.post("/login", AuthController.login)
authRouter.post("/bootstrap-admin", AuthController.bootstrapAdmin)
authRouter.get("/me", requireAuth, AuthController.me)

const usuarioRouter = Router()
usuarioRouter.post("/register", AuthController.register)
usuarioRouter.post("/", requireAuth, requireAdmin, UsuarioController.create)
usuarioRouter.get("/", requireAuth, requireAdmin, UsuarioController.findAll)

export { authRouter, usuarioRouter }
