import { prisma } from "../config/prisma.js";
import { z } from "zod";
import { CreateMeioPagamentoSchema } from "../schemas/index.js";
export class MeioPagamentoService {
    static async create(data) {
        return prisma.meioPagamento.create({
            data: {
                descricao: data.descricao,
                exigeComprovante: data.exige_comprovante ?? false,
            },
        });
    }
    static async findAll() {
        return prisma.meioPagamento.findMany({ orderBy: { id: "asc" } });
    }
}
//# sourceMappingURL=meioPagamento.service.js.map