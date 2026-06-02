import { prisma } from "../config/prisma.js";
import { z } from "zod";
import { CreateCampanhaSchema, UpdateCampanhaStatusSchema } from "../schemas/index.js";
import { parseDecimalInput } from "../utils/validation.js";
export class CampanhaService {
    static async create(data) {
        if (data.dt_fim < data.dt_inicio) {
            throw new Error("dt_fim deve ser maior ou igual a dt_inicio");
        }
        return prisma.campanha.create({
            data: {
                nome: data.nome,
                dtInicio: data.dt_inicio,
                dtFim: data.dt_fim,
                taxaOperacional: parseDecimalInput(data.taxa_operacional, "taxa_operacional"),
                valorBolao: parseDecimalInput(data.valor_bolao, "valor_bolao"),
                codigoCampanha: data.codigo_campanha,
                status: data.status,
                tipoCampanhaId: data.tipo_campanha_id,
            },
        });
    }
    static async findAll() {
        return prisma.campanha.findMany({
            orderBy: { id: "asc" },
            include: { tipoCampanha: true },
        });
    }
    static async findById(id) {
        const campanha = await prisma.campanha.findUnique({
            where: { id },
            include: { tipoCampanha: true },
        });
        if (!campanha)
            throw new Error("Campanha não encontrada");
        return campanha;
    }
    static async updateStatus(id, data) {
        return prisma.campanha.update({
            where: { id },
            data: { status: data.status },
        });
    }
}
//# sourceMappingURL=campanha.service.js.map