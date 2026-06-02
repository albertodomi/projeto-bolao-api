import { z } from "zod";
import { CreateCampanhaOpcaoSchema } from "../schemas/index.js";
export declare class CampanhaOpcaoService {
    static create(campanhaId: number, data: z.infer<typeof CreateCampanhaOpcaoSchema>): Promise<{
        status: import("../../generated/prisma/enums.js").StatusOpcao;
        descricao: string;
        id: number;
        ehResultadoFinal: boolean;
        campanhaId: number;
    }>;
    static findByCampanha(campanhaId: number): Promise<{
        status: import("../../generated/prisma/enums.js").StatusOpcao;
        descricao: string;
        id: number;
        ehResultadoFinal: boolean;
        campanhaId: number;
    }[]>;
    static definirResultadoFinal(opcaoId: number): Promise<{
        campanha: any;
        opcao: any;
    }>;
}
//# sourceMappingURL=campanhaOpcao.service.d.ts.map