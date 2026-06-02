import { Router } from "express"
import { CampanhaController } from "../controllers/campanha.controller.js"
import { requireAuth, requireAdmin } from "../middlewares/auth.middleware.js"

const campanhaRouter = Router()

campanhaRouter.get("/", CampanhaController.findAll)
campanhaRouter.get("/:id", CampanhaController.findById)
campanhaRouter.post("/", requireAuth, requireAdmin, CampanhaController.create)
campanhaRouter.patch("/:id/status", requireAuth, requireAdmin, CampanhaController.updateStatus)

campanhaRouter.get("/:campanhaId/opcoes", CampanhaController.findOpcoesByCampanha)
campanhaRouter.post("/:campanhaId/opcoes", requireAuth, requireAdmin, CampanhaController.createOpcao)

const campanhaOpcaoRouter = Router()
campanhaOpcaoRouter.post("/:id/definir-resultado-final", requireAuth, requireAdmin, CampanhaController.definirResultadoFinal)

export { campanhaRouter, campanhaOpcaoRouter }
