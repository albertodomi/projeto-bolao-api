import { z } from "zod";
import { CreateApostaSchema, UpdateApostaStatusSchema } from "../schemas/index.js";
export declare class ApostaService {
    static create(userId: number, data: z.infer<typeof CreateApostaSchema>): Promise<{
        status: import("../../generated/prisma/enums.js").StatusAposta;
        comprovante: string | null;
        id: number;
        dtCriacao: Date;
        usuarioId: number;
        meioPagamentoId: number;
        campanhaOpcaoId: number;
    }>;
    static findAll(status?: string): Promise<({
        usuario: {
            email: string;
            senha: string;
            nome: string;
            cpf: string;
            telefone: string | null;
            status: import("../../generated/prisma/enums.js").StatusUsuario;
            id: number;
            tipoUsuario: string | null;
        };
        campanhaOpcao: {
            campanha: {
                nome: string;
                status: import("../../generated/prisma/enums.js").StatusCampanha;
                id: number;
                dtInicio: Date;
                dtFim: Date;
                taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
                valorBolao: import("@prisma/client-runtime-utils").Decimal;
                codigoCampanha: string;
                tipoCampanhaId: number;
            };
        } & {
            status: import("../../generated/prisma/enums.js").StatusOpcao;
            descricao: string;
            id: number;
            ehResultadoFinal: boolean;
            campanhaId: number;
        };
        meioPagamento: {
            status: string | null;
            descricao: string;
            id: number;
            exigeComprovante: boolean;
        };
    } & {
        status: import("../../generated/prisma/enums.js").StatusAposta;
        comprovante: string | null;
        id: number;
        dtCriacao: Date;
        usuarioId: number;
        meioPagamentoId: number;
        campanhaOpcaoId: number;
    })[]>;
    static findMinhas(userId: number): Promise<({
        campanhaOpcao: {
            campanha: {
                nome: string;
                status: import("../../generated/prisma/enums.js").StatusCampanha;
                id: number;
                dtInicio: Date;
                dtFim: Date;
                taxaOperacional: import("@prisma/client-runtime-utils").Decimal;
                valorBolao: import("@prisma/client-runtime-utils").Decimal;
                codigoCampanha: string;
                tipoCampanhaId: number;
            };
        } & {
            status: import("../../generated/prisma/enums.js").StatusOpcao;
            descricao: string;
            id: number;
            ehResultadoFinal: boolean;
            campanhaId: number;
        };
        meioPagamento: {
            status: string | null;
            descricao: string;
            id: number;
            exigeComprovante: boolean;
        };
    } & {
        status: import("../../generated/prisma/enums.js").StatusAposta;
        comprovante: string | null;
        id: number;
        dtCriacao: Date;
        usuarioId: number;
        meioPagamentoId: number;
        campanhaOpcaoId: number;
    })[]>;
    static updateStatus(id: number, data: z.infer<typeof UpdateApostaStatusSchema>): Promise<{
        status: import("../../generated/prisma/enums.js").StatusAposta;
        comprovante: string | null;
        id: number;
        dtCriacao: Date;
        usuarioId: number;
        meioPagamentoId: number;
        campanhaOpcaoId: number;
    }>;
}
//# sourceMappingURL=aposta.service.d.ts.map