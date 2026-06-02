import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Campanha
 *
 */
export type CampanhaModel = runtime.Types.Result.DefaultSelection<Prisma.$CampanhaPayload>;
export type AggregateCampanha = {
    _count: CampanhaCountAggregateOutputType | null;
    _avg: CampanhaAvgAggregateOutputType | null;
    _sum: CampanhaSumAggregateOutputType | null;
    _min: CampanhaMinAggregateOutputType | null;
    _max: CampanhaMaxAggregateOutputType | null;
};
export type CampanhaAvgAggregateOutputType = {
    id: number | null;
    taxaOperacional: runtime.Decimal | null;
    valorBolao: runtime.Decimal | null;
    tipoCampanhaId: number | null;
};
export type CampanhaSumAggregateOutputType = {
    id: number | null;
    taxaOperacional: runtime.Decimal | null;
    valorBolao: runtime.Decimal | null;
    tipoCampanhaId: number | null;
};
export type CampanhaMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    dtInicio: Date | null;
    dtFim: Date | null;
    taxaOperacional: runtime.Decimal | null;
    valorBolao: runtime.Decimal | null;
    codigoCampanha: string | null;
    status: $Enums.StatusCampanha | null;
    tipoCampanhaId: number | null;
};
export type CampanhaMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    dtInicio: Date | null;
    dtFim: Date | null;
    taxaOperacional: runtime.Decimal | null;
    valorBolao: runtime.Decimal | null;
    codigoCampanha: string | null;
    status: $Enums.StatusCampanha | null;
    tipoCampanhaId: number | null;
};
export type CampanhaCountAggregateOutputType = {
    id: number;
    nome: number;
    dtInicio: number;
    dtFim: number;
    taxaOperacional: number;
    valorBolao: number;
    codigoCampanha: number;
    status: number;
    tipoCampanhaId: number;
    _all: number;
};
export type CampanhaAvgAggregateInputType = {
    id?: true;
    taxaOperacional?: true;
    valorBolao?: true;
    tipoCampanhaId?: true;
};
export type CampanhaSumAggregateInputType = {
    id?: true;
    taxaOperacional?: true;
    valorBolao?: true;
    tipoCampanhaId?: true;
};
export type CampanhaMinAggregateInputType = {
    id?: true;
    nome?: true;
    dtInicio?: true;
    dtFim?: true;
    taxaOperacional?: true;
    valorBolao?: true;
    codigoCampanha?: true;
    status?: true;
    tipoCampanhaId?: true;
};
export type CampanhaMaxAggregateInputType = {
    id?: true;
    nome?: true;
    dtInicio?: true;
    dtFim?: true;
    taxaOperacional?: true;
    valorBolao?: true;
    codigoCampanha?: true;
    status?: true;
    tipoCampanhaId?: true;
};
export type CampanhaCountAggregateInputType = {
    id?: true;
    nome?: true;
    dtInicio?: true;
    dtFim?: true;
    taxaOperacional?: true;
    valorBolao?: true;
    codigoCampanha?: true;
    status?: true;
    tipoCampanhaId?: true;
    _all?: true;
};
export type CampanhaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campanha to aggregate.
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: Prisma.CampanhaOrderByWithRelationInput | Prisma.CampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Campanhas
    **/
    _count?: true | CampanhaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CampanhaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CampanhaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CampanhaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CampanhaMaxAggregateInputType;
};
export type GetCampanhaAggregateType<T extends CampanhaAggregateArgs> = {
    [P in keyof T & keyof AggregateCampanha]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampanha[P]> : Prisma.GetScalarType<T[P], AggregateCampanha[P]>;
};
export type CampanhaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampanhaWhereInput;
    orderBy?: Prisma.CampanhaOrderByWithAggregationInput | Prisma.CampanhaOrderByWithAggregationInput[];
    by: Prisma.CampanhaScalarFieldEnum[] | Prisma.CampanhaScalarFieldEnum;
    having?: Prisma.CampanhaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampanhaCountAggregateInputType | true;
    _avg?: CampanhaAvgAggregateInputType;
    _sum?: CampanhaSumAggregateInputType;
    _min?: CampanhaMinAggregateInputType;
    _max?: CampanhaMaxAggregateInputType;
};
export type CampanhaGroupByOutputType = {
    id: number;
    nome: string;
    dtInicio: Date;
    dtFim: Date;
    taxaOperacional: runtime.Decimal;
    valorBolao: runtime.Decimal;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanhaId: number;
    _count: CampanhaCountAggregateOutputType | null;
    _avg: CampanhaAvgAggregateOutputType | null;
    _sum: CampanhaSumAggregateOutputType | null;
    _min: CampanhaMinAggregateOutputType | null;
    _max: CampanhaMaxAggregateOutputType | null;
};
export type GetCampanhaGroupByPayload<T extends CampanhaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampanhaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampanhaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampanhaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampanhaGroupByOutputType[P]>;
}>>;
export type CampanhaWhereInput = {
    AND?: Prisma.CampanhaWhereInput | Prisma.CampanhaWhereInput[];
    OR?: Prisma.CampanhaWhereInput[];
    NOT?: Prisma.CampanhaWhereInput | Prisma.CampanhaWhereInput[];
    id?: Prisma.IntFilter<"Campanha"> | number;
    nome?: Prisma.StringFilter<"Campanha"> | string;
    dtInicio?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    dtFim?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    taxaOperacional?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFilter<"Campanha"> | string;
    status?: Prisma.EnumStatusCampanhaFilter<"Campanha"> | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFilter<"Campanha"> | number;
    tipoCampanha?: Prisma.XOR<Prisma.TipoCampanhaScalarRelationFilter, Prisma.TipoCampanhaWhereInput>;
    opcoes?: Prisma.CampanhaOpcaoListRelationFilter;
};
export type CampanhaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    dtInicio?: Prisma.SortOrder;
    dtFim?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    codigoCampanha?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
    tipoCampanha?: Prisma.TipoCampanhaOrderByWithRelationInput;
    opcoes?: Prisma.CampanhaOpcaoOrderByRelationAggregateInput;
};
export type CampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    codigoCampanha?: string;
    AND?: Prisma.CampanhaWhereInput | Prisma.CampanhaWhereInput[];
    OR?: Prisma.CampanhaWhereInput[];
    NOT?: Prisma.CampanhaWhereInput | Prisma.CampanhaWhereInput[];
    nome?: Prisma.StringFilter<"Campanha"> | string;
    dtInicio?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    dtFim?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    taxaOperacional?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumStatusCampanhaFilter<"Campanha"> | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFilter<"Campanha"> | number;
    tipoCampanha?: Prisma.XOR<Prisma.TipoCampanhaScalarRelationFilter, Prisma.TipoCampanhaWhereInput>;
    opcoes?: Prisma.CampanhaOpcaoListRelationFilter;
}, "id" | "codigoCampanha">;
export type CampanhaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    dtInicio?: Prisma.SortOrder;
    dtFim?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    codigoCampanha?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
    _count?: Prisma.CampanhaCountOrderByAggregateInput;
    _avg?: Prisma.CampanhaAvgOrderByAggregateInput;
    _max?: Prisma.CampanhaMaxOrderByAggregateInput;
    _min?: Prisma.CampanhaMinOrderByAggregateInput;
    _sum?: Prisma.CampanhaSumOrderByAggregateInput;
};
export type CampanhaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampanhaScalarWhereWithAggregatesInput | Prisma.CampanhaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampanhaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampanhaScalarWhereWithAggregatesInput | Prisma.CampanhaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Campanha"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Campanha"> | string;
    dtInicio?: Prisma.DateTimeWithAggregatesFilter<"Campanha"> | Date | string;
    dtFim?: Prisma.DateTimeWithAggregatesFilter<"Campanha"> | Date | string;
    taxaOperacional?: Prisma.DecimalWithAggregatesFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalWithAggregatesFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringWithAggregatesFilter<"Campanha"> | string;
    status?: Prisma.EnumStatusCampanhaWithAggregatesFilter<"Campanha"> | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntWithAggregatesFilter<"Campanha"> | number;
};
export type CampanhaCreateInput = {
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanha: Prisma.TipoCampanhaCreateNestedOneWithoutCampanhasInput;
    opcoes?: Prisma.CampanhaOpcaoCreateNestedManyWithoutCampanhaInput;
};
export type CampanhaUncheckedCreateInput = {
    id?: number;
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanhaId: number;
    opcoes?: Prisma.CampanhaOpcaoUncheckedCreateNestedManyWithoutCampanhaInput;
};
export type CampanhaUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    tipoCampanha?: Prisma.TipoCampanhaUpdateOneRequiredWithoutCampanhasNestedInput;
    opcoes?: Prisma.CampanhaOpcaoUpdateManyWithoutCampanhaNestedInput;
};
export type CampanhaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
    opcoes?: Prisma.CampanhaOpcaoUncheckedUpdateManyWithoutCampanhaNestedInput;
};
export type CampanhaCreateManyInput = {
    id?: number;
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanhaId: number;
};
export type CampanhaUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
};
export type CampanhaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CampanhaListRelationFilter = {
    every?: Prisma.CampanhaWhereInput;
    some?: Prisma.CampanhaWhereInput;
    none?: Prisma.CampanhaWhereInput;
};
export type CampanhaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampanhaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    dtInicio?: Prisma.SortOrder;
    dtFim?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    codigoCampanha?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
};
export type CampanhaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
};
export type CampanhaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    dtInicio?: Prisma.SortOrder;
    dtFim?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    codigoCampanha?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
};
export type CampanhaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    dtInicio?: Prisma.SortOrder;
    dtFim?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    codigoCampanha?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
};
export type CampanhaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taxaOperacional?: Prisma.SortOrder;
    valorBolao?: Prisma.SortOrder;
    tipoCampanhaId?: Prisma.SortOrder;
};
export type CampanhaScalarRelationFilter = {
    is?: Prisma.CampanhaWhereInput;
    isNot?: Prisma.CampanhaWhereInput;
};
export type CampanhaCreateNestedManyWithoutTipoCampanhaInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput> | Prisma.CampanhaCreateWithoutTipoCampanhaInput[] | Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput | Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput[];
    createMany?: Prisma.CampanhaCreateManyTipoCampanhaInputEnvelope;
    connect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
};
export type CampanhaUncheckedCreateNestedManyWithoutTipoCampanhaInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput> | Prisma.CampanhaCreateWithoutTipoCampanhaInput[] | Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput | Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput[];
    createMany?: Prisma.CampanhaCreateManyTipoCampanhaInputEnvelope;
    connect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
};
export type CampanhaUpdateManyWithoutTipoCampanhaNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput> | Prisma.CampanhaCreateWithoutTipoCampanhaInput[] | Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput | Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput[];
    upsert?: Prisma.CampanhaUpsertWithWhereUniqueWithoutTipoCampanhaInput | Prisma.CampanhaUpsertWithWhereUniqueWithoutTipoCampanhaInput[];
    createMany?: Prisma.CampanhaCreateManyTipoCampanhaInputEnvelope;
    set?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    disconnect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    delete?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    connect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    update?: Prisma.CampanhaUpdateWithWhereUniqueWithoutTipoCampanhaInput | Prisma.CampanhaUpdateWithWhereUniqueWithoutTipoCampanhaInput[];
    updateMany?: Prisma.CampanhaUpdateManyWithWhereWithoutTipoCampanhaInput | Prisma.CampanhaUpdateManyWithWhereWithoutTipoCampanhaInput[];
    deleteMany?: Prisma.CampanhaScalarWhereInput | Prisma.CampanhaScalarWhereInput[];
};
export type CampanhaUncheckedUpdateManyWithoutTipoCampanhaNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput> | Prisma.CampanhaCreateWithoutTipoCampanhaInput[] | Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput[];
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput | Prisma.CampanhaCreateOrConnectWithoutTipoCampanhaInput[];
    upsert?: Prisma.CampanhaUpsertWithWhereUniqueWithoutTipoCampanhaInput | Prisma.CampanhaUpsertWithWhereUniqueWithoutTipoCampanhaInput[];
    createMany?: Prisma.CampanhaCreateManyTipoCampanhaInputEnvelope;
    set?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    disconnect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    delete?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    connect?: Prisma.CampanhaWhereUniqueInput | Prisma.CampanhaWhereUniqueInput[];
    update?: Prisma.CampanhaUpdateWithWhereUniqueWithoutTipoCampanhaInput | Prisma.CampanhaUpdateWithWhereUniqueWithoutTipoCampanhaInput[];
    updateMany?: Prisma.CampanhaUpdateManyWithWhereWithoutTipoCampanhaInput | Prisma.CampanhaUpdateManyWithWhereWithoutTipoCampanhaInput[];
    deleteMany?: Prisma.CampanhaScalarWhereInput | Prisma.CampanhaScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumStatusCampanhaFieldUpdateOperationsInput = {
    set?: $Enums.StatusCampanha;
};
export type CampanhaCreateNestedOneWithoutOpcoesInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutOpcoesInput, Prisma.CampanhaUncheckedCreateWithoutOpcoesInput>;
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutOpcoesInput;
    connect?: Prisma.CampanhaWhereUniqueInput;
};
export type CampanhaUpdateOneRequiredWithoutOpcoesNestedInput = {
    create?: Prisma.XOR<Prisma.CampanhaCreateWithoutOpcoesInput, Prisma.CampanhaUncheckedCreateWithoutOpcoesInput>;
    connectOrCreate?: Prisma.CampanhaCreateOrConnectWithoutOpcoesInput;
    upsert?: Prisma.CampanhaUpsertWithoutOpcoesInput;
    connect?: Prisma.CampanhaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampanhaUpdateToOneWithWhereWithoutOpcoesInput, Prisma.CampanhaUpdateWithoutOpcoesInput>, Prisma.CampanhaUncheckedUpdateWithoutOpcoesInput>;
};
export type CampanhaCreateWithoutTipoCampanhaInput = {
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    opcoes?: Prisma.CampanhaOpcaoCreateNestedManyWithoutCampanhaInput;
};
export type CampanhaUncheckedCreateWithoutTipoCampanhaInput = {
    id?: number;
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    opcoes?: Prisma.CampanhaOpcaoUncheckedCreateNestedManyWithoutCampanhaInput;
};
export type CampanhaCreateOrConnectWithoutTipoCampanhaInput = {
    where: Prisma.CampanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput>;
};
export type CampanhaCreateManyTipoCampanhaInputEnvelope = {
    data: Prisma.CampanhaCreateManyTipoCampanhaInput | Prisma.CampanhaCreateManyTipoCampanhaInput[];
    skipDuplicates?: boolean;
};
export type CampanhaUpsertWithWhereUniqueWithoutTipoCampanhaInput = {
    where: Prisma.CampanhaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampanhaUpdateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedUpdateWithoutTipoCampanhaInput>;
    create: Prisma.XOR<Prisma.CampanhaCreateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedCreateWithoutTipoCampanhaInput>;
};
export type CampanhaUpdateWithWhereUniqueWithoutTipoCampanhaInput = {
    where: Prisma.CampanhaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampanhaUpdateWithoutTipoCampanhaInput, Prisma.CampanhaUncheckedUpdateWithoutTipoCampanhaInput>;
};
export type CampanhaUpdateManyWithWhereWithoutTipoCampanhaInput = {
    where: Prisma.CampanhaScalarWhereInput;
    data: Prisma.XOR<Prisma.CampanhaUpdateManyMutationInput, Prisma.CampanhaUncheckedUpdateManyWithoutTipoCampanhaInput>;
};
export type CampanhaScalarWhereInput = {
    AND?: Prisma.CampanhaScalarWhereInput | Prisma.CampanhaScalarWhereInput[];
    OR?: Prisma.CampanhaScalarWhereInput[];
    NOT?: Prisma.CampanhaScalarWhereInput | Prisma.CampanhaScalarWhereInput[];
    id?: Prisma.IntFilter<"Campanha"> | number;
    nome?: Prisma.StringFilter<"Campanha"> | string;
    dtInicio?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    dtFim?: Prisma.DateTimeFilter<"Campanha"> | Date | string;
    taxaOperacional?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFilter<"Campanha"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFilter<"Campanha"> | string;
    status?: Prisma.EnumStatusCampanhaFilter<"Campanha"> | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFilter<"Campanha"> | number;
};
export type CampanhaCreateWithoutOpcoesInput = {
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanha: Prisma.TipoCampanhaCreateNestedOneWithoutCampanhasInput;
};
export type CampanhaUncheckedCreateWithoutOpcoesInput = {
    id?: number;
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
    tipoCampanhaId: number;
};
export type CampanhaCreateOrConnectWithoutOpcoesInput = {
    where: Prisma.CampanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampanhaCreateWithoutOpcoesInput, Prisma.CampanhaUncheckedCreateWithoutOpcoesInput>;
};
export type CampanhaUpsertWithoutOpcoesInput = {
    update: Prisma.XOR<Prisma.CampanhaUpdateWithoutOpcoesInput, Prisma.CampanhaUncheckedUpdateWithoutOpcoesInput>;
    create: Prisma.XOR<Prisma.CampanhaCreateWithoutOpcoesInput, Prisma.CampanhaUncheckedCreateWithoutOpcoesInput>;
    where?: Prisma.CampanhaWhereInput;
};
export type CampanhaUpdateToOneWithWhereWithoutOpcoesInput = {
    where?: Prisma.CampanhaWhereInput;
    data: Prisma.XOR<Prisma.CampanhaUpdateWithoutOpcoesInput, Prisma.CampanhaUncheckedUpdateWithoutOpcoesInput>;
};
export type CampanhaUpdateWithoutOpcoesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    tipoCampanha?: Prisma.TipoCampanhaUpdateOneRequiredWithoutCampanhasNestedInput;
};
export type CampanhaUncheckedUpdateWithoutOpcoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    tipoCampanhaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CampanhaCreateManyTipoCampanhaInput = {
    id?: number;
    nome: string;
    dtInicio: Date | string;
    dtFim: Date | string;
    taxaOperacional: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao: runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha: string;
    status: $Enums.StatusCampanha;
};
export type CampanhaUpdateWithoutTipoCampanhaInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    opcoes?: Prisma.CampanhaOpcaoUpdateManyWithoutCampanhaNestedInput;
};
export type CampanhaUncheckedUpdateWithoutTipoCampanhaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
    opcoes?: Prisma.CampanhaOpcaoUncheckedUpdateManyWithoutCampanhaNestedInput;
};
export type CampanhaUncheckedUpdateManyWithoutTipoCampanhaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    dtInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dtFim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxaOperacional?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valorBolao?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    codigoCampanha?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusCampanhaFieldUpdateOperationsInput | $Enums.StatusCampanha;
};
/**
 * Count Type CampanhaCountOutputType
 */
export type CampanhaCountOutputType = {
    opcoes: number;
};
export type CampanhaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    opcoes?: boolean | CampanhaCountOutputTypeCountOpcoesArgs;
};
/**
 * CampanhaCountOutputType without action
 */
export type CampanhaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampanhaCountOutputType
     */
    select?: Prisma.CampanhaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CampanhaCountOutputType without action
 */
export type CampanhaCountOutputTypeCountOpcoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampanhaOpcaoWhereInput;
};
export type CampanhaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    dtInicio?: boolean;
    dtFim?: boolean;
    taxaOperacional?: boolean;
    valorBolao?: boolean;
    codigoCampanha?: boolean;
    status?: boolean;
    tipoCampanhaId?: boolean;
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
    opcoes?: boolean | Prisma.Campanha$opcoesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampanhaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanha"]>;
export type CampanhaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    dtInicio?: boolean;
    dtFim?: boolean;
    taxaOperacional?: boolean;
    valorBolao?: boolean;
    codigoCampanha?: boolean;
    status?: boolean;
    tipoCampanhaId?: boolean;
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanha"]>;
export type CampanhaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    dtInicio?: boolean;
    dtFim?: boolean;
    taxaOperacional?: boolean;
    valorBolao?: boolean;
    codigoCampanha?: boolean;
    status?: boolean;
    tipoCampanhaId?: boolean;
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campanha"]>;
export type CampanhaSelectScalar = {
    id?: boolean;
    nome?: boolean;
    dtInicio?: boolean;
    dtFim?: boolean;
    taxaOperacional?: boolean;
    valorBolao?: boolean;
    codigoCampanha?: boolean;
    status?: boolean;
    tipoCampanhaId?: boolean;
};
export type CampanhaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "dtInicio" | "dtFim" | "taxaOperacional" | "valorBolao" | "codigoCampanha" | "status" | "tipoCampanhaId", ExtArgs["result"]["campanha"]>;
export type CampanhaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
    opcoes?: boolean | Prisma.Campanha$opcoesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampanhaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampanhaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
};
export type CampanhaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipoCampanha?: boolean | Prisma.TipoCampanhaDefaultArgs<ExtArgs>;
};
export type $CampanhaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campanha";
    objects: {
        tipoCampanha: Prisma.$TipoCampanhaPayload<ExtArgs>;
        opcoes: Prisma.$CampanhaOpcaoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        dtInicio: Date;
        dtFim: Date;
        taxaOperacional: runtime.Decimal;
        valorBolao: runtime.Decimal;
        codigoCampanha: string;
        status: $Enums.StatusCampanha;
        tipoCampanhaId: number;
    }, ExtArgs["result"]["campanha"]>;
    composites: {};
};
export type CampanhaGetPayload<S extends boolean | null | undefined | CampanhaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampanhaPayload, S>;
export type CampanhaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampanhaCountAggregateInputType | true;
};
export interface CampanhaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campanha'];
        meta: {
            name: 'Campanha';
        };
    };
    /**
     * Find zero or one Campanha that matches the filter.
     * @param {CampanhaFindUniqueArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanhaFindUniqueArgs>(args: Prisma.SelectSubset<T, CampanhaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Campanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanhaFindUniqueOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanhaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanhaFindFirstArgs>(args?: Prisma.SelectSubset<T, CampanhaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Campanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindFirstOrThrowArgs} args - Arguments to find a Campanha
     * @example
     * // Get one Campanha
     * const campanha = await prisma.campanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanhaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Campanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campanhas
     * const campanhas = await prisma.campanha.findMany()
     *
     * // Get first 10 Campanhas
     * const campanhas = await prisma.campanha.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const campanhaWithIdOnly = await prisma.campanha.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CampanhaFindManyArgs>(args?: Prisma.SelectSubset<T, CampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Campanha.
     * @param {CampanhaCreateArgs} args - Arguments to create a Campanha.
     * @example
     * // Create one Campanha
     * const Campanha = await prisma.campanha.create({
     *   data: {
     *     // ... data to create a Campanha
     *   }
     * })
     *
     */
    create<T extends CampanhaCreateArgs>(args: Prisma.SelectSubset<T, CampanhaCreateArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Campanhas.
     * @param {CampanhaCreateManyArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CampanhaCreateManyArgs>(args?: Prisma.SelectSubset<T, CampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Campanhas and returns the data saved in the database.
     * @param {CampanhaCreateManyAndReturnArgs} args - Arguments to create many Campanhas.
     * @example
     * // Create many Campanhas
     * const campanha = await prisma.campanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CampanhaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Campanha.
     * @param {CampanhaDeleteArgs} args - Arguments to delete one Campanha.
     * @example
     * // Delete one Campanha
     * const Campanha = await prisma.campanha.delete({
     *   where: {
     *     // ... filter to delete one Campanha
     *   }
     * })
     *
     */
    delete<T extends CampanhaDeleteArgs>(args: Prisma.SelectSubset<T, CampanhaDeleteArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Campanha.
     * @param {CampanhaUpdateArgs} args - Arguments to update one Campanha.
     * @example
     * // Update one Campanha
     * const campanha = await prisma.campanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CampanhaUpdateArgs>(args: Prisma.SelectSubset<T, CampanhaUpdateArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Campanhas.
     * @param {CampanhaDeleteManyArgs} args - Arguments to filter Campanhas to delete.
     * @example
     * // Delete a few Campanhas
     * const { count } = await prisma.campanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CampanhaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CampanhaUpdateManyArgs>(args: Prisma.SelectSubset<T, CampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Campanhas and returns the data updated in the database.
     * @param {CampanhaUpdateManyAndReturnArgs} args - Arguments to update many Campanhas.
     * @example
     * // Update many Campanhas
     * const campanha = await prisma.campanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Campanhas and only return the `id`
     * const campanhaWithIdOnly = await prisma.campanha.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampanhaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Campanha.
     * @param {CampanhaUpsertArgs} args - Arguments to update or create a Campanha.
     * @example
     * // Update or create a Campanha
     * const campanha = await prisma.campanha.upsert({
     *   create: {
     *     // ... data to create a Campanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campanha we want to update
     *   }
     * })
     */
    upsert<T extends CampanhaUpsertArgs>(args: Prisma.SelectSubset<T, CampanhaUpsertArgs<ExtArgs>>): Prisma.Prisma__CampanhaClient<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Campanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaCountArgs} args - Arguments to filter Campanhas to count.
     * @example
     * // Count the number of Campanhas
     * const count = await prisma.campanha.count({
     *   where: {
     *     // ... the filter for the Campanhas we want to count
     *   }
     * })
    **/
    count<T extends CampanhaCountArgs>(args?: Prisma.Subset<T, CampanhaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampanhaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampanhaAggregateArgs>(args: Prisma.Subset<T, CampanhaAggregateArgs>): Prisma.PrismaPromise<GetCampanhaAggregateType<T>>;
    /**
     * Group by Campanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanhaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CampanhaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampanhaGroupByArgs['orderBy'];
    } : {
        orderBy?: CampanhaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Campanha model
     */
    readonly fields: CampanhaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Campanha.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CampanhaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tipoCampanha<T extends Prisma.TipoCampanhaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoCampanhaDefaultArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    opcoes<T extends Prisma.Campanha$opcoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campanha$opcoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaOpcaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Campanha model
 */
export interface CampanhaFieldRefs {
    readonly id: Prisma.FieldRef<"Campanha", 'Int'>;
    readonly nome: Prisma.FieldRef<"Campanha", 'String'>;
    readonly dtInicio: Prisma.FieldRef<"Campanha", 'DateTime'>;
    readonly dtFim: Prisma.FieldRef<"Campanha", 'DateTime'>;
    readonly taxaOperacional: Prisma.FieldRef<"Campanha", 'Decimal'>;
    readonly valorBolao: Prisma.FieldRef<"Campanha", 'Decimal'>;
    readonly codigoCampanha: Prisma.FieldRef<"Campanha", 'String'>;
    readonly status: Prisma.FieldRef<"Campanha", 'StatusCampanha'>;
    readonly tipoCampanhaId: Prisma.FieldRef<"Campanha", 'Int'>;
}
/**
 * Campanha findUnique
 */
export type CampanhaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which Campanha to fetch.
     */
    where: Prisma.CampanhaWhereUniqueInput;
};
/**
 * Campanha findUniqueOrThrow
 */
export type CampanhaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which Campanha to fetch.
     */
    where: Prisma.CampanhaWhereUniqueInput;
};
/**
 * Campanha findFirst
 */
export type CampanhaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which Campanha to fetch.
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: Prisma.CampanhaOrderByWithRelationInput | Prisma.CampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campanhas.
     */
    cursor?: Prisma.CampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campanhas.
     */
    distinct?: Prisma.CampanhaScalarFieldEnum | Prisma.CampanhaScalarFieldEnum[];
};
/**
 * Campanha findFirstOrThrow
 */
export type CampanhaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which Campanha to fetch.
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: Prisma.CampanhaOrderByWithRelationInput | Prisma.CampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campanhas.
     */
    cursor?: Prisma.CampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campanhas.
     */
    distinct?: Prisma.CampanhaScalarFieldEnum | Prisma.CampanhaScalarFieldEnum[];
};
/**
 * Campanha findMany
 */
export type CampanhaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which Campanhas to fetch.
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campanhas to fetch.
     */
    orderBy?: Prisma.CampanhaOrderByWithRelationInput | Prisma.CampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Campanhas.
     */
    cursor?: Prisma.CampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campanhas.
     */
    distinct?: Prisma.CampanhaScalarFieldEnum | Prisma.CampanhaScalarFieldEnum[];
};
/**
 * Campanha create
 */
export type CampanhaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Campanha.
     */
    data: Prisma.XOR<Prisma.CampanhaCreateInput, Prisma.CampanhaUncheckedCreateInput>;
};
/**
 * Campanha createMany
 */
export type CampanhaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campanhas.
     */
    data: Prisma.CampanhaCreateManyInput | Prisma.CampanhaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Campanha createManyAndReturn
 */
export type CampanhaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * The data used to create many Campanhas.
     */
    data: Prisma.CampanhaCreateManyInput | Prisma.CampanhaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Campanha update
 */
export type CampanhaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Campanha.
     */
    data: Prisma.XOR<Prisma.CampanhaUpdateInput, Prisma.CampanhaUncheckedUpdateInput>;
    /**
     * Choose, which Campanha to update.
     */
    where: Prisma.CampanhaWhereUniqueInput;
};
/**
 * Campanha updateMany
 */
export type CampanhaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Campanhas.
     */
    data: Prisma.XOR<Prisma.CampanhaUpdateManyMutationInput, Prisma.CampanhaUncheckedUpdateManyInput>;
    /**
     * Filter which Campanhas to update
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number;
};
/**
 * Campanha updateManyAndReturn
 */
export type CampanhaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * The data used to update Campanhas.
     */
    data: Prisma.XOR<Prisma.CampanhaUpdateManyMutationInput, Prisma.CampanhaUncheckedUpdateManyInput>;
    /**
     * Filter which Campanhas to update
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * Limit how many Campanhas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Campanha upsert
 */
export type CampanhaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Campanha to update in case it exists.
     */
    where: Prisma.CampanhaWhereUniqueInput;
    /**
     * In case the Campanha found by the `where` argument doesn't exist, create a new Campanha with this data.
     */
    create: Prisma.XOR<Prisma.CampanhaCreateInput, Prisma.CampanhaUncheckedCreateInput>;
    /**
     * In case the Campanha was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CampanhaUpdateInput, Prisma.CampanhaUncheckedUpdateInput>;
};
/**
 * Campanha delete
 */
export type CampanhaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
    /**
     * Filter which Campanha to delete.
     */
    where: Prisma.CampanhaWhereUniqueInput;
};
/**
 * Campanha deleteMany
 */
export type CampanhaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Campanhas to delete
     */
    where?: Prisma.CampanhaWhereInput;
    /**
     * Limit how many Campanhas to delete.
     */
    limit?: number;
};
/**
 * Campanha.opcoes
 */
export type Campanha$opcoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CampanhaOpcaoWhereInput;
    orderBy?: Prisma.CampanhaOpcaoOrderByWithRelationInput | Prisma.CampanhaOpcaoOrderByWithRelationInput[];
    cursor?: Prisma.CampanhaOpcaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampanhaOpcaoScalarFieldEnum | Prisma.CampanhaOpcaoScalarFieldEnum[];
};
/**
 * Campanha without action
 */
export type CampanhaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campanha
     */
    select?: Prisma.CampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campanha
     */
    omit?: Prisma.CampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampanhaInclude<ExtArgs> | null;
};
//# sourceMappingURL=Campanha.d.ts.map