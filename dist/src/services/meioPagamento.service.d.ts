import { z } from "zod";
import { CreateMeioPagamentoSchema } from "../schemas/index.js";
export declare class MeioPagamentoService {
    static create(data: z.infer<typeof CreateMeioPagamentoSchema>): Promise<{
        status: string | null;
        descricao: string;
        id: number;
        exigeComprovante: boolean;
    }>;
    static findAll(): Promise<{
        status: string | null;
        descricao: string;
        id: number;
        exigeComprovante: boolean;
    }[]>;
}
//# sourceMappingURL=meioPagamento.service.d.ts.map