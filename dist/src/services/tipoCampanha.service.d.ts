import { z } from "zod";
import { CreateTipoCampanhaSchema } from "../schemas/index.js";
export declare class TipoCampanhaService {
    static create(data: z.infer<typeof CreateTipoCampanhaSchema>): Promise<{
        status: string | null;
        descricao: string;
        id: number;
    }>;
    static findAll(): Promise<{
        status: string | null;
        descricao: string;
        id: number;
    }[]>;
}
//# sourceMappingURL=tipoCampanha.service.d.ts.map