import { Router } from "express";
import { authRouter, usuarioRouter } from "./usuario.routes.js";
import { campanhaRouter, campanhaOpcaoRouter } from "./campanha.routes.js";
import { tipoCampanhaRouter, meioPagamentoRouter, apostaRouter } from "./outras.routes.js";
const routes = Router();
routes.get("/health", (_req, res) => {
    res.json({ ok: true });
});
routes.use("/auth", authRouter);
routes.use("/usuarios", usuarioRouter);
routes.use("/tipo-campanhas", tipoCampanhaRouter);
routes.use("/campanhas", campanhaRouter);
routes.use("/campanha-opcoes", campanhaOpcaoRouter);
routes.use("/meios-pagamento", meioPagamentoRouter);
routes.use("/apostas", apostaRouter);
export default routes;
//# sourceMappingURL=index.js.map