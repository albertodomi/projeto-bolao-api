import { z } from "zod";
export declare const StatusCampanhaSchema: z.ZodEnum<{
    ABERTA: "ABERTA";
    ENCERRADA: "ENCERRADA";
    APURADA: "APURADA";
    INATIVA: "INATIVA";
}>;
export declare const StatusOpcaoSchema: z.ZodEnum<{
    INATIVA: "INATIVA";
    ATIVA: "ATIVA";
}>;
export declare const StatusUsuarioSchema: z.ZodEnum<{
    ATIVO: "ATIVO";
    INATIVO: "INATIVO";
}>;
export declare const StatusApostaSchema: z.ZodEnum<{
    PENDENTE: "PENDENTE";
    CONFIRMADA: "CONFIRMADA";
    CANCELADA: "CANCELADA";
}>;
export declare const RoleSchema: z.ZodEnum<{
    ADMIN: "ADMIN";
    USER: "USER";
}>;
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodString;
    senha: z.ZodString;
}, z.core.$strip>;
export declare const RegisterUserSchema: z.ZodObject<{
    nome: z.ZodString;
    cpf: z.ZodString;
    email: z.ZodString;
    senha: z.ZodString;
    telefone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateUserSchema: z.ZodObject<{
    nome: z.ZodString;
    cpf: z.ZodString;
    email: z.ZodString;
    senha: z.ZodString;
    telefone: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<{
        ATIVO: "ATIVO";
        INATIVO: "INATIVO";
    }>>;
    role: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        USER: "USER";
    }>>;
}, z.core.$strip>;
export declare const CreateCampanhaSchema: z.ZodObject<{
    nome: z.ZodString;
    dt_inicio: z.ZodCoercedDate<unknown>;
    dt_fim: z.ZodCoercedDate<unknown>;
    taxa_operacional: z.ZodUnknown;
    valor_bolao: z.ZodUnknown;
    codigo_campanha: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        ABERTA: "ABERTA";
        ENCERRADA: "ENCERRADA";
        APURADA: "APURADA";
        INATIVA: "INATIVA";
    }>>;
    tipo_campanha_id: z.ZodNumber;
}, z.core.$strip>;
export declare const UpdateCampanhaStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ABERTA: "ABERTA";
        ENCERRADA: "ENCERRADA";
        APURADA: "APURADA";
        INATIVA: "INATIVA";
    }>;
}, z.core.$strip>;
export declare const CreateCampanhaOpcaoSchema: z.ZodObject<{
    descricao: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        INATIVA: "INATIVA";
        ATIVA: "ATIVA";
    }>>;
}, z.core.$strip>;
export declare const CreateMeioPagamentoSchema: z.ZodObject<{
    descricao: z.ZodString;
    exige_comprovante: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const CreateTipoCampanhaSchema: z.ZodObject<{
    descricao: z.ZodString;
}, z.core.$strip>;
export declare const CreateApostaSchema: z.ZodObject<{
    campanha_opcao_id: z.ZodNumber;
    meio_pagamento_id: z.ZodNumber;
    comprovante: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UpdateApostaStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        PENDENTE: "PENDENTE";
        CONFIRMADA: "CONFIRMADA";
        CANCELADA: "CANCELADA";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=index.d.ts.map