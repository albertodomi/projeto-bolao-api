import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CampanhaOpcao
 *
 */
export type CampanhaOpcaoModel = runtime.Types.Result.DefaultSelection<Prisma.$CampanhaOpcaoPayload>;
export type AggregateCampanhaOpcao = {
    _count: CampanhaOpcaoCountAggregateOutputType | null;
    _avg: CampanhaOpcaoAvgAggregateOutputType | null;
    _sum: CampanhaOpcaoSumAggregateOutputType | null;
    _min: CampanhaOpcaoMinAggregateOutputType | null;
    _max: CampanhaOpcaoMaxAggregateOutputType | null;
};
export type CampanhaOpcaoAvgAggregateOutputType = {
    id: number | null;
    campanhaId: number | null;
};
export type CampanhaOpcaoSumAggregateOutputType = {
    id: number | null;
    campanhaId: number | null;
};
export type CampanhaOpcaoMinAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: $Enums.StatusOpcao | null;
    ehResultadoFinal: boolean | null;
    campanhaId: number | null;
};
export type CampanhaOpcaoMaxAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: $Enums.StatusOpcao | null;
    ehResultadoFinal: boolean | null;
    campanhaId: number | null;
};
export type CampanhaOpcaoCountAggregateOutputType = {
    id: number;
    descricao: number;
    status: number;
    ehResultadoFinal: number;
    campanhaId: number;
    _all: number;
};
export type CampanhaOpcaoAvgAggregateInputType = {
    id?: true;
    campanhaId?: true;
};
export type CampanhaOpcaoSumAggregateInputType = {
    id?: true;
    campanhaId?: true;
};
export type CampanhaOpcaoMinAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    ehResultadoFinal?: true;
    campanhaId?: true;
};
export type CampanhaOpcaoMaxAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    ehResultadoFinal?: true;
    campanhaId?: true;
};
export type CampanhaOpcaoCountAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    ehResultadoFinal?: true;
    campanhaId?: true;
    _all?: true;
};
export type CampanhaOpcaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CampanhaOpcao to aggregate.
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CampanhaOpcaos to fetch.
     */
    orderBy?: Prisma.CampanhaOpcaoOrderByWithRelationInput | Prisma.CampanhaOpcaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CampanhaOpcaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CampanhaOpcaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CampanhaOpcaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CampanhaOpcaos
    **/
    _count?: true | CampanhaOpcaoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CampanhaOpcaoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CampanhaOpcaoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaOpcaoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaOpcaoMaxAggregateInputType;
};
export type GetCampanhaOpcaoAggregateType<T extends CampanhaOpcaoAggregateArgs> = {
    [P in keyof T & keyof AggregateCampanhaOpcao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampanhaOpcao[P]> : Prisma.GetScalarType<T[P], AggregateCampanhaOpcao[P]>;
};
export type CampanhaOpcaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampanhaOpcaoWhereInput;
    orderBy?: Prisma.CampanhaOpcaoOrderByWithAggregationInput | Prisma.CampanhaOpcaoOrderByWithAggregationInput[];
    by: Prisma.CampanhaOpcaoScalarFieldEnum[] | Prisma.CampanhaOpcaoScalarFieldEnum;
    having?: Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampanhaOpcaoCountAggregateInputType | true;
    _avg?: CampanhaOpcaoAvgAggregateInputType;
    _sum?: CampanhaOpcaoSumAggregateInputType;
    _min?: CampanhaOpcaoMinAggregateInputType;
    _max?: CampanhaOpcaoMaxAggregateInputType;
};
export type CampanhaOpcaoGroupByOutputType = {
    id: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal: boolean;
    campanhaId: number;
    _count: CampanhaOpcaoCountAggregateOutputType | null;
    _avg: CampanhaOpcaoAvgAggregateOutputType | null;
    _sum: CampanhaOpcaoSumAggregateOutputType | null;
    _min: CampanhaOpcaoMinAggregateOutputType | null;
    _max: CampanhaOpcaoMaxAggregateOutputType | null;
};
export type GetCampanhaOpcaoGroupByPayload<T extends CampanhaOpcaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampanhaOpcaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampanhaOpcaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampanhaOpcaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampanhaOpcaoGroupByOutputType[P]>;
}>>;
export type CampanhaOpcaoWhereInput = {
    AND?: Prisma.CampanhaOpcaoWhereInput | Prisma.CampanhaOpcaoWhereInput[];
    OR?: Prisma.CampanhaOpcaoWhereInput[];
    NOT?: Prisma.CampanhaOpcaoWhereInput | Prisma.CampanhaOpcaoWhereInput[];
    id?: Prisma.IntFilter<"CampanhaOpcao"> | number;
    descricao?: Prisma.StringFilter<"CampanhaOpcao"> | string;
    status?: Prisma.EnumStatusOpcaoFilter<"CampanhaOpcao"> | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFilter<"CampanhaOpcao"> | boolean;
    campanhaId?: Prisma.IntFilter<"CampanhaOpcao"> | number;
    campanha?: Prisma.XOR<Prisma.CampanhaScalarRelationFilter, Prisma.CampanhaWhereInput>;
    apostas?: Prisma.ApostaListRelationFilter;
};
export type CampanhaOpcaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ehResultadoFinal?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
    campanha?: Prisma.CampanhaOrderByWithRelationInput;
    apostas?: Prisma.ApostaOrderByRelationAggregateInput;
};
export type CampanhaOpcaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    campanhaId_descricao?: Prisma.CampanhaOpcaoCampanhaIdDescricaoCompoundUniqueInput;
    AND?: Prisma.CampanhaOpcaoWhereInput | Prisma.CampanhaOpcaoWhereInput[];
    OR?: Prisma.CampanhaOpcaoWhereInput[];
    NOT?: Prisma.CampanhaOpcaoWhereInput | Prisma.CampanhaOpcaoWhereInput[];
    descricao?: Prisma.StringFilter<"CampanhaOpcao"> | string;
    status?: Prisma.EnumStatusOpcaoFilter<"CampanhaOpcao"> | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFilter<"CampanhaOpcao"> | boolean;
    campanhaId?: Prisma.IntFilter<"CampanhaOpcao"> | number;
    campanha?: Prisma.XOR<Prisma.CampanhaScalarRelationFilter, Prisma.CampanhaWhereInput>;
    apostas?: Prisma.ApostaListRelationFilter;
}, "id" | "campanhaId_descricao">;
export type CampanhaOpcaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ehResultadoFinal?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
    _count?: Prisma.CampanhaOpcaoCountOrderByAggregateInput;
    _avg?: Prisma.CampanhaOpcaoAvgOrderByAggregateInput;
    _max?: Prisma.CampanhaOpcaoMaxOrderByAggregateInput;
    _min?: Prisma.CampanhaOpcaoMinOrderByAggregateInput;
    _sum?: Prisma.CampanhaOpcaoSumOrderByAggregateInput;
};
export type CampanhaOpcaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput | Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput | Prisma.CampanhaOpcaoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CampanhaOpcao"> | number;
    descricao?: Prisma.StringWithAggregatesFilter<"CampanhaOpcao"> | string;
    status?: Prisma.EnumStatusOpcaoWithAggregatesFilter<"CampanhaOpcao"> | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolWithAggregatesFilter<"CampanhaOpcao"> | boolean;
    campanhaId?: Prisma.IntWithAggregatesFilter<"CampanhaOpcao"> | number;
};
export type CampanhaOpcaoCreateInput = {
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    campanha: Prisma.CampanhaCreateNestedOneWithoutOpcoesInput;
    apostas?: Prisma.ApostaCreateNestedManyWithoutCampanhaOpcaoInput;
};
export type CampanhaOpcaoUncheckedCreateInput = {
    id?: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    campanhaId: number;
    apostas?: Prisma.ApostaUncheckedCreateNestedManyWithoutCampanhaOpcaoInput;
};
export type CampanhaOpcaoUpdateInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    campanha?: Prisma.CampanhaUpdateOneRequiredWithoutOpcoesNestedInput;
    apostas?: Prisma.ApostaUpdateManyWithoutCampanhaOpcaoNestedInput;
};
export type CampanhaOpcaoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    campanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
    apostas?: Prisma.ApostaUncheckedUpdateManyWithoutCampanhaOpcaoNestedInput;
};
export type CampanhaOpcaoCreateManyInput = {
    id?: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    campanhaId: number;
};
export type CampanhaOpcaoUpdateManyMutationInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CampanhaOpcaoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    campanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CampanhaOpcaoListRelationFilter = {
    every?: Prisma.CampanhaOpcaoWhereInput;
    some?: Prisma.CampanhaOpcaoWhereInput;
    none?: Prisma.CampanhaOpcaoWhereInput;
};
export type CampanhaOpcaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampanhaOpcaoCampanhaIdDescricaoCompoundUniqueInput = {
    campanhaId: number;
    descricao: string;
};
export type CampanhaOpcaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ehResultadoFinal?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
};
export type CampanhaOpcaoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
};
export type CampanhaOpcaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ehResultadoFinal?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
};
export type CampanhaOpcaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ehResultadoFinal?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
};
export type CampanhaOpcaoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campanhaId?: Prisma.SortOrder;
};
export type CampanhaOpcaoScalarRelationFilter = {
    is?: Prisma.CampanhaOpcaoWhereInput;
    isNot?: Prisma.CampanhaOpcaoWhereInput;
};
export type CampanhaOpcaoCreateNestedManyWithoutCampanhaInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput> | Prisma.CampanhaOpcaoCreateWithoutCampanhaInput[] | Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput | Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput[];
    createMany?: Prisma.CampanhaOpcaoCreateManyCampanhaInputEnvelope;
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
};
export type CampanhaOpcaoUncheckedCreateNestedManyWithoutCampanhaInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput> | Prisma.CampanhaOpcaoCreateWithoutCampanhaInput[] | Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput | Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput[];
    createMany?: Prisma.CampanhaOpcaoCreateManyCampanhaInputEnvelope;
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
};
export type CampanhaOpcaoUpdateManyWithoutCampanhaNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput> | Prisma.CampanhaOpcaoCreateWithoutCampanhaInput[] | Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput | Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput[];
    upsert?: Prisma.CampanhaOpcaoUpsertWithWhereUniqueWithoutCampanhaInput | Prisma.CampanhaOpcaoUpsertWithWhereUniqueWithoutCampanhaInput[];
    createMany?: Prisma.CampanhaOpcaoCreateManyCampanhaInputEnvelope;
    set?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    disconnect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    delete?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    update?: Prisma.CampanhaOpcaoUpdateWithWhereUniqueWithoutCampanhaInput | Prisma.CampanhaOpcaoUpdateWithWhereUniqueWithoutCampanhaInput[];
    updateMany?: Prisma.CampanhaOpcaoUpdateManyWithWhereWithoutCampanhaInput | Prisma.CampanhaOpcaoUpdateManyWithWhereWithoutCampanhaInput[];
    deleteMany?: Prisma.CampanhaOpcaoScalarWhereInput | Prisma.CampanhaOpcaoScalarWhereInput[];
};
export type CampanhaOpcaoUncheckedUpdateManyWithoutCampanhaNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput> | Prisma.CampanhaOpcaoCreateWithoutCampanhaInput[] | Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput | Prisma.CampanhaOpcaoCreateOrConnectWithoutCampanhaInput[];
    upsert?: Prisma.CampanhaOpcaoUpsertWithWhereUniqueWithoutCampanhaInput | Prisma.CampanhaOpcaoUpsertWithWhereUniqueWithoutCampanhaInput[];
    createMany?: Prisma.CampanhaOpcaoCreateManyCampanhaInputEnvelope;
    set?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    disconnect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    delete?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput | Prisma.CampanhaOpcaoWhereUniqueInput[];
    update?: Prisma.CampanhaOpcaoUpdateWithWhereUniqueWithoutCampanhaInput | Prisma.CampanhaOpcaoUpdateWithWhereUniqueWithoutCampanhaInput[];
    updateMany?: Prisma.CampanhaOpcaoUpdateManyWithWhereWithoutCampanhaInput | Prisma.CampanhaOpcaoUpdateManyWithWhereWithoutCampanhaInput[];
    deleteMany?: Prisma.CampanhaOpcaoScalarWhereInput | Prisma.CampanhaOpcaoScalarWhereInput[];
};
export type EnumStatusOpcaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusOpcao;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type CampanhaOpcaoCreateNestedOneWithoutApostasInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutApostasInput>;
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutApostasInput;
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput;
};
export type CampanhaOpcaoUpdateOneRequiredWithoutApostasNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutApostasInput>;
    connectOrCreate?: Prisma.CampanhaOpcaoCreateOrConnectWithoutApostasInput;
    upsert?: Prisma.CampanhaOpcaoUpsertWithoutApostasInput;
    connect?: Prisma.CampanhaOpcaoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampanhaOpcaoUpdateToOneWithWhereWithoutApostasInput, Prisma.CampanhaOpcaoUpdateWithoutApostasInput>, Prisma.CampanhaOpcaoUncheckedUpdateWithoutApostasInput>;
};
export type CampanhaOpcaoCreateWithoutCampanhaInput = {
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    apostas?: Prisma.ApostaCreateNestedManyWithoutCampanhaOpcaoInput;
};
export type CampanhaOpcaoUncheckedCreateWithoutCampanhaInput = {
    id?: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    apostas?: Prisma.ApostaUncheckedCreateNestedManyWithoutCampanhaOpcaoInput;
};
export type CampanhaOpcaoCreateOrConnectWithoutCampanhaInput = {
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput>;
};
export type CampanhaOpcaoCreateManyCampanhaInputEnvelope = {
    data: Prisma.CampanhaOpcaoCreateManyCampanhaInput | Prisma.CampanhaOpcaoCreateManyCampanhaInput[];
    skipDuplicates?: boolean;
};
export type CampanhaOpcaoUpsertWithWhereUniqueWithoutCampanhaInput = {
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampanhaOpcaoUpdateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedUpdateWithoutCampanhaInput>;
    create: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutCampanhaInput>;
};
export type CampanhaOpcaoUpdateWithWhereUniqueWithoutCampanhaInput = {
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateWithoutCampanhaInput, Prisma.CampanhaOpcaoUncheckedUpdateWithoutCampanhaInput>;
};
export type CampanhaOpcaoUpdateManyWithWhereWithoutCampanhaInput = {
    where: Prisma.CampanhaOpcaoScalarWhereInput;
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateManyMutationInput, Prisma.CampanhaOpcaoUncheckedUpdateManyWithoutCampanhaInput>;
};
export type CampanhaOpcaoScalarWhereInput = {
    AND?: Prisma.CampanhaOpcaoScalarWhereInput | Prisma.CampanhaOpcaoScalarWhereInput[];
    OR?: Prisma.CampanhaOpcaoScalarWhereInput[];
    NOT?: Prisma.CampanhaOpcaoScalarWhereInput | Prisma.CampanhaOpcaoScalarWhereInput[];
    id?: Prisma.IntFilter<"CampanhaOpcao"> | number;
    descricao?: Prisma.StringFilter<"CampanhaOpcao"> | string;
    status?: Prisma.EnumStatusOpcaoFilter<"CampanhaOpcao"> | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFilter<"CampanhaOpcao"> | boolean;
    campanhaId?: Prisma.IntFilter<"CampanhaOpcao"> | number;
};
export type CampanhaOpcaoCreateWithoutApostasInput = {
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    campanha: Prisma.CampanhaCreateNestedOneWithoutOpcoesInput;
};
export type CampanhaOpcaoUncheckedCreateWithoutApostasInput = {
    id?: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
    campanhaId: number;
};
export type CampanhaOpcaoCreateOrConnectWithoutApostasInput = {
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutApostasInput>;
};
export type CampanhaOpcaoUpsertWithoutApostasInput = {
    update: Prisma.XOR<Prisma.CampanhaOpcaoUpdateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedUpdateWithoutApostasInput>;
    create: Prisma.XOR<Prisma.CampanhaOpcaoCreateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedCreateWithoutApostasInput>;
    where?: Prisma.CampanhaOpcaoWhereInput;
};
export type CampanhaOpcaoUpdateToOneWithWhereWithoutApostasInput = {
    where?: Prisma.CampanhaOpcaoWhereInput;
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateWithoutApostasInput, Prisma.CampanhaOpcaoUncheckedUpdateWithoutApostasInput>;
};
export type CampanhaOpcaoUpdateWithoutApostasInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    campanha?: Prisma.CampanhaUpdateOneRequiredWithoutOpcoesNestedInput;
};
export type CampanhaOpcaoUncheckedUpdateWithoutApostasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    campanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CampanhaOpcaoCreateManyCampanhaInput = {
    id?: number;
    descricao: string;
    status: $Enums.StatusOpcao;
    ehResultadoFinal?: boolean;
};
export type CampanhaOpcaoUpdateWithoutCampanhaInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    apostas?: Prisma.ApostaUpdateManyWithoutCampanhaOpcaoNestedInput;
};
export type CampanhaOpcaoUncheckedUpdateWithoutCampanhaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    apostas?: Prisma.ApostaUncheckedUpdateManyWithoutCampanhaOpcaoNestedInput;
};
export type CampanhaOpcaoUncheckedUpdateManyWithoutCampanhaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusOpcaoFieldUpdateOperationsInput | $Enums.StatusOpcao;
    ehResultadoFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type CampanhaOpcaoCountOutputType
 */
export type CampanhaOpcaoCountOutputType = {
    apostas: number;
};
export type CampanhaOpcaoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apostas?: boolean | CampanhaOpcaoCountOutputTypeCountApostasArgs;
};
/**
 * CampanhaOpcaoCountOutputType without action
 */
export type CampanhaOpcaoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcaoCountOutputType
     */
    select?: Prisma.CampanhaOpcaoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CampanhaOpcaoCountOutputType without action
 */
export type CampanhaOpcaoCountOutputTypeCountApostasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApostaWhereInput;
};
export type CampanhaOpcaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    ehResultadoFinal?: boolean;
    campanhaId?: boolean;
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
    apostas?: boolean | Prisma.CampanhaOpcao$apostasArgs<ExtArgs>;
    _count?: boolean | Prisma.CampanhaOpcaoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanhaOpcao"]>;
export type CampanhaOpcaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    ehResultadoFinal?: boolean;
    campanhaId?: boolean;
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanhaOpcao"]>;
export type CampanhaOpcaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    ehResultadoFinal?: boolean;
    campanhaId?: boolean;
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanhaOpcao"]>;
export type CampanhaOpcaoSelectScalar = {
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    ehResultadoFinal?: boolean;
    campanhaId?: boolean;
};
export type CampanhaOpcaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "descricao" | "status" | "ehResultadoFinal" | "campanhaId", ExtArgs["result"]["campanhaOpcao"]>;
export type CampanhaOpcaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
    apostas?: boolean | Prisma.CampanhaOpcao$apostasArgs<ExtArgs>;
    _count?: boolean | Prisma.CampanhaOpcaoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampanhaOpcaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
};
export type CampanhaOpcaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campanha?: boolean | Prisma.CampanhaDefaultArgs<ExtArgs>;
};
export type $CampanhaOpcaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CampanhaOpcao";
    objects: {
        campanha: Prisma.$CampanhaPayload<ExtArgs>;
        apostas: Prisma.$ApostaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        descricao: string;
        status: $Enums.StatusOpcao;
        ehResultadoFinal: boolean;
        campanhaId: number;
    }, ExtArgs["result"]["campanhaOpcao"]>;
    composites: {};
};
export type CampanhaOpcaoGetPayload<S extends boolean | null | undefined | CampanhaOpcaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload, S>;
export type CampanhaOpcaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampanhaOpcaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampanhaOpcaoCountAggregateInputType | true;
};
export interface CampanhaOpcaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CampanhaOpcao'];
        meta: {
            name: 'CampanhaOpcao';
        };
    };
    /**
     * Find zero or one CampanhaOpcao that matches the filter.
     * @param {CampanhaOpcaoFindUniqueArgs} args - Arguments to find a CampanhaOpcao
     * @example
     * // Get one CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaOpcaoFindUniqueArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CampanhaOpcao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaOpcaoFindUniqueOrThrowArgs} args - Arguments to find a CampanhaOpcao
     * @example
     * // Get one CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaOpcaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CampanhaOpcao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoFindFirstArgs} args - Arguments to find a CampanhaOpcao
     * @example
     * // Get one CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaOpcaoFindFirstArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CampanhaOpcao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoFindFirstOrThrowArgs} args - Arguments to find a CampanhaOpcao
     * @example
     * // Get one CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaOpcaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CampanhaOpcaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampanhaOpcaos
     * const campanhaOpcaos = await prisma.campanhaOpcao.findMany()
     *
     * // Get first 10 CampanhaOpcaos
     * const campanhaOpcaos = await prisma.campanhaOpcao.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const campanhaOpcaoWithIdOnly = await prisma.campanhaOpcao.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CampanhaOpcaoFindManyArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CampanhaOpcao.
     * @param {CampanhaOpcaoCreateArgs} args - Arguments to create a CampanhaOpcao.
     * @example
     * // Create one CampanhaOpcao
     * const CampanhaOpcao = await prisma.campanhaOpcao.create({
     *   data: {
     *     // ... data to create a CampanhaOpcao
     *   }
     * })
     *
     */
    create<T extends CampanhaOpcaoCreateArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoCreateArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CampanhaOpcaos.
     * @param {CampanhaOpcaoCreateManyArgs} args - Arguments to create many CampanhaOpcaos.
     * @example
     * // Create many CampanhaOpcaos
     * const campanhaOpcao = await prisma.campanhaOpcao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CampanhaOpcaoCreateManyArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CampanhaOpcaos and returns the data saved in the database.
     * @param {CampanhaOpcaoCreateManyAndReturnArgs} args - Arguments to create many CampanhaOpcaos.
     * @example
     * // Create many CampanhaOpcaos
     * const campanhaOpcao = await prisma.campanhaOpcao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CampanhaOpcaos and only return the `id`
     * const campanhaOpcaoWithIdOnly = await prisma.campanhaOpcao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CampanhaOpcaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CampanhaOpcao.
     * @param {CampanhaOpcaoDeleteArgs} args - Arguments to delete one CampanhaOpcao.
     * @example
     * // Delete one CampanhaOpcao
     * const CampanhaOpcao = await prisma.campanhaOpcao.delete({
     *   where: {
     *     // ... filter to delete one CampanhaOpcao
     *   }
     * })
     *
     */
    delete<T extends CampanhaOpcaoDeleteArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoDeleteArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CampanhaOpcao.
     * @param {CampanhaOpcaoUpdateArgs} args - Arguments to update one CampanhaOpcao.
     * @example
     * // Update one CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CampanhaOpcaoUpdateArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoUpdateArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CampanhaOpcaos.
     * @param {CampanhaOpcaoDeleteManyArgs} args - Arguments to filter CampanhaOpcaos to delete.
     * @example
     * // Delete a few CampanhaOpcaos
     * const { count } = await prisma.campanhaOpcao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CampanhaOpcaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampanhaOpcaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CampanhaOpcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampanhaOpcaos
     * const campanhaOpcao = await prisma.campanhaOpcao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CampanhaOpcaoUpdateManyArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CampanhaOpcaos and returns the data updated in the database.
     * @param {CampanhaOpcaoUpdateManyAndReturnArgs} args - Arguments to update many CampanhaOpcaos.
     * @example
     * // Update many CampanhaOpcaos
     * const campanhaOpcao = await prisma.campanhaOpcao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CampanhaOpcaos and only return the `id`
     * const campanhaOpcaoWithIdOnly = await prisma.campanhaOpcao.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampanhaOpcaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CampanhaOpcao.
     * @param {CampanhaOpcaoUpsertArgs} args - Arguments to update or create a CampanhaOpcao.
     * @example
     * // Update or create a CampanhaOpcao
     * const campanhaOpcao = await prisma.campanhaOpcao.upsert({
     *   create: {
     *     // ... data to create a CampanhaOpcao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampanhaOpcao we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaOpcaoUpsertArgs>(args: Prisma.SelectSubset<T, CampanhaOpcaoUpsertArgs<ExtArgs>>): Prisma.Prisma__CampanhaOpcaoClient<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CampanhaOpcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoCountArgs} args - Arguments to filter CampanhaOpcaos to count.
     * @example
     * // Count the number of CampanhaOpcaos
     * const count = await prisma.campanhaOpcao.count({
     *   where: {
     *     // ... the filter for the CampanhaOpcaos we want to count
     *   }
     * })
    **/
    count<T extends CampanhaOpcaoCountArgs>(args?: Prisma.Subset<T, CampanhaOpcaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampanhaOpcaoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CampanhaOpcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampanhaOpcaoAggregateArgs>(args: Prisma.Subset<T, CampanhaOpcaoAggregateArgs>): Prisma.PrismaPromise<GetCampanhaOpcaoAggregateType<T>>;
    /**
     * Group by CampanhaOpcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaOpcaoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CampanhaOpcaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampanhaOpcaoGroupByArgs['orderBy'];
    } : {
        orderBy?: CampanhaOpcaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampanhaOpcaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaOpcaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CampanhaOpcao model
     */
    readonly fields: CampanhaOpcaoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CampanhaOpcao.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CampanhaOpcaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campanha<T extends Prisma.CampanhaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampanhaDefaultArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    apostas<T extends Prisma.CampanhaOpcao$apostasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampanhaOpcao$apostasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CampanhaOpcao model
 */
export interface CampanhaOpcaoFieldRefs {
    readonly id: Prisma.FieldRef<"CampanhaOpcao", 'Int'>;
    readonly descricao: Prisma.FieldRef<"CampanhaOpcao", 'String'>;
    readonly status: Prisma.FieldRef<"CampanhaOpcao", 'StatusOpcao'>;
    readonly ehResultadoFinal: Prisma.FieldRef<"CampanhaOpcao", 'Boolean'>;
    readonly campanhaId: Prisma.FieldRef<"CampanhaOpcao", 'Int'>;
}
/**
 * CampanhaOpcao findUnique
 */
export type CampanhaOpcaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter, which CampanhaOpcao to fetch.
     */
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
};
/**
 * CampanhaOpcao findUniqueOrThrow
 */
export type CampanhaOpcaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter, which CampanhaOpcao to fetch.
     */
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
};
/**
 * CampanhaOpcao findFirst
 */
export type CampanhaOpcaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter, which CampanhaOpcao to fetch.
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CampanhaOpcaos to fetch.
     */
    orderBy?: Prisma.CampanhaOpcaoOrderByWithRelationInput | Prisma.CampanhaOpcaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CampanhaOpcaos.
     */
    cursor?: Prisma.CampanhaOpcaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CampanhaOpcaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CampanhaOpcaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CampanhaOpcaos.
     */
    distinct?: Prisma.CampanhaOpcaoScalarFieldEnum | Prisma.CampanhaOpcaoScalarFieldEnum[];
};
/**
 * CampanhaOpcao findFirstOrThrow
 */
export type CampanhaOpcaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter, which CampanhaOpcao to fetch.
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CampanhaOpcaos to fetch.
     */
    orderBy?: Prisma.CampanhaOpcaoOrderByWithRelationInput | Prisma.CampanhaOpcaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CampanhaOpcaos.
     */
    cursor?: Prisma.CampanhaOpcaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CampanhaOpcaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CampanhaOpcaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CampanhaOpcaos.
     */
    distinct?: Prisma.CampanhaOpcaoScalarFieldEnum | Prisma.CampanhaOpcaoScalarFieldEnum[];
};
/**
 * CampanhaOpcao findMany
 */
export type CampanhaOpcaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter, which CampanhaOpcaos to fetch.
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CampanhaOpcaos to fetch.
     */
    orderBy?: Prisma.CampanhaOpcaoOrderByWithRelationInput | Prisma.CampanhaOpcaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CampanhaOpcaos.
     */
    cursor?: Prisma.CampanhaOpcaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CampanhaOpcaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CampanhaOpcaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CampanhaOpcaos.
     */
    distinct?: Prisma.CampanhaOpcaoScalarFieldEnum | Prisma.CampanhaOpcaoScalarFieldEnum[];
};
/**
 * CampanhaOpcao create
 */
export type CampanhaOpcaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * The data needed to create a CampanhaOpcao.
     */
    data: Prisma.XOR<Prisma.CampanhaOpcaoCreateInput, Prisma.CampanhaOpcaoUncheckedCreateInput>;
};
/**
 * CampanhaOpcao createMany
 */
export type CampanhaOpcaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampanhaOpcaos.
     */
    data: Prisma.CampanhaOpcaoCreateManyInput | Prisma.CampanhaOpcaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CampanhaOpcao createManyAndReturn
 */
export type CampanhaOpcaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * The data used to create many CampanhaOpcaos.
     */
    data: Prisma.CampanhaOpcaoCreateManyInput | Prisma.CampanhaOpcaoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CampanhaOpcao update
 */
export type CampanhaOpcaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * The data needed to update a CampanhaOpcao.
     */
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateInput, Prisma.CampanhaOpcaoUncheckedUpdateInput>;
    /**
     * Choose, which CampanhaOpcao to update.
     */
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
};
/**
 * CampanhaOpcao updateMany
 */
export type CampanhaOpcaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CampanhaOpcaos.
     */
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateManyMutationInput, Prisma.CampanhaOpcaoUncheckedUpdateManyInput>;
    /**
     * Filter which CampanhaOpcaos to update
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * Limit how many CampanhaOpcaos to update.
     */
    limit?: number;
};
/**
 * CampanhaOpcao updateManyAndReturn
 */
export type CampanhaOpcaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * The data used to update CampanhaOpcaos.
     */
    data: Prisma.XOR<Prisma.CampanhaOpcaoUpdateManyMutationInput, Prisma.CampanhaOpcaoUncheckedUpdateManyInput>;
    /**
     * Filter which CampanhaOpcaos to update
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * Limit how many CampanhaOpcaos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CampanhaOpcao upsert
 */
export type CampanhaOpcaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * The filter to search for the CampanhaOpcao to update in case it exists.
     */
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
    /**
     * In case the CampanhaOpcao found by the `where` argument doesn't exist, create a new CampanhaOpcao with this data.
     */
    create: Prisma.XOR<Prisma.CampanhaOpcaoCreateInput, Prisma.CampanhaOpcaoUncheckedCreateInput>;
    /**
     * In case the CampanhaOpcao was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CampanhaOpcaoUpdateInput, Prisma.CampanhaOpcaoUncheckedUpdateInput>;
};
/**
 * CampanhaOpcao delete
 */
export type CampanhaOpcaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
    /**
     * Filter which CampanhaOpcao to delete.
     */
    where: Prisma.CampanhaOpcaoWhereUniqueInput;
};
/**
 * CampanhaOpcao deleteMany
 */
export type CampanhaOpcaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CampanhaOpcaos to delete
     */
    where?: Prisma.CampanhaOpcaoWhereInput;
    /**
     * Limit how many CampanhaOpcaos to delete.
     */
    limit?: number;
};
/**
 * CampanhaOpcao.apostas
 */
export type CampanhaOpcao$apostasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ApostaWhereInput;
    orderBy?: Prisma.ApostaOrderByWithRelationInput | Prisma.ApostaOrderByWithRelationInput[];
    cursor?: Prisma.ApostaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApostaScalarFieldEnum | Prisma.ApostaScalarFieldEnum[];
};
/**
 * CampanhaOpcao without action
 */
export type CampanhaOpcaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaOpcao
     */
    select?: Prisma.CampanhaOpcaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampanhaOpcao
     */
    omit?: Prisma.CampanhaOpcaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaOpcaoInclude<ExtArgs> | null;
};
//# sourceMappingURL=CampanhaOpcao.d.ts.map