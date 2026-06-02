import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly TipoCampanha: "TipoCampanha";
    readonly Campanha: "Campanha";
    readonly CampanhaOpcao: "CampanhaOpcao";
    readonly Usuario: "Usuario";
    readonly MeioPagamento: "MeioPagamento";
    readonly Aposta: "Aposta";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TipoCampanhaScalarFieldEnum: {
    readonly id: "id";
    readonly descricao: "descricao";
    readonly status: "status";
};
export type TipoCampanhaScalarFieldEnum = (typeof TipoCampanhaScalarFieldEnum)[keyof typeof TipoCampanhaScalarFieldEnum];
export declare const CampanhaScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly dtInicio: "dtInicio";
    readonly dtFim: "dtFim";
    readonly taxaOperacional: "taxaOperacional";
    readonly valorBolao: "valorBolao";
    readonly codigoCampanha: "codigoCampanha";
    readonly status: "status";
    readonly tipoCampanhaId: "tipoCampanhaId";
};
export type CampanhaScalarFieldEnum = (typeof CampanhaScalarFieldEnum)[keyof typeof CampanhaScalarFieldEnum];
export declare const CampanhaOpcaoScalarFieldEnum: {
    readonly id: "id";
    readonly descricao: "descricao";
    readonly status: "status";
    readonly ehResultadoFinal: "ehResultadoFinal";
    readonly campanhaId: "campanhaId";
};
export type CampanhaOpcaoScalarFieldEnum = (typeof CampanhaOpcaoScalarFieldEnum)[keyof typeof CampanhaOpcaoScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly cpf: "cpf";
    readonly email: "email";
    readonly senha: "senha";
    readonly telefone: "telefone";
    readonly tipoUsuario: "tipoUsuario";
    readonly status: "status";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const MeioPagamentoScalarFieldEnum: {
    readonly id: "id";
    readonly descricao: "descricao";
    readonly status: "status";
    readonly exigeComprovante: "exigeComprovante";
};
export type MeioPagamentoScalarFieldEnum = (typeof MeioPagamentoScalarFieldEnum)[keyof typeof MeioPagamentoScalarFieldEnum];
export declare const ApostaScalarFieldEnum: {
    readonly id: "id";
    readonly dtCriacao: "dtCriacao";
    readonly comprovante: "comprovante";
    readonly status: "status";
    readonly usuarioId: "usuarioId";
    readonly meioPagamentoId: "meioPagamentoId";
    readonly campanhaOpcaoId: "campanhaOpcaoId";
};
export type ApostaScalarFieldEnum = (typeof ApostaScalarFieldEnum)[keyof typeof ApostaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map