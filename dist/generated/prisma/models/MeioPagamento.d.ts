import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MeioPagamento
 *
 */
export type MeioPagamentoModel = runtime.Types.Result.DefaultSelection<Prisma.$MeioPagamentoPayload>;
export type AggregateMeioPagamento = {
    _count: MeioPagamentoCountAggregateOutputType | null;
    _avg: MeioPagamentoAvgAggregateOutputType | null;
    _sum: MeioPagamentoSumAggregateOutputType | null;
    _min: MeioPagamentoMinAggregateOutputType | null;
    _max: MeioPagamentoMaxAggregateOutputType | null;
};
export type MeioPagamentoAvgAggregateOutputType = {
    id: number | null;
};
export type MeioPagamentoSumAggregateOutputType = {
    id: number | null;
};
export type MeioPagamentoMinAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: string | null;
    exigeComprovante: boolean | null;
};
export type MeioPagamentoMaxAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: string | null;
    exigeComprovante: boolean | null;
};
export type MeioPagamentoCountAggregateOutputType = {
    id: number;
    descricao: number;
    status: number;
    exigeComprovante: number;
    _all: number;
};
export type MeioPagamentoAvgAggregateInputType = {
    id?: true;
};
export type MeioPagamentoSumAggregateInputType = {
    id?: true;
};
export type MeioPagamentoMinAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    exigeComprovante?: true;
};
export type MeioPagamentoMaxAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    exigeComprovante?: true;
};
export type MeioPagamentoCountAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    exigeComprovante?: true;
    _all?: true;
};
export type MeioPagamentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MeioPagamento to aggregate.
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MeioPagamentos to fetch.
     */
    orderBy?: Prisma.MeioPagamentoOrderByWithRelationInput | Prisma.MeioPagamentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MeioPagamentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MeioPagamentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MeioPagamentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MeioPagamentos
    **/
    _count?: true | MeioPagamentoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MeioPagamentoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MeioPagamentoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MeioPagamentoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MeioPagamentoMaxAggregateInputType;
};
export type GetMeioPagamentoAggregateType<T extends MeioPagamentoAggregateArgs> = {
    [P in keyof T & keyof AggregateMeioPagamento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMeioPagamento[P]> : Prisma.GetScalarType<T[P], AggregateMeioPagamento[P]>;
};
export type MeioPagamentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MeioPagamentoWhereInput;
    orderBy?: Prisma.MeioPagamentoOrderByWithAggregationInput | Prisma.MeioPagamentoOrderByWithAggregationInput[];
    by: Prisma.MeioPagamentoScalarFieldEnum[] | Prisma.MeioPagamentoScalarFieldEnum;
    having?: Prisma.MeioPagamentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MeioPagamentoCountAggregateInputType | true;
    _avg?: MeioPagamentoAvgAggregateInputType;
    _sum?: MeioPagamentoSumAggregateInputType;
    _min?: MeioPagamentoMinAggregateInputType;
    _max?: MeioPagamentoMaxAggregateInputType;
};
export type MeioPagamentoGroupByOutputType = {
    id: number;
    descricao: string;
    status: string | null;
    exigeComprovante: boolean;
    _count: MeioPagamentoCountAggregateOutputType | null;
    _avg: MeioPagamentoAvgAggregateOutputType | null;
    _sum: MeioPagamentoSumAggregateOutputType | null;
    _min: MeioPagamentoMinAggregateOutputType | null;
    _max: MeioPagamentoMaxAggregateOutputType | null;
};
export type GetMeioPagamentoGroupByPayload<T extends MeioPagamentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MeioPagamentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MeioPagamentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MeioPagamentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MeioPagamentoGroupByOutputType[P]>;
}>>;
export type MeioPagamentoWhereInput = {
    AND?: Prisma.MeioPagamentoWhereInput | Prisma.MeioPagamentoWhereInput[];
    OR?: Prisma.MeioPagamentoWhereInput[];
    NOT?: Prisma.MeioPagamentoWhereInput | Prisma.MeioPagamentoWhereInput[];
    id?: Prisma.IntFilter<"MeioPagamento"> | number;
    descricao?: Prisma.StringFilter<"MeioPagamento"> | string;
    status?: Prisma.StringNullableFilter<"MeioPagamento"> | string | null;
    exigeComprovante?: Prisma.BoolFilter<"MeioPagamento"> | boolean;
    apostas?: Prisma.ApostaListRelationFilter;
};
export type MeioPagamentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    exigeComprovante?: Prisma.SortOrder;
    apostas?: Prisma.ApostaOrderByRelationAggregateInput;
};
export type MeioPagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MeioPagamentoWhereInput | Prisma.MeioPagamentoWhereInput[];
    OR?: Prisma.MeioPagamentoWhereInput[];
    NOT?: Prisma.MeioPagamentoWhereInput | Prisma.MeioPagamentoWhereInput[];
    descricao?: Prisma.StringFilter<"MeioPagamento"> | string;
    status?: Prisma.StringNullableFilter<"MeioPagamento"> | string | null;
    exigeComprovante?: Prisma.BoolFilter<"MeioPagamento"> | boolean;
    apostas?: Prisma.ApostaListRelationFilter;
}, "id">;
export type MeioPagamentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    exigeComprovante?: Prisma.SortOrder;
    _count?: Prisma.MeioPagamentoCountOrderByAggregateInput;
    _avg?: Prisma.MeioPagamentoAvgOrderByAggregateInput;
    _max?: Prisma.MeioPagamentoMaxOrderByAggregateInput;
    _min?: Prisma.MeioPagamentoMinOrderByAggregateInput;
    _sum?: Prisma.MeioPagamentoSumOrderByAggregateInput;
};
export type MeioPagamentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MeioPagamentoScalarWhereWithAggregatesInput | Prisma.MeioPagamentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MeioPagamentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MeioPagamentoScalarWhereWithAggregatesInput | Prisma.MeioPagamentoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MeioPagamento"> | number;
    descricao?: Prisma.StringWithAggregatesFilter<"MeioPagamento"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"MeioPagamento"> | string | null;
    exigeComprovante?: Prisma.BoolWithAggregatesFilter<"MeioPagamento"> | boolean;
};
export type MeioPagamentoCreateInput = {
    descricao: string;
    status?: string | null;
    exigeComprovante?: boolean;
    apostas?: Prisma.ApostaCreateNestedManyWithoutMeioPagamentoInput;
};
export type MeioPagamentoUncheckedCreateInput = {
    id?: number;
    descricao: string;
    status?: string | null;
    exigeComprovante?: boolean;
    apostas?: Prisma.ApostaUncheckedCreateNestedManyWithoutMeioPagamentoInput;
};
export type MeioPagamentoUpdateInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    apostas?: Prisma.ApostaUpdateManyWithoutMeioPagamentoNestedInput;
};
export type MeioPagamentoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    apostas?: Prisma.ApostaUncheckedUpdateManyWithoutMeioPagamentoNestedInput;
};
export type MeioPagamentoCreateManyInput = {
    id?: number;
    descricao: string;
    status?: string | null;
    exigeComprovante?: boolean;
};
export type MeioPagamentoUpdateManyMutationInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MeioPagamentoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MeioPagamentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    exigeComprovante?: Prisma.SortOrder;
};
export type MeioPagamentoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MeioPagamentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    exigeComprovante?: Prisma.SortOrder;
};
export type MeioPagamentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    exigeComprovante?: Prisma.SortOrder;
};
export type MeioPagamentoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MeioPagamentoScalarRelationFilter = {
    is?: Prisma.MeioPagamentoWhereInput;
    isNot?: Prisma.MeioPagamentoWhereInput;
};
export type MeioPagamentoCreateNestedOneWithoutApostasInput = {
    create?: Prisma.XOR<Prisma.MeioPagamentoCreateWithoutApostasInput, Prisma.MeioPagamentoUncheckedCreateWithoutApostasInput>;
    connectOrCreate?: Prisma.MeioPagamentoCreateOrConnectWithoutApostasInput;
    connect?: Prisma.MeioPagamentoWhereUniqueInput;
};
export type MeioPagamentoUpdateOneRequiredWithoutApostasNestedInput = {
    create?: Prisma.XOR<Prisma.MeioPagamentoCreateWithoutApostasInput, Prisma.MeioPagamentoUncheckedCreateWithoutApostasInput>;
    connectOrCreate?: Prisma.MeioPagamentoCreateOrConnectWithoutApostasInput;
    upsert?: Prisma.MeioPagamentoUpsertWithoutApostasInput;
    connect?: Prisma.MeioPagamentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MeioPagamentoUpdateToOneWithWhereWithoutApostasInput, Prisma.MeioPagamentoUpdateWithoutApostasInput>, Prisma.MeioPagamentoUncheckedUpdateWithoutApostasInput>;
};
export type MeioPagamentoCreateWithoutApostasInput = {
    descricao: string;
    status?: string | null;
    exigeComprovante?: boolean;
};
export type MeioPagamentoUncheckedCreateWithoutApostasInput = {
    id?: number;
    descricao: string;
    status?: string | null;
    exigeComprovante?: boolean;
};
export type MeioPagamentoCreateOrConnectWithoutApostasInput = {
    where: Prisma.MeioPagamentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MeioPagamentoCreateWithoutApostasInput, Prisma.MeioPagamentoUncheckedCreateWithoutApostasInput>;
};
export type MeioPagamentoUpsertWithoutApostasInput = {
    update: Prisma.XOR<Prisma.MeioPagamentoUpdateWithoutApostasInput, Prisma.MeioPagamentoUncheckedUpdateWithoutApostasInput>;
    create: Prisma.XOR<Prisma.MeioPagamentoCreateWithoutApostasInput, Prisma.MeioPagamentoUncheckedCreateWithoutApostasInput>;
    where?: Prisma.MeioPagamentoWhereInput;
};
export type MeioPagamentoUpdateToOneWithWhereWithoutApostasInput = {
    where?: Prisma.MeioPagamentoWhereInput;
    data: Prisma.XOR<Prisma.MeioPagamentoUpdateWithoutApostasInput, Prisma.MeioPagamentoUncheckedUpdateWithoutApostasInput>;
};
export type MeioPagamentoUpdateWithoutApostasInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MeioPagamentoUncheckedUpdateWithoutApostasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    exigeComprovante?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type MeioPagamentoCountOutputType
 */
export type MeioPagamentoCountOutputType = {
    apostas: number;
};
export type MeioPagamentoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apostas?: boolean | MeioPagamentoCountOutputTypeCountApostasArgs;
};
/**
 * MeioPagamentoCountOutputType without action
 */
export type MeioPagamentoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamentoCountOutputType
     */
    select?: Prisma.MeioPagamentoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MeioPagamentoCountOutputType without action
 */
export type MeioPagamentoCountOutputTypeCountApostasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApostaWhereInput;
};
export type MeioPagamentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    exigeComprovante?: boolean;
    apostas?: boolean | Prisma.MeioPagamento$apostasArgs<ExtArgs>;
    _count?: boolean | Prisma.MeioPagamentoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["meioPagamento"]>;
export type MeioPagamentoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    exigeComprovante?: boolean;
}, ExtArgs["result"]["meioPagamento"]>;
export type MeioPagamentoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    exigeComprovante?: boolean;
}, ExtArgs["result"]["meioPagamento"]>;
export type MeioPagamentoSelectScalar = {
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    exigeComprovante?: boolean;
};
export type MeioPagamentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "descricao" | "status" | "exigeComprovante", ExtArgs["result"]["meioPagamento"]>;
export type MeioPagamentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apostas?: boolean | Prisma.MeioPagamento$apostasArgs<ExtArgs>;
    _count?: boolean | Prisma.MeioPagamentoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MeioPagamentoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MeioPagamentoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MeioPagamentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MeioPagamento";
    objects: {
        apostas: Prisma.$ApostaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        descricao: string;
        status: string | null;
        exigeComprovante: boolean;
    }, ExtArgs["result"]["meioPagamento"]>;
    composites: {};
};
export type MeioPagamentoGetPayload<S extends boolean | null | undefined | MeioPagamentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload, S>;
export type MeioPagamentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MeioPagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MeioPagamentoCountAggregateInputType | true;
};
export interface MeioPagamentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MeioPagamento'];
        meta: {
            name: 'MeioPagamento';
        };
    };
    /**
     * Find zero or one MeioPagamento that matches the filter.
     * @param {MeioPagamentoFindUniqueArgs} args - Arguments to find a MeioPagamento
     * @example
     * // Get one MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeioPagamentoFindUniqueArgs>(args: Prisma.SelectSubset<T, MeioPagamentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MeioPagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeioPagamentoFindUniqueOrThrowArgs} args - Arguments to find a MeioPagamento
     * @example
     * // Get one MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeioPagamentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MeioPagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MeioPagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoFindFirstArgs} args - Arguments to find a MeioPagamento
     * @example
     * // Get one MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeioPagamentoFindFirstArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MeioPagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoFindFirstOrThrowArgs} args - Arguments to find a MeioPagamento
     * @example
     * // Get one MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeioPagamentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MeioPagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeioPagamentos
     * const meioPagamentos = await prisma.meioPagamento.findMany()
     *
     * // Get first 10 MeioPagamentos
     * const meioPagamentos = await prisma.meioPagamento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const meioPagamentoWithIdOnly = await prisma.meioPagamento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MeioPagamentoFindManyArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MeioPagamento.
     * @param {MeioPagamentoCreateArgs} args - Arguments to create a MeioPagamento.
     * @example
     * // Create one MeioPagamento
     * const MeioPagamento = await prisma.meioPagamento.create({
     *   data: {
     *     // ... data to create a MeioPagamento
     *   }
     * })
     *
     */
    create<T extends MeioPagamentoCreateArgs>(args: Prisma.SelectSubset<T, MeioPagamentoCreateArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MeioPagamentos.
     * @param {MeioPagamentoCreateManyArgs} args - Arguments to create many MeioPagamentos.
     * @example
     * // Create many MeioPagamentos
     * const meioPagamento = await prisma.meioPagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MeioPagamentoCreateManyArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MeioPagamentos and returns the data saved in the database.
     * @param {MeioPagamentoCreateManyAndReturnArgs} args - Arguments to create many MeioPagamentos.
     * @example
     * // Create many MeioPagamentos
     * const meioPagamento = await prisma.meioPagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MeioPagamentos and only return the `id`
     * const meioPagamentoWithIdOnly = await prisma.meioPagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MeioPagamentoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MeioPagamento.
     * @param {MeioPagamentoDeleteArgs} args - Arguments to delete one MeioPagamento.
     * @example
     * // Delete one MeioPagamento
     * const MeioPagamento = await prisma.meioPagamento.delete({
     *   where: {
     *     // ... filter to delete one MeioPagamento
     *   }
     * })
     *
     */
    delete<T extends MeioPagamentoDeleteArgs>(args: Prisma.SelectSubset<T, MeioPagamentoDeleteArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MeioPagamento.
     * @param {MeioPagamentoUpdateArgs} args - Arguments to update one MeioPagamento.
     * @example
     * // Update one MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MeioPagamentoUpdateArgs>(args: Prisma.SelectSubset<T, MeioPagamentoUpdateArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MeioPagamentos.
     * @param {MeioPagamentoDeleteManyArgs} args - Arguments to filter MeioPagamentos to delete.
     * @example
     * // Delete a few MeioPagamentos
     * const { count } = await prisma.meioPagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MeioPagamentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MeioPagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MeioPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeioPagamentos
     * const meioPagamento = await prisma.meioPagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MeioPagamentoUpdateManyArgs>(args: Prisma.SelectSubset<T, MeioPagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MeioPagamentos and returns the data updated in the database.
     * @param {MeioPagamentoUpdateManyAndReturnArgs} args - Arguments to update many MeioPagamentos.
     * @example
     * // Update many MeioPagamentos
     * const meioPagamento = await prisma.meioPagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MeioPagamentos and only return the `id`
     * const meioPagamentoWithIdOnly = await prisma.meioPagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeioPagamentoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MeioPagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MeioPagamento.
     * @param {MeioPagamentoUpsertArgs} args - Arguments to update or create a MeioPagamento.
     * @example
     * // Update or create a MeioPagamento
     * const meioPagamento = await prisma.meioPagamento.upsert({
     *   create: {
     *     // ... data to create a MeioPagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeioPagamento we want to update
     *   }
     * })
     */
    upsert<T extends MeioPagamentoUpsertArgs>(args: Prisma.SelectSubset<T, MeioPagamentoUpsertArgs<ExtArgs>>): Prisma.Prisma__MeioPagamentoClient<runtime.Types.Result.GetResult<Prisma.$MeioPagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MeioPagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoCountArgs} args - Arguments to filter MeioPagamentos to count.
     * @example
     * // Count the number of MeioPagamentos
     * const count = await prisma.meioPagamento.count({
     *   where: {
     *     // ... the filter for the MeioPagamentos we want to count
     *   }
     * })
    **/
    count<T extends MeioPagamentoCountArgs>(args?: Prisma.Subset<T, MeioPagamentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MeioPagamentoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MeioPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeioPagamentoAggregateArgs>(args: Prisma.Subset<T, MeioPagamentoAggregateArgs>): Prisma.PrismaPromise<GetMeioPagamentoAggregateType<T>>;
    /**
     * Group by MeioPagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeioPagamentoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MeioPagamentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MeioPagamentoGroupByArgs['orderBy'];
    } : {
        orderBy?: MeioPagamentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MeioPagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeioPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MeioPagamento model
     */
    readonly fields: MeioPagamentoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MeioPagamento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MeioPagamentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    apostas<T extends Prisma.MeioPagamento$apostasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MeioPagamento$apostasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MeioPagamento model
 */
export interface MeioPagamentoFieldRefs {
    readonly id: Prisma.FieldRef<"MeioPagamento", 'Int'>;
    readonly descricao: Prisma.FieldRef<"MeioPagamento", 'String'>;
    readonly status: Prisma.FieldRef<"MeioPagamento", 'String'>;
    readonly exigeComprovante: Prisma.FieldRef<"MeioPagamento", 'Boolean'>;
}
/**
 * MeioPagamento findUnique
 */
export type MeioPagamentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter, which MeioPagamento to fetch.
     */
    where: Prisma.MeioPagamentoWhereUniqueInput;
};
/**
 * MeioPagamento findUniqueOrThrow
 */
export type MeioPagamentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter, which MeioPagamento to fetch.
     */
    where: Prisma.MeioPagamentoWhereUniqueInput;
};
/**
 * MeioPagamento findFirst
 */
export type MeioPagamentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter, which MeioPagamento to fetch.
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MeioPagamentos to fetch.
     */
    orderBy?: Prisma.MeioPagamentoOrderByWithRelationInput | Prisma.MeioPagamentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MeioPagamentos.
     */
    cursor?: Prisma.MeioPagamentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MeioPagamentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MeioPagamentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MeioPagamentos.
     */
    distinct?: Prisma.MeioPagamentoScalarFieldEnum | Prisma.MeioPagamentoScalarFieldEnum[];
};
/**
 * MeioPagamento findFirstOrThrow
 */
export type MeioPagamentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter, which MeioPagamento to fetch.
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MeioPagamentos to fetch.
     */
    orderBy?: Prisma.MeioPagamentoOrderByWithRelationInput | Prisma.MeioPagamentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MeioPagamentos.
     */
    cursor?: Prisma.MeioPagamentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MeioPagamentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MeioPagamentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MeioPagamentos.
     */
    distinct?: Prisma.MeioPagamentoScalarFieldEnum | Prisma.MeioPagamentoScalarFieldEnum[];
};
/**
 * MeioPagamento findMany
 */
export type MeioPagamentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter, which MeioPagamentos to fetch.
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MeioPagamentos to fetch.
     */
    orderBy?: Prisma.MeioPagamentoOrderByWithRelationInput | Prisma.MeioPagamentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MeioPagamentos.
     */
    cursor?: Prisma.MeioPagamentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MeioPagamentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MeioPagamentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MeioPagamentos.
     */
    distinct?: Prisma.MeioPagamentoScalarFieldEnum | Prisma.MeioPagamentoScalarFieldEnum[];
};
/**
 * MeioPagamento create
 */
export type MeioPagamentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * The data needed to create a MeioPagamento.
     */
    data: Prisma.XOR<Prisma.MeioPagamentoCreateInput, Prisma.MeioPagamentoUncheckedCreateInput>;
};
/**
 * MeioPagamento createMany
 */
export type MeioPagamentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeioPagamentos.
     */
    data: Prisma.MeioPagamentoCreateManyInput | Prisma.MeioPagamentoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MeioPagamento createManyAndReturn
 */
export type MeioPagamentoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * The data used to create many MeioPagamentos.
     */
    data: Prisma.MeioPagamentoCreateManyInput | Prisma.MeioPagamentoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MeioPagamento update
 */
export type MeioPagamentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * The data needed to update a MeioPagamento.
     */
    data: Prisma.XOR<Prisma.MeioPagamentoUpdateInput, Prisma.MeioPagamentoUncheckedUpdateInput>;
    /**
     * Choose, which MeioPagamento to update.
     */
    where: Prisma.MeioPagamentoWhereUniqueInput;
};
/**
 * MeioPagamento updateMany
 */
export type MeioPagamentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MeioPagamentos.
     */
    data: Prisma.XOR<Prisma.MeioPagamentoUpdateManyMutationInput, Prisma.MeioPagamentoUncheckedUpdateManyInput>;
    /**
     * Filter which MeioPagamentos to update
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * Limit how many MeioPagamentos to update.
     */
    limit?: number;
};
/**
 * MeioPagamento updateManyAndReturn
 */
export type MeioPagamentoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * The data used to update MeioPagamentos.
     */
    data: Prisma.XOR<Prisma.MeioPagamentoUpdateManyMutationInput, Prisma.MeioPagamentoUncheckedUpdateManyInput>;
    /**
     * Filter which MeioPagamentos to update
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * Limit how many MeioPagamentos to update.
     */
    limit?: number;
};
/**
 * MeioPagamento upsert
 */
export type MeioPagamentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * The filter to search for the MeioPagamento to update in case it exists.
     */
    where: Prisma.MeioPagamentoWhereUniqueInput;
    /**
     * In case the MeioPagamento found by the `where` argument doesn't exist, create a new MeioPagamento with this data.
     */
    create: Prisma.XOR<Prisma.MeioPagamentoCreateInput, Prisma.MeioPagamentoUncheckedCreateInput>;
    /**
     * In case the MeioPagamento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MeioPagamentoUpdateInput, Prisma.MeioPagamentoUncheckedUpdateInput>;
};
/**
 * MeioPagamento delete
 */
export type MeioPagamentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
    /**
     * Filter which MeioPagamento to delete.
     */
    where: Prisma.MeioPagamentoWhereUniqueInput;
};
/**
 * MeioPagamento deleteMany
 */
export type MeioPagamentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MeioPagamentos to delete
     */
    where?: Prisma.MeioPagamentoWhereInput;
    /**
     * Limit how many MeioPagamentos to delete.
     */
    limit?: number;
};
/**
 * MeioPagamento.apostas
 */
export type MeioPagamento$apostasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * MeioPagamento without action
 */
export type MeioPagamentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeioPagamento
     */
    select?: Prisma.MeioPagamentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MeioPagamento
     */
    omit?: Prisma.MeioPagamentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MeioPagamentoInclude<ExtArgs> | null;
};
//# sourceMappingURL=MeioPagamento.d.ts.map