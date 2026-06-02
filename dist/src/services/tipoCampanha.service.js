import { prisma } from "../config/prisma.js";
import { z } from "zod";
import { CreateTipoCampanhaSchema } from "../schemas/index.js";
export class TipoCampanhaService {
    static async create(data) {
        return prisma.tipoCampanha.create({
            data: { descricao: data.descricao },
        });
    }
    static async findAll() {
        return prisma.tipoCampanha.findMany({ orderBy: { id: "asc" } });
    }
}
//# sourceMappingURL=tipoCampanha.service.js.map