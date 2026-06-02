export declare const StatusCampanha: {
    readonly ABERTA: "ABERTA";
    readonly ENCERRADA: "ENCERRADA";
    readonly APURADA: "APURADA";
    readonly INATIVA: "INATIVA";
};
export type StatusCampanha = (typeof StatusCampanha)[keyof typeof StatusCampanha];
export declare const StatusOpcao: {
    readonly ATIVA: "ATIVA";
    readonly INATIVA: "INATIVA";
};
export type StatusOpcao = (typeof StatusOpcao)[keyof typeof StatusOpcao];
export declare const StatusUsuario: {
    readonly ATIVO: "ATIVO";
    readonly INATIVO: "INATIVO";
};
export type StatusUsuario = (typeof StatusUsuario)[keyof typeof StatusUsuario];
export declare const StatusAposta: {
    readonly PENDENTE: "PENDENTE";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly CANCELADA: "CANCELADA";
};
export type StatusAposta = (typeof StatusAposta)[keyof typeof StatusAposta];
//# sourceMappingURL=enums.d.ts.map