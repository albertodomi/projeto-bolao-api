import { z } from "zod";
import { CreateCampanhaSchema, UpdateCampanhaStatusSchema } from "../schemas/index.js";
export declare class CampanhaService {
    static create(data: z.infer<typeof CreateCampanhaSchema>): Promise<{
        nome: string;
        status: import("../../generated/prisma/enums.js").StatusCampanha;
        id: number;
        dtInicio: Date;
        dtFim: Date;
        taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
        valorBolao: import("@prisma/client-runtime-utils").Decimal;
        codigoCampanha: string;
        tipoCampanhaId: number;
    }>;
    static findAll(): Promise<({
        tipoCampanha: {
            status: string | null;
            descricao: string;
            id: number;
        };
    } & {
        nome: string;
        status: import("../../generated/prisma/enums.js").StatusCampanha;
        id: number;
        dtInicio: Date;
        dtFim: Date;
        taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
        valorBolao: import("@prisma/client-runtime-utils").Decimal;
        codigoCampanha: string;
        tipoCampanhaId: number;
    })[]>;
    static findById(id: number): Promise<{
        tipoCampanha: {
            status: string | null;
            descricao: string;
            id: number;
        };
    } & {
        nome: string;
        status: import("../../generated/prisma/enums.js").StatusCampanha;
        id: number;
        dtInicio: Date;
        dtFim: Date;
        taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
        valorBolao: import("@prisma/client-runtime-utils").Decimal;
        codigoCampanha: string;
        tipoCampanhaId: number;
    }>;
    static updateStatus(id: number, data: z.infer<typeof UpdateCampanhaStatusSchema>): Promise<{
        nome: string;
        status: import("../../generated/prisma/enums.js").StatusCampanha;
        id: number;
        dtInicio: Date;
        dtFim: Date;
        taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
        valorBolao: import("@prisma/client-runtime-utils").Decimal;
        codigoCampanha: string;
        tipoCampanhaId: number;
    }>;
}
//# sourceMappingURL=campanha.service.d.ts.map