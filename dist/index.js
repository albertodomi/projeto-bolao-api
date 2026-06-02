import "dotenv/config";
import cors from "cors";
import crypto from "node:crypto";
import express from "express";
import { z } from "zod";
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
const StatusCampanhaSchema = z.enum(["ABERTA", "ENCERRADA", "APURADA", "INATIVA"]);
const StatusOpcaoSchema = z.enum(["ATIVA", "INATIVA"]);
const StatusUsuarioSchema = z.enum(["ATIVO", "INATIVO"]);
const StatusApostaSchema = z.enum(["PENDENTE", "CONFIRMADA", "CANCELADA"]);
function normalizeCpf(value) {
    return value.replace(/\D/g, "");
}
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const iterations = 210_000;
    const hash = crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex");
    return `pbkdf2_sha256$${iterations}$${salt}$${hash}`;
}
function isCampanhaAbertaParaApostas(campanha) {
    if (campanha.status !== "ABERTA")
        return false;
    const now = new Date();
    return now >= campanha.dtInicio && now <= campanha.dtFim;
}
function parseDecimalInput(value, fieldName) {
    if (typeof value === "number") {
        if (!Number.isFinite(value))
            throw new Error(`${fieldName} inválido`);
        return value.toString();
    }
    if (typeof value === "string") {
        const trimmed = value.trim();
        if (!/^\d+(\.\d+)?$/.test(trimmed))
            throw new Error(`${fieldName} inválido`);
        return trimmed;
    }
    throw new Error(`${fieldName} inválido`);
}
app.get("/health", (_req, res) => {
    res.json({ ok: true });
});
app.post("/tipo-campanhas", async (req, res, next) => {
    try {
        const body = z.object({ descricao: z.string().min(1) }).parse(req.body);
        const created = await prisma.tipoCampanha.create({ data: { descricao: body.descricao } });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.get("/tipo-campanhas", async (_req, res, next) => {
    try {
        const items = await prisma.tipoCampanha.findMany({ orderBy: { id: "asc" } });
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
app.post("/campanhas", async (req, res, next) => {
    try {
        const body = z
            .object({
            nome: z.string().min(1),
            dt_inicio: z.coerce.date(),
            dt_fim: z.coerce.date(),
            taxa_operacional: z.unknown(),
            valor_bolao: z.unknown(),
            codigo_campanha: z.string().min(1),
            status: StatusCampanhaSchema.default("ABERTA"),
            tipo_campanha_id: z.number().int().positive(),
        })
            .parse(req.body);
        if (body.dt_fim < body.dt_inicio) {
            res.status(400).json({ error: "dt_fim deve ser maior ou igual a dt_inicio" });
            return;
        }
        const created = await prisma.campanha.create({
            data: {
                nome: body.nome,
                dtInicio: body.dt_inicio,
                dtFim: body.dt_fim,
                taxaOperacional: parseDecimalInput(body.taxa_operacional, "taxa_operacional"),
                valorBolao: parseDecimalInput(body.valor_bolao, "valor_bolao"),
                codigoCampanha: body.codigo_campanha,
                status: body.status,
                tipoCampanhaId: body.tipo_campanha_id,
            },
        });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.get("/campanhas", async (_req, res, next) => {
    try {
        const items = await prisma.campanha.findMany({
            orderBy: { id: "asc" },
            include: { tipoCampanha: true },
        });
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
app.patch("/campanhas/:id/status", async (req, res, next) => {
    try {
        const campanhaId = z.coerce.number().int().positive().parse(req.params.id);
        const body = z.object({ status: StatusCampanhaSchema }).parse(req.body);
        const updated = await prisma.campanha.update({
            where: { id: campanhaId },
            data: { status: body.status },
        });
        res.json(updated);
    }
    catch (err) {
        next(err);
    }
});
app.post("/campanhas/:campanhaId/opcoes", async (req, res, next) => {
    try {
        const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId);
        const body = z
            .object({
            descricao: z.string().min(1),
            status: StatusOpcaoSchema.default("ATIVA"),
        })
            .parse(req.body);
        const created = await prisma.campanhaOpcao.create({
            data: {
                campanhaId,
                descricao: body.descricao,
                status: body.status,
            },
        });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.get("/campanhas/:campanhaId/opcoes", async (req, res, next) => {
    try {
        const campanhaId = z.coerce.number().int().positive().parse(req.params.campanhaId);
        const items = await prisma.campanhaOpcao.findMany({
            where: { campanhaId },
            orderBy: { id: "asc" },
        });
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
app.post("/campanha-opcoes/:id/definir-resultado-final", async (req, res, next) => {
    try {
        const opcaoId = z.coerce.number().int().positive().parse(req.params.id);
        const opcao = await prisma.campanhaOpcao.findUnique({
            where: { id: opcaoId },
            include: { campanha: true },
        });
        if (!opcao) {
            res.status(404).json({ error: "Opção não encontrada" });
            return;
        }
        if (opcao.campanha.status !== "ENCERRADA" && opcao.campanha.status !== "APURADA") {
            res.status(400).json({ error: "Só é permitido definir resultado final com a campanha encerrada" });
            return;
        }
        const result = await prisma.$transaction(async (tx) => {
            await tx.campanhaOpcao.updateMany({
                where: { campanhaId: opcao.campanhaId },
                data: { ehResultadoFinal: false },
            });
            const updatedOpcao = await tx.campanhaOpcao.update({
                where: { id: opcao.id },
                data: { ehResultadoFinal: true },
            });
            const updatedCampanha = await tx.campanha.update({
                where: { id: opcao.campanhaId },
                data: { status: "APURADA" },
            });
            return { campanha: updatedCampanha, opcao: updatedOpcao };
        });
        res.json(result);
    }
    catch (err) {
        next(err);
    }
});
app.post("/usuarios", async (req, res, next) => {
    try {
        const body = z
            .object({
            nome: z.string().min(1),
            cpf: z.string().min(11),
            email: z.string().email(),
            senha: z.string().min(6),
            status: StatusUsuarioSchema.default("ATIVO"),
            telefone: z.string().min(1).optional(),
            tipo_usuario: z.string().min(1).optional(),
        })
            .parse(req.body);
        const created = await prisma.usuario.create({
            data: {
                nome: body.nome,
                cpf: normalizeCpf(body.cpf),
                email: body.email.toLowerCase(),
                senha: hashPassword(body.senha),
                status: body.status,
                telefone: body.telefone,
                tipoUsuario: body.tipo_usuario,
            },
        });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.get("/usuarios", async (_req, res, next) => {
    try {
        const items = await prisma.usuario.findMany({ orderBy: { id: "asc" } });
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
app.post("/meios-pagamento", async (req, res, next) => {
    try {
        const body = z
            .object({
            descricao: z.string().min(1),
            exige_comprovante: z.boolean().optional(),
        })
            .parse(req.body);
        const created = await prisma.meioPagamento.create({
            data: {
                descricao: body.descricao,
                exigeComprovante: body.exige_comprovante ?? false,
            },
        });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.get("/meios-pagamento", async (_req, res, next) => {
    try {
        const items = await prisma.meioPagamento.findMany({ orderBy: { id: "asc" } });
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
app.post("/apostas", async (req, res, next) => {
    try {
        const body = z
            .object({
            usuario_id: z.number().int().positive(),
            campanha_opcao_id: z.number().int().positive(),
            meio_pagamento_id: z.number().int().positive(),
            comprovante: z.string().min(1).optional(),
            status: StatusApostaSchema.default("PENDENTE"),
        })
            .parse(req.body);
        const [usuario, meioPagamento, opcao] = await Promise.all([
            prisma.usuario.findUnique({ where: { id: body.usuario_id } }),
            prisma.meioPagamento.findUnique({ where: { id: body.meio_pagamento_id } }),
            prisma.campanhaOpcao.findUnique({
                where: { id: body.campanha_opcao_id },
                include: { campanha: true },
            }),
        ]);
        if (!usuario) {
            res.status(400).json({ error: "usuario_id inválido" });
            return;
        }
        if (usuario.status !== "ATIVO") {
            res.status(400).json({ error: "Usuário inativo não pode apostar" });
            return;
        }
        if (!meioPagamento) {
            res.status(400).json({ error: "meio_pagamento_id inválido" });
            return;
        }
        if (meioPagamento.exigeComprovante && !body.comprovante) {
            res.status(400).json({ error: "Comprovante é obrigatório para este meio de pagamento" });
            return;
        }
        if (!opcao) {
            res.status(400).json({ error: "campanha_opcao_id inválido" });
            return;
        }
        if (opcao.status !== "ATIVA") {
            res.status(400).json({ error: "Aposta não pode existir para uma opção inativa" });
            return;
        }
        if (!isCampanhaAbertaParaApostas(opcao.campanha)) {
            res.status(400).json({ error: "Campanha não está aberta para apostas" });
            return;
        }
        const created = await prisma.aposta.create({
            data: {
                usuarioId: body.usuario_id,
                meioPagamentoId: body.meio_pagamento_id,
                campanhaOpcaoId: body.campanha_opcao_id,
                comprovante: body.comprovante,
                status: body.status,
            },
        });
        res.status(201).json(created);
    }
    catch (err) {
        next(err);
    }
});
app.use((err, _req, res, _next) => {
    if (err instanceof z.ZodError) {
        res.status(400).json({ error: "Dados inválidos", details: err.issues });
        return;
    }
    if (err instanceof Error) {
        const message = err.message;
        if (message.includes("Unique constraint failed")) {
            res.status(409).json({ error: "Conflito de unicidade", details: message });
            return;
        }
        if (message.includes("Foreign key constraint")) {
            res.status(400).json({ error: "Referência inválida", details: message });
            return;
        }
        if (message.includes("inválido")) {
            res.status(400).json({ error: message });
            return;
        }
    }
    res.status(500).json({ error: "Erro interno" });
});
const port = z.coerce.number().int().positive().catch(3001).parse(process.env["PORT"]);
app.listen(port, () => {
    process.stdout.write(`API listening on http://localhost:${port}\n`);
});
//# sourceMappingURL=index.js.map