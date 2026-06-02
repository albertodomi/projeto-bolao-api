import { verifyToken } from "../utils/auth.js";
export function requireAuth(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ error: "Não autenticado" });
        return;
    }
    const token = authHeader.slice("Bearer ".length).trim();
    const payload = verifyToken(token);
    if (!payload) {
        res.status(401).json({ error: "Token inválido" });
        return;
    }
    const userId = typeof payload["userId"] === "number" ? payload["userId"] : null;
    const role = payload["role"] === "ADMIN" || payload["role"] === "USER" ? payload["role"] : null;
    if (!userId || !role) {
        res.status(401).json({ error: "Token inválido" });
        return;
    }
    req.auth = { userId, role };
    next();
}
export function requireAdmin(req, res, next) {
    if (!req.auth) {
        res.status(401).json({ error: "Não autenticado" });
        return;
    }
    if (req.auth.role !== "ADMIN") {
        res.status(403).json({ error: "Acesso negado" });
        return;
    }
    next();
}
//# sourceMappingURL=auth.middleware.js.map