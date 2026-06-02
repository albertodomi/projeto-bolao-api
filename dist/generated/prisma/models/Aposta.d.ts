import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Aposta
 *
 */
export type ApostaModel = runtime.Types.Result.DefaultSelection<Prisma.$ApostaPayload>;
export type AggregateAposta = {
    _count: ApostaCountAggregateOutputType | null;
    _avg: ApostaAvgAggregateOutputType | null;
    _sum: ApostaSumAggregateOutputType | null;
    _min: ApostaMinAggregateOutputType | null;
    _max: ApostaMaxAggregateOutputType | null;
};
export type ApostaAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    meioPagamentoId: number | null;
    campanhaOpcaoId: number | null;
};
export type ApostaSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    meioPagamentoId: number | null;
    campanhaOpcaoId: number | null;
};
export type ApostaMinAggregateOutputType = {
    id: number | null;
    dtCriacao: Date | null;
    comprovante: string | null;
    status: $Enums.StatusAposta | null;
    usuarioId: number | null;
    meioPagamentoId: number | null;
    campanhaOpcaoId: number | null;
};
export type ApostaMaxAggregateOutputType = {
    id: number | null;
    dtCriacao: Date | null;
    comprovante: string | null;
    status: $Enums.StatusAposta | null;
    usuarioId: number | null;
    meioPagamentoId: number | null;
    campanhaOpcaoId: number | null;
};
export type ApostaCountAggregateOutputType = {
    id: number;
    dtCriacao: number;
    comprovante: number;
    status: number;
    usuarioId: number;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
    _all: number;
};
export type ApostaAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
    meioPagamentoId?: true;
    campanhaOpcaoId?: true;
};
export type ApostaSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
    meioPagamentoId?: true;
    campanhaOpcaoId?: true;
};
export type ApostaMinAggregateInputType = {
    id?: true;
    dtCriacao?: true;
    comprovante?: true;
    status?: true;
    usuarioId?: true;
    meioPagamentoId?: true;
    campanhaOpcaoId?: true;
};
export type ApostaMaxAggregateInputType = {
    id?: true;
    dtCriacao?: true;
    comprovante?: true;
    status?: true;
    usuarioId?: true;
    meioPagamentoId?: true;
    campanhaOpcaoId?: true;
};
export type ApostaCountAggregateInputType = {
    id?: true;
    dtCriacao?: true;
    comprovante?: true;
    status?: true;
    usuarioId?: true;
    meioPagamentoId?: true;
    campanhaOpcaoId?: true;
    _all?: true;
};
export type ApostaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Aposta to aggregate.
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apostas to fetch.
     */
    orderBy?: Prisma.ApostaOrderByWithRelationInput | Prisma.ApostaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApostaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apostas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apostas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Apostas
    **/
    _count?: true | ApostaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ApostaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ApostaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApostaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApostaMaxAggregateInputType;
};
export type GetApostaAggregateType<T extends ApostaAggregateArgs> = {
    [P in keyof T & keyof AggregateAposta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAposta[P]> : Prisma.GetScalarType<T[P], AggregateAposta[P]>;
};
export type ApostaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApostaWhereInput;
    orderBy?: Prisma.ApostaOrderByWithAggregationInput | Prisma.ApostaOrderByWithAggregationInput[];
    by: Prisma.ApostaScalarFieldEnum[] | Prisma.ApostaScalarFieldEnum;
    having?: Prisma.ApostaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApostaCountAggregateInputType | true;
    _avg?: ApostaAvgAggregateInputType;
    _sum?: ApostaSumAggregateInputType;
    _min?: ApostaMinAggregateInputType;
    _max?: ApostaMaxAggregateInputType;
};
export type ApostaGroupByOutputType = {
    id: number;
    dtCriacao: Date;
    comprovante: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
    _count: ApostaCountAggregateOutputType | null;
    _avg: ApostaAvgAggregateOutputType | null;
    _sum: ApostaSumAggregateOutputType | null;
    _min: ApostaMinAggregateOutputType | null;
    _max: ApostaMaxAggregateOutputType | null;
};
export type GetApostaGroupByPayload<T extends ApostaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApostaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApostaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApostaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApostaGroupByOutputType[P]>;
}>>;
export type ApostaWhereInput = {
    AND?: Prisma.ApostaWhereInput | Prisma.ApostaWhereInput[];
    OR?: Prisma.ApostaWhereInput[];
    NOT?: Prisma.ApostaWhereInput | Prisma.ApostaWhereInput[];
    id?: Prisma.IntFilter<"Aposta"> | number;
    dtCriacao?: Prisma.DateTimeFilter<"Aposta"> | Date | string;
    comprovante?: Prisma.StringNullableFilter<"Aposta"> | string | null;
    status?: Prisma.EnumStatusApostaFilter<"Aposta"> | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFilter<"Aposta"> | number;
    meioPagamentoId?: Prisma.IntFilter<"Aposta"> | number;
    campanhaOpcaoId?: Prisma.IntFilter<"Aposta"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    meioPagamento?: Prisma.XOR<Prisma.MeioPagamentoScalarRelationFilter, Prisma.MeioPagamentoWhereInput>;
    campanhaOpcao?: Prisma.XOR<Prisma.CampanhaOpcaoScalarRelationFilter, Prisma.CampanhaOpcaoWhereInput>;
};
export type ApostaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dtCriacao?: Prisma.SortOrder;
    comprovante?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    meioPagamento?: Prisma.MeioPagamentoOrderByWithRelationInput;
    campanhaOpcao?: Prisma.CampanhaOpcaoOrderByWithRelationInput;
};
export type ApostaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ApostaWhereInput | Prisma.ApostaWhereInput[];
    OR?: Prisma.ApostaWhereInput[];
    NOT?: Prisma.ApostaWhereInput | Prisma.ApostaWhereInput[];
    dtCriacao?: Prisma.DateTimeFilter<"Aposta"> | Date | string;
    comprovante?: Prisma.StringNullableFilter<"Aposta"> | string | null;
    status?: Prisma.EnumStatusApostaFilter<"Aposta"> | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFilter<"Aposta"> | number;
    meioPagamentoId?: Prisma.IntFilter<"Aposta"> | number;
    campanhaOpcaoId?: Prisma.IntFilter<"Aposta"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    meioPagamento?: Prisma.XOR<Prisma.MeioPagamentoScalarRelationFilter, Prisma.MeioPagamentoWhereInput>;
    campanhaOpcao?: Prisma.XOR<Prisma.CampanhaOpcaoScalarRelationFilter, Prisma.CampanhaOpcaoWhereInput>;
}, "id">;
export type ApostaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dtCriacao?: Prisma.SortOrder;
    comprovante?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
    _count?: Prisma.ApostaCountOrderByAggregateInput;
    _avg?: Prisma.ApostaAvgOrderByAggregateInput;
    _max?: Prisma.ApostaMaxOrderByAggregateInput;
    _min?: Prisma.ApostaMinOrderByAggregateInput;
    _sum?: Prisma.ApostaSumOrderByAggregateInput;
};
export type ApostaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApostaScalarWhereWithAggregatesInput | Prisma.ApostaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApostaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApostaScalarWhereWithAggregatesInput | Prisma.ApostaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Aposta"> | number;
    dtCriacao?: Prisma.DateTimeWithAggregatesFilter<"Aposta"> | Date | string;
    comprovante?: Prisma.StringNullableWithAggregatesFilter<"Aposta"> | string | null;
    status?: Prisma.EnumStatusApostaWithAggregatesFilter<"Aposta"> | $Enums.StatusAposta;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Aposta"> | number;
    meioPagamentoId?: Prisma.IntWithAggregatesFilter<"Aposta"> | number;
    campanhaOpcaoId?: Prisma.IntWithAggregatesFilter<"Aposta"> | number;
};
export type ApostaCreateInput = {
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuario: Prisma.UsuarioCreateNestedOneWithoutApostasInput;
    meioPagamento: Prisma.MeioPagamentoCreateNestedOneWithoutApostasInput;
    campanhaOpcao: Prisma.CampanhaOpcaoCreateNestedOneWithoutApostasInput;
};
export type ApostaUncheckedCreateInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
};
export type ApostaUpdateInput = {
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutApostasNestedInput;
    meioPagamento?: Prisma.MeioPagamentoUpdateOneRequiredWithoutApostasNestedInput;
    campanhaOpcao?: Prisma.CampanhaOpcaoUpdateOneRequiredWithoutApostasNestedInput;
};
export type ApostaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaCreateManyInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
};
export type ApostaUpdateManyMutationInput = {
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
};
export type ApostaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaListRelationFilter = {
    every?: Prisma.ApostaWhereInput;
    some?: Prisma.ApostaWhereInput;
    none?: Prisma.ApostaWhereInput;
};
export type ApostaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApostaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dtCriacao?: Prisma.SortOrder;
    comprovante?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
};
export type ApostaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
};
export type ApostaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dtCriacao?: Prisma.SortOrder;
    comprovante?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
};
export type ApostaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dtCriacao?: Prisma.SortOrder;
    comprovante?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
};
export type ApostaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    meioPagamentoId?: Prisma.SortOrder;
    campanhaOpcaoId?: Prisma.SortOrder;
};
export type ApostaCreateNestedManyWithoutCampanhaOpcaoInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput> | Prisma.ApostaCreateWithoutCampanhaOpcaoInput[] | Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput | Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput[];
    createMany?: Prisma.ApostaCreateManyCampanhaOpcaoInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUncheckedCreateNestedManyWithoutCampanhaOpcaoInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput> | Prisma.ApostaCreateWithoutCampanhaOpcaoInput[] | Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput | Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput[];
    createMany?: Prisma.ApostaCreateManyCampanhaOpcaoInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUpdateManyWithoutCampanhaOpcaoNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput> | Prisma.ApostaCreateWithoutCampanhaOpcaoInput[] | Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput | Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutCampanhaOpcaoInput | Prisma.ApostaUpsertWithWhereUniqueWithoutCampanhaOpcaoInput[];
    createMany?: Prisma.ApostaCreateManyCampanhaOpcaoInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutCampanhaOpcaoInput | Prisma.ApostaUpdateWithWhereUniqueWithoutCampanhaOpcaoInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutCampanhaOpcaoInput | Prisma.ApostaUpdateManyWithWhereWithoutCampanhaOpcaoInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type ApostaUncheckedUpdateManyWithoutCampanhaOpcaoNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput> | Prisma.ApostaCreateWithoutCampanhaOpcaoInput[] | Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput | Prisma.ApostaCreateOrConnectWithoutCampanhaOpcaoInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutCampanhaOpcaoInput | Prisma.ApostaUpsertWithWhereUniqueWithoutCampanhaOpcaoInput[];
    createMany?: Prisma.ApostaCreateManyCampanhaOpcaoInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutCampanhaOpcaoInput | Prisma.ApostaUpdateWithWhereUniqueWithoutCampanhaOpcaoInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutCampanhaOpcaoInput | Prisma.ApostaUpdateManyWithWhereWithoutCampanhaOpcaoInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type ApostaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput> | Prisma.ApostaCreateWithoutUsuarioInput[] | Prisma.ApostaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutUsuarioInput | Prisma.ApostaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.ApostaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput> | Prisma.ApostaCreateWithoutUsuarioInput[] | Prisma.ApostaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutUsuarioInput | Prisma.ApostaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.ApostaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput> | Prisma.ApostaCreateWithoutUsuarioInput[] | Prisma.ApostaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutUsuarioInput | Prisma.ApostaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.ApostaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.ApostaCreateManyUsuarioInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.ApostaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutUsuarioInput | Prisma.ApostaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type ApostaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput> | Prisma.ApostaCreateWithoutUsuarioInput[] | Prisma.ApostaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutUsuarioInput | Prisma.ApostaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.ApostaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.ApostaCreateManyUsuarioInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.ApostaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutUsuarioInput | Prisma.ApostaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type ApostaCreateNestedManyWithoutMeioPagamentoInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput> | Prisma.ApostaCreateWithoutMeioPagamentoInput[] | Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput | Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput[];
    createMany?: Prisma.ApostaCreateManyMeioPagamentoInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUncheckedCreateNestedManyWithoutMeioPagamentoInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput> | Prisma.ApostaCreateWithoutMeioPagamentoInput[] | Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput | Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput[];
    createMany?: Prisma.ApostaCreateManyMeioPagamentoInputEnvelope;
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
};
export type ApostaUpdateManyWithoutMeioPagamentoNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput> | Prisma.ApostaCreateWithoutMeioPagamentoInput[] | Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput | Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutMeioPagamentoInput | Prisma.ApostaUpsertWithWhereUniqueWithoutMeioPagamentoInput[];
    createMany?: Prisma.ApostaCreateManyMeioPagamentoInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutMeioPagamentoInput | Prisma.ApostaUpdateWithWhereUniqueWithoutMeioPagamentoInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutMeioPagamentoInput | Prisma.ApostaUpdateManyWithWhereWithoutMeioPagamentoInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type ApostaUncheckedUpdateManyWithoutMeioPagamentoNestedInput = {
    create?: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput> | Prisma.ApostaCreateWithoutMeioPagamentoInput[] | Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput[];
    connectOrCreate?: Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput | Prisma.ApostaCreateOrConnectWithoutMeioPagamentoInput[];
    upsert?: Prisma.ApostaUpsertWithWhereUniqueWithoutMeioPagamentoInput | Prisma.ApostaUpsertWithWhereUniqueWithoutMeioPagamentoInput[];
    createMany?: Prisma.ApostaCreateManyMeioPagamentoInputEnvelope;
    set?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    disconnect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    delete?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    connect?: Prisma.ApostaWhereUniqueInput | Prisma.ApostaWhereUniqueInput[];
    update?: Prisma.ApostaUpdateWithWhereUniqueWithoutMeioPagamentoInput | Prisma.ApostaUpdateWithWhereUniqueWithoutMeioPagamentoInput[];
    updateMany?: Prisma.ApostaUpdateManyWithWhereWithoutMeioPagamentoInput | Prisma.ApostaUpdateManyWithWhereWithoutMeioPagamentoInput[];
    deleteMany?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
};
export type EnumStatusApostaFieldUpdateOperationsInput = {
    set?: $Enums.StatusAposta;
};
export type ApostaCreateWithoutCampanhaOpcaoInput = {
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuario: Prisma.UsuarioCreateNestedOneWithoutApostasInput;
    meioPagamento: Prisma.MeioPagamentoCreateNestedOneWithoutApostasInput;
};
export type ApostaUncheckedCreateWithoutCampanhaOpcaoInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    meioPagamentoId: number;
};
export type ApostaCreateOrConnectWithoutCampanhaOpcaoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput>;
};
export type ApostaCreateManyCampanhaOpcaoInputEnvelope = {
    data: Prisma.ApostaCreateManyCampanhaOpcaoInput | Prisma.ApostaCreateManyCampanhaOpcaoInput[];
    skipDuplicates?: boolean;
};
export type ApostaUpsertWithWhereUniqueWithoutCampanhaOpcaoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApostaUpdateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedUpdateWithoutCampanhaOpcaoInput>;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedCreateWithoutCampanhaOpcaoInput>;
};
export type ApostaUpdateWithWhereUniqueWithoutCampanhaOpcaoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApostaUpdateWithoutCampanhaOpcaoInput, Prisma.ApostaUncheckedUpdateWithoutCampanhaOpcaoInput>;
};
export type ApostaUpdateManyWithWhereWithoutCampanhaOpcaoInput = {
    where: Prisma.ApostaScalarWhereInput;
    data: Prisma.XOR<Prisma.ApostaUpdateManyMutationInput, Prisma.ApostaUncheckedUpdateManyWithoutCampanhaOpcaoInput>;
};
export type ApostaScalarWhereInput = {
    AND?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
    OR?: Prisma.ApostaScalarWhereInput[];
    NOT?: Prisma.ApostaScalarWhereInput | Prisma.ApostaScalarWhereInput[];
    id?: Prisma.IntFilter<"Aposta"> | number;
    dtCriacao?: Prisma.DateTimeFilter<"Aposta"> | Date | string;
    comprovante?: Prisma.StringNullableFilter<"Aposta"> | string | null;
    status?: Prisma.EnumStatusApostaFilter<"Aposta"> | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFilter<"Aposta"> | number;
    meioPagamentoId?: Prisma.IntFilter<"Aposta"> | number;
    campanhaOpcaoId?: Prisma.IntFilter<"Aposta"> | number;
};
export type ApostaCreateWithoutUsuarioInput = {
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    meioPagamento: Prisma.MeioPagamentoCreateNestedOneWithoutApostasInput;
    campanhaOpcao: Prisma.CampanhaOpcaoCreateNestedOneWithoutApostasInput;
};
export type ApostaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
};
export type ApostaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.ApostaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput>;
};
export type ApostaCreateManyUsuarioInputEnvelope = {
    data: Prisma.ApostaCreateManyUsuarioInput | Prisma.ApostaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type ApostaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.ApostaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApostaUpdateWithoutUsuarioInput, Prisma.ApostaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutUsuarioInput, Prisma.ApostaUncheckedCreateWithoutUsuarioInput>;
};
export type ApostaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.ApostaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApostaUpdateWithoutUsuarioInput, Prisma.ApostaUncheckedUpdateWithoutUsuarioInput>;
};
export type ApostaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.ApostaScalarWhereInput;
    data: Prisma.XOR<Prisma.ApostaUpdateManyMutationInput, Prisma.ApostaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type ApostaCreateWithoutMeioPagamentoInput = {
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuario: Prisma.UsuarioCreateNestedOneWithoutApostasInput;
    campanhaOpcao: Prisma.CampanhaOpcaoCreateNestedOneWithoutApostasInput;
};
export type ApostaUncheckedCreateWithoutMeioPagamentoInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    campanhaOpcaoId: number;
};
export type ApostaCreateOrConnectWithoutMeioPagamentoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput>;
};
export type ApostaCreateManyMeioPagamentoInputEnvelope = {
    data: Prisma.ApostaCreateManyMeioPagamentoInput | Prisma.ApostaCreateManyMeioPagamentoInput[];
    skipDuplicates?: boolean;
};
export type ApostaUpsertWithWhereUniqueWithoutMeioPagamentoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApostaUpdateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedUpdateWithoutMeioPagamentoInput>;
    create: Prisma.XOR<Prisma.ApostaCreateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedCreateWithoutMeioPagamentoInput>;
};
export type ApostaUpdateWithWhereUniqueWithoutMeioPagamentoInput = {
    where: Prisma.ApostaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApostaUpdateWithoutMeioPagamentoInput, Prisma.ApostaUncheckedUpdateWithoutMeioPagamentoInput>;
};
export type ApostaUpdateManyWithWhereWithoutMeioPagamentoInput = {
    where: Prisma.ApostaScalarWhereInput;
    data: Prisma.XOR<Prisma.ApostaUpdateManyMutationInput, Prisma.ApostaUncheckedUpdateManyWithoutMeioPagamentoInput>;
};
export type ApostaCreateManyCampanhaOpcaoInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    meioPagamentoId: number;
};
export type ApostaUpdateWithoutCampanhaOpcaoInput = {
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutApostasNestedInput;
    meioPagamento?: Prisma.MeioPagamentoUpdateOneRequiredWithoutApostasNestedInput;
};
export type ApostaUncheckedUpdateWithoutCampanhaOpcaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaUncheckedUpdateManyWithoutCampanhaOpcaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaCreateManyUsuarioInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    meioPagamentoId: number;
    campanhaOpcaoId: number;
};
export type ApostaUpdateWithoutUsuarioInput = {
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    meioPagamento?: Prisma.MeioPagamentoUpdateOneRequiredWithoutApostasNestedInput;
    campanhaOpcao?: Prisma.CampanhaOpcaoUpdateOneRequiredWithoutApostasNestedInput;
};
export type ApostaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    meioPagamentoId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaCreateManyMeioPagamentoInput = {
    id?: number;
    dtCriacao?: Date | string;
    comprovante?: string | null;
    status: $Enums.StatusAposta;
    usuarioId: number;
    campanhaOpcaoId: number;
};
export type ApostaUpdateWithoutMeioPagamentoInput = {
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutApostasNestedInput;
    campanhaOpcao?: Prisma.CampanhaOpcaoUpdateOneRequiredWithoutApostasNestedInput;
};
export type ApostaUncheckedUpdateWithoutMeioPagamentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaUncheckedUpdateManyWithoutMeioPagamentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    dtCriacao?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comprovante?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusApostaFieldUpdateOperationsInput | $Enums.StatusAposta;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    campanhaOpcaoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApostaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dtCriacao?: boolean;
    comprovante?: boolean;
    status?: boolean;
    usuarioId?: boolean;
    meioPagamentoId?: boolean;
    campanhaOpcaoId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aposta"]>;
export type ApostaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dtCriacao?: boolean;
    comprovante?: boolean;
    status?: boolean;
    usuarioId?: boolean;
    meioPagamentoId?: boolean;
    campanhaOpcaoId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aposta"]>;
export type ApostaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dtCriacao?: boolean;
    comprovante?: boolean;
    status?: boolean;
    usuarioId?: boolean;
    meioPagamentoId?: boolean;
    campanhaOpcaoId?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aposta"]>;
export type ApostaSelectScalar = {
    id?: boolean;
    dtCriacao?: boolean;
    comprovante?: boolean;
    status?: boolean;
    usuarioId?: boolean;
    meioPagamentoId?: boolean;
    campanhaOpcaoId?: boolean;
};
export type ApostaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dtCriacao" | "comprovante" | "status" | "usuarioId" | "meioPagamentoId" | "campanhaOpcaoId", ExtArgs["result"]["aposta"]>;
export type ApostaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
};
export type ApostaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
};
export type ApostaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    meioPagamento?: boolean | Prisma.MeioPagamentoDefaultArgs<ExtArgs>;
    campanhaOpcao?: boolean | Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>;
};
export type $ApostaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Aposta";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        meioPagamento: Prisma.$MeioPagamentoPayload<ExtArgs>;
        campanhaOpcao: Prisma.$CampanhaOpcaoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        dtCriacao: Date;
        comprovante: string | null;
        status: $Enums.StatusAposta;
        usuarioId: number;
        meioPagamentoId: number;
        campanhaOpcaoId: number;
    }, ExtArgs["result"]["aposta"]>;
    composites: {};
};
export type ApostaGetPayload<S extends boolean | null | undefined | ApostaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApostaPayload, S>;
export type ApostaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApostaCountAggregateInputType | true;
};
export interface ApostaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Aposta'];
        meta: {
            name: 'Aposta';
        };
    };
    /**
     * Find zero or one Aposta that matches the filter.
     * @param {ApostaFindUniqueArgs} args - Arguments to find a Aposta
     * @example
     * // Get one Aposta
     * const aposta = await prisma.aposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApostaFindUniqueArgs>(args: Prisma.SelectSubset<T, ApostaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Aposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApostaFindUniqueOrThrowArgs} args - Arguments to find a Aposta
     * @example
     * // Get one Aposta
     * const aposta = await prisma.aposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApostaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Aposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaFindFirstArgs} args - Arguments to find a Aposta
     * @example
     * // Get one Aposta
     * const aposta = await prisma.aposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApostaFindFirstArgs>(args?: Prisma.SelectSubset<T, ApostaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Aposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaFindFirstOrThrowArgs} args - Arguments to find a Aposta
     * @example
     * // Get one Aposta
     * const aposta = await prisma.aposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApostaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApostaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Apostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apostas
     * const apostas = await prisma.aposta.findMany()
     *
     * // Get first 10 Apostas
     * const apostas = await prisma.aposta.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const apostaWithIdOnly = await prisma.aposta.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApostaFindManyArgs>(args?: Prisma.SelectSubset<T, ApostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Aposta.
     * @param {ApostaCreateArgs} args - Arguments to create a Aposta.
     * @example
     * // Create one Aposta
     * const Aposta = await prisma.aposta.create({
     *   data: {
     *     // ... data to create a Aposta
     *   }
     * })
     *
     */
    create<T extends ApostaCreateArgs>(args: Prisma.SelectSubset<T, ApostaCreateArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Apostas.
     * @param {ApostaCreateManyArgs} args - Arguments to create many Apostas.
     * @example
     * // Create many Apostas
     * const aposta = await prisma.aposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApostaCreateManyArgs>(args?: Prisma.SelectSubset<T, ApostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Apostas and returns the data saved in the database.
     * @param {ApostaCreateManyAndReturnArgs} args - Arguments to create many Apostas.
     * @example
     * // Create many Apostas
     * const aposta = await prisma.aposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Apostas and only return the `id`
     * const apostaWithIdOnly = await prisma.aposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApostaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Aposta.
     * @param {ApostaDeleteArgs} args - Arguments to delete one Aposta.
     * @example
     * // Delete one Aposta
     * const Aposta = await prisma.aposta.delete({
     *   where: {
     *     // ... filter to delete one Aposta
     *   }
     * })
     *
     */
    delete<T extends ApostaDeleteArgs>(args: Prisma.SelectSubset<T, ApostaDeleteArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Aposta.
     * @param {ApostaUpdateArgs} args - Arguments to update one Aposta.
     * @example
     * // Update one Aposta
     * const aposta = await prisma.aposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApostaUpdateArgs>(args: Prisma.SelectSubset<T, ApostaUpdateArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Apostas.
     * @param {ApostaDeleteManyArgs} args - Arguments to filter Apostas to delete.
     * @example
     * // Delete a few Apostas
     * const { count } = await prisma.aposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApostaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Apostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apostas
     * const aposta = await prisma.aposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApostaUpdateManyArgs>(args: Prisma.SelectSubset<T, ApostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Apostas and returns the data updated in the database.
     * @param {ApostaUpdateManyAndReturnArgs} args - Arguments to update many Apostas.
     * @example
     * // Update many Apostas
     * const aposta = await prisma.aposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Apostas and only return the `id`
     * const apostaWithIdOnly = await prisma.aposta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApostaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Aposta.
     * @param {ApostaUpsertArgs} args - Arguments to update or create a Aposta.
     * @example
     * // Update or create a Aposta
     * const aposta = await prisma.aposta.upsert({
     *   create: {
     *     // ... data to create a Aposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aposta we want to update
     *   }
     * })
     */
    upsert<T extends ApostaUpsertArgs>(args: Prisma.SelectSubset<T, ApostaUpsertArgs<ExtArgs>>): Prisma.Prisma__ApostaClient<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Apostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaCountArgs} args - Arguments to filter Apostas to count.
     * @example
     * // Count the number of Apostas
     * const count = await prisma.aposta.count({
     *   where: {
     *     // ... the filter for the Apostas we want to count
     *   }
     * })
    **/
    count<T extends ApostaCountArgs>(args?: Prisma.Subset<T, ApostaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApostaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Aposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApostaAggregateArgs>(args: Prisma.Subset<T, ApostaAggregateArgs>): Prisma.PrismaPromise<GetApostaAggregateType<T>>;
    /**
     * Group by Aposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApostaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ApostaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApostaGroupByArgs['orderBy'];
    } : {
        orderBy?: ApostaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Aposta model
     */
    readonly fields: ApostaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Aposta.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApostaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    meioPagamento<T extends Prisma.MeioPagamentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MeioPagamentoDefaultArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    campanhaOpcao<T extends Prisma.CampanhaOpcaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampanhaOpcaoDefaultArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Aposta model
 */
export interface ApostaFieldRefs {
    readonly id: Prisma.FieldRef<"Aposta", 'Int'>;
    readonly dtCriacao: Prisma.FieldRef<"Aposta", 'DateTime'>;
    readonly comprovante: Prisma.FieldRef<"Aposta", 'String'>;
    readonly status: Prisma.FieldRef<"Aposta", 'StatusAposta'>;
    readonly usuarioId: Prisma.FieldRef<"Aposta", 'Int'>;
    readonly meioPagamentoId: Prisma.FieldRef<"Aposta", 'Int'>;
    readonly campanhaOpcaoId: Prisma.FieldRef<"Aposta", 'Int'>;
}
/**
 * Aposta findUnique
 */
export type ApostaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter, which Aposta to fetch.
     */
    where: Prisma.ApostaWhereUniqueInput;
};
/**
 * Aposta findUniqueOrThrow
 */
export type ApostaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter, which Aposta to fetch.
     */
    where: Prisma.ApostaWhereUniqueInput;
};
/**
 * Aposta findFirst
 */
export type ApostaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter, which Aposta to fetch.
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apostas to fetch.
     */
    orderBy?: Prisma.ApostaOrderByWithRelationInput | Prisma.ApostaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Apostas.
     */
    cursor?: Prisma.ApostaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apostas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apostas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apostas.
     */
    distinct?: Prisma.ApostaScalarFieldEnum | Prisma.ApostaScalarFieldEnum[];
};
/**
 * Aposta findFirstOrThrow
 */
export type ApostaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter, which Aposta to fetch.
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apostas to fetch.
     */
    orderBy?: Prisma.ApostaOrderByWithRelationInput | Prisma.ApostaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Apostas.
     */
    cursor?: Prisma.ApostaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apostas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apostas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apostas.
     */
    distinct?: Prisma.ApostaScalarFieldEnum | Prisma.ApostaScalarFieldEnum[];
};
/**
 * Aposta findMany
 */
export type ApostaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter, which Apostas to fetch.
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apostas to fetch.
     */
    orderBy?: Prisma.ApostaOrderByWithRelationInput | Prisma.ApostaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Apostas.
     */
    cursor?: Prisma.ApostaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apostas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apostas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apostas.
     */
    distinct?: Prisma.ApostaScalarFieldEnum | Prisma.ApostaScalarFieldEnum[];
};
/**
 * Aposta create
 */
export type ApostaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Aposta.
     */
    data: Prisma.XOR<Prisma.ApostaCreateInput, Prisma.ApostaUncheckedCreateInput>;
};
/**
 * Aposta createMany
 */
export type ApostaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apostas.
     */
    data: Prisma.ApostaCreateManyInput | Prisma.ApostaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Aposta createManyAndReturn
 */
export type ApostaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * The data used to create many Apostas.
     */
    data: Prisma.ApostaCreateManyInput | Prisma.ApostaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Aposta update
 */
export type ApostaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Aposta.
     */
    data: Prisma.XOR<Prisma.ApostaUpdateInput, Prisma.ApostaUncheckedUpdateInput>;
    /**
     * Choose, which Aposta to update.
     */
    where: Prisma.ApostaWhereUniqueInput;
};
/**
 * Aposta updateMany
 */
export type ApostaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Apostas.
     */
    data: Prisma.XOR<Prisma.ApostaUpdateManyMutationInput, Prisma.ApostaUncheckedUpdateManyInput>;
    /**
     * Filter which Apostas to update
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * Limit how many Apostas to update.
     */
    limit?: number;
};
/**
 * Aposta updateManyAndReturn
 */
export type ApostaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * The data used to update Apostas.
     */
    data: Prisma.XOR<Prisma.ApostaUpdateManyMutationInput, Prisma.ApostaUncheckedUpdateManyInput>;
    /**
     * Filter which Apostas to update
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * Limit how many Apostas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Aposta upsert
 */
export type ApostaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Aposta to update in case it exists.
     */
    where: Prisma.ApostaWhereUniqueInput;
    /**
     * In case the Aposta found by the `where` argument doesn't exist, create a new Aposta with this data.
     */
    create: Prisma.XOR<Prisma.ApostaCreateInput, Prisma.ApostaUncheckedCreateInput>;
    /**
     * In case the Aposta was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApostaUpdateInput, Prisma.ApostaUncheckedUpdateInput>;
};
/**
 * Aposta delete
 */
export type ApostaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
    /**
     * Filter which Aposta to delete.
     */
    where: Prisma.ApostaWhereUniqueInput;
};
/**
 * Aposta deleteMany
 */
export type ApostaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Apostas to delete
     */
    where?: Prisma.ApostaWhereInput;
    /**
     * Limit how many Apostas to delete.
     */
    limit?: number;
};
/**
 * Aposta without action
 */
export type ApostaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aposta
     */
    select?: Prisma.ApostaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Aposta
     */
    omit?: Prisma.ApostaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApostaInclude<ExtArgs> | null;
};
//# sourceMappingURL=Aposta.d.ts.map