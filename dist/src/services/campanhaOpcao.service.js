import { prisma } from "../config/prisma.js";
import { z } from "zod";
import { CreateCampanhaOpcaoSchema } from "../schemas/index.js";
export class CampanhaOpcaoService {
    static async create(campanhaId, data) {
        return prisma.campanhaOpcao.create({
            data: {
                campanhaId,
                descricao: data.descricao,
                status: data.status,
            },
        });
    }
    static async findByCampanha(campanhaId) {
        return prisma.campanhaOpcao.findMany({
            where: { campanhaId },
            orderBy: { id: "asc" },
        });
    }
    static async definirResultadoFinal(opcaoId) {
        const opcao = await prisma.campanhaOpcao.findUnique({
            where: { id: opcaoId },
            include: { campanha: true },
        });
        if (!opcao) {
            throw new Error("Opção não encontrada");
        }
        if (opcao.campanha.status !== "ENCERRADA" && opcao.campanha.status !== "APURADA") {
            throw new Error("Só é permitido definir resultado final com a campanha encerrada");
        }
        return prisma.$transaction(async (tx) => {
            // Zera as outras opções
            await tx.campanhaOpcao.updateMany({
                where: { campanhaId: opcao.campanhaId },
                data: { ehResultadoFinal: false },
            });
            // Define a opção ganhadora
            const updatedOpcao = await tx.campanhaOpcao.update({
                where: { id: opcao.id },
                data: { ehResultadoFinal: true },
            });
            // Atualiza status da campanha
            const updatedCampanha = await tx.campanha.update({
                where: { id: opcao.campanhaId },
                data: { status: "APURADA" },
            });
            return { campanha: updatedCampanha, opcao: updatedOpcao };
        });
    }
}
//# sourceMappingURL=campanhaOpcao.service.js.map