import { Router } from "express";
import { TipoCampanhaController, MeioPagamentoController, ApostaController } from "../controllers/outros.controller.js";
import { requireAuth, requireAdmin } from "../middlewares/auth.middleware.js";
const tipoCampanhaRouter = Router();
tipoCampanhaRouter.get("/", TipoCampanhaController.findAll);
tipoCampanhaRouter.post("/", requireAuth, requireAdmin, TipoCampanhaController.create);
const meioPagamentoRouter = Router();
meioPagamentoRouter.get("/", MeioPagamentoController.findAll);
meioPagamentoRouter.post("/", requireAuth, requireAdmin, MeioPagamentoController.create);
const apostaRouter = Router();
apostaRouter.post("/", requireAuth, ApostaController.create);
apostaRouter.get("/", requireAuth, requireAdmin, ApostaController.findAll);
apostaRouter.get("/minhas", requireAuth, ApostaController.findMinhas);
apostaRouter.patch("/:id/status", requireAuth, requireAdmin, ApostaController.updateStatus);
export { tipoCampanhaRouter, meioPagamentoRouter, apostaRouter };
//# sourceMappingURL=outras.routes.js.map