import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TipoCampanha
 *
 */
export type TipoCampanhaModel = runtime.Types.Result.DefaultSelection<Prisma.$TipoCampanhaPayload>;
export type AggregateTipoCampanha = {
    _count: TipoCampanhaCountAggregateOutputType | null;
    _avg: TipoCampanhaAvgAggregateOutputType | null;
    _sum: TipoCampanhaSumAggregateOutputType | null;
    _min: TipoCampanhaMinAggregateOutputType | null;
    _max: TipoCampanhaMaxAggregateOutputType | null;
};
export type TipoCampanhaAvgAggregateOutputType = {
    id: number | null;
};
export type TipoCampanhaSumAggregateOutputType = {
    id: number | null;
};
export type TipoCampanhaMinAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: string | null;
};
export type TipoCampanhaMaxAggregateOutputType = {
    id: number | null;
    descricao: string | null;
    status: string | null;
};
export type TipoCampanhaCountAggregateOutputType = {
    id: number;
    descricao: number;
    status: number;
    _all: number;
};
export type TipoCampanhaAvgAggregateInputType = {
    id?: true;
};
export type TipoCampanhaSumAggregateInputType = {
    id?: true;
};
export type TipoCampanhaMinAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
};
export type TipoCampanhaMaxAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
};
export type TipoCampanhaCountAggregateInputType = {
    id?: true;
    descricao?: true;
    status?: true;
    _all?: true;
};
export type TipoCampanhaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCampanha to aggregate.
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TipoCampanhas to fetch.
     */
    orderBy?: Prisma.TipoCampanhaOrderByWithRelationInput | Prisma.TipoCampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TipoCampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TipoCampanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TipoCampanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TipoCampanhas
    **/
    _count?: true | TipoCampanhaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TipoCampanhaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TipoCampanhaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TipoCampanhaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TipoCampanhaMaxAggregateInputType;
};
export type GetTipoCampanhaAggregateType<T extends TipoCampanhaAggregateArgs> = {
    [P in keyof T & keyof AggregateTipoCampanha]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTipoCampanha[P]> : Prisma.GetScalarType<T[P], AggregateTipoCampanha[P]>;
};
export type TipoCampanhaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TipoCampanhaWhereInput;
    orderBy?: Prisma.TipoCampanhaOrderByWithAggregationInput | Prisma.TipoCampanhaOrderByWithAggregationInput[];
    by: Prisma.TipoCampanhaScalarFieldEnum[] | Prisma.TipoCampanhaScalarFieldEnum;
    having?: Prisma.TipoCampanhaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TipoCampanhaCountAggregateInputType | true;
    _avg?: TipoCampanhaAvgAggregateInputType;
    _sum?: TipoCampanhaSumAggregateInputType;
    _min?: TipoCampanhaMinAggregateInputType;
    _max?: TipoCampanhaMaxAggregateInputType;
};
export type TipoCampanhaGroupByOutputType = {
    id: number;
    descricao: string;
    status: string | null;
    _count: TipoCampanhaCountAggregateOutputType | null;
    _avg: TipoCampanhaAvgAggregateOutputType | null;
    _sum: TipoCampanhaSumAggregateOutputType | null;
    _min: TipoCampanhaMinAggregateOutputType | null;
    _max: TipoCampanhaMaxAggregateOutputType | null;
};
export type GetTipoCampanhaGroupByPayload<T extends TipoCampanhaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TipoCampanhaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TipoCampanhaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TipoCampanhaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TipoCampanhaGroupByOutputType[P]>;
}>>;
export type TipoCampanhaWhereInput = {
    AND?: Prisma.TipoCampanhaWhereInput | Prisma.TipoCampanhaWhereInput[];
    OR?: Prisma.TipoCampanhaWhereInput[];
    NOT?: Prisma.TipoCampanhaWhereInput | Prisma.TipoCampanhaWhereInput[];
    id?: Prisma.IntFilter<"TipoCampanha"> | number;
    descricao?: Prisma.StringFilter<"TipoCampanha"> | string;
    status?: Prisma.StringNullableFilter<"TipoCampanha"> | string | null;
    campanhas?: Prisma.CampanhaListRelationFilter;
};
export type TipoCampanhaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    campanhas?: Prisma.CampanhaOrderByRelationAggregateInput;
};
export type TipoCampanhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TipoCampanhaWhereInput | Prisma.TipoCampanhaWhereInput[];
    OR?: Prisma.TipoCampanhaWhereInput[];
    NOT?: Prisma.TipoCampanhaWhereInput | Prisma.TipoCampanhaWhereInput[];
    descricao?: Prisma.StringFilter<"TipoCampanha"> | string;
    status?: Prisma.StringNullableFilter<"TipoCampanha"> | string | null;
    campanhas?: Prisma.CampanhaListRelationFilter;
}, "id">;
export type TipoCampanhaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TipoCampanhaCountOrderByAggregateInput;
    _avg?: Prisma.TipoCampanhaAvgOrderByAggregateInput;
    _max?: Prisma.TipoCampanhaMaxOrderByAggregateInput;
    _min?: Prisma.TipoCampanhaMinOrderByAggregateInput;
    _sum?: Prisma.TipoCampanhaSumOrderByAggregateInput;
};
export type TipoCampanhaScalarWhereWithAggregatesInput = {
    AND?: Prisma.TipoCampanhaScalarWhereWithAggregatesInput | Prisma.TipoCampanhaScalarWhereWithAggregatesInput[];
    OR?: Prisma.TipoCampanhaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TipoCampanhaScalarWhereWithAggregatesInput | Prisma.TipoCampanhaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TipoCampanha"> | number;
    descricao?: Prisma.StringWithAggregatesFilter<"TipoCampanha"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"TipoCampanha"> | string | null;
};
export type TipoCampanhaCreateInput = {
    descricao: string;
    status?: string | null;
    campanhas?: Prisma.CampanhaCreateNestedManyWithoutTipoCampanhaInput;
};
export type TipoCampanhaUncheckedCreateInput = {
    id?: number;
    descricao: string;
    status?: string | null;
    campanhas?: Prisma.CampanhaUncheckedCreateNestedManyWithoutTipoCampanhaInput;
};
export type TipoCampanhaUpdateInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campanhas?: Prisma.CampanhaUpdateManyWithoutTipoCampanhaNestedInput;
};
export type TipoCampanhaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campanhas?: Prisma.CampanhaUncheckedUpdateManyWithoutTipoCampanhaNestedInput;
};
export type TipoCampanhaCreateManyInput = {
    id?: number;
    descricao: string;
    status?: string | null;
};
export type TipoCampanhaUpdateManyMutationInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TipoCampanhaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TipoCampanhaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type TipoCampanhaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TipoCampanhaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type TipoCampanhaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type TipoCampanhaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TipoCampanhaScalarRelationFilter = {
    is?: Prisma.TipoCampanhaWhereInput;
    isNot?: Prisma.TipoCampanhaWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TipoCampanhaCreateNestedOneWithoutCampanhasInput = {
    create?: Prisma.XOR<Prisma.TipoCampanhaCreateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedCreateWithoutCampanhasInput>;
    connectOrCreate?: Prisma.TipoCampanhaCreateOrConnectWithoutCampanhasInput;
    connect?: Prisma.TipoCampanhaWhereUniqueInput;
};
export type TipoCampanhaUpdateOneRequiredWithoutCampanhasNestedInput = {
    create?: Prisma.XOR<Prisma.TipoCampanhaCreateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedCreateWithoutCampanhasInput>;
    connectOrCreate?: Prisma.TipoCampanhaCreateOrConnectWithoutCampanhasInput;
    upsert?: Prisma.TipoCampanhaUpsertWithoutCampanhasInput;
    connect?: Prisma.TipoCampanhaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TipoCampanhaUpdateToOneWithWhereWithoutCampanhasInput, Prisma.TipoCampanhaUpdateWithoutCampanhasInput>, Prisma.TipoCampanhaUncheckedUpdateWithoutCampanhasInput>;
};
export type TipoCampanhaCreateWithoutCampanhasInput = {
    descricao: string;
    status?: string | null;
};
export type TipoCampanhaUncheckedCreateWithoutCampanhasInput = {
    id?: number;
    descricao: string;
    status?: string | null;
};
export type TipoCampanhaCreateOrConnectWithoutCampanhasInput = {
    where: Prisma.TipoCampanhaWhereUniqueInput;
    create: Prisma.XOR<Prisma.TipoCampanhaCreateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedCreateWithoutCampanhasInput>;
};
export type TipoCampanhaUpsertWithoutCampanhasInput = {
    update: Prisma.XOR<Prisma.TipoCampanhaUpdateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedUpdateWithoutCampanhasInput>;
    create: Prisma.XOR<Prisma.TipoCampanhaCreateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedCreateWithoutCampanhasInput>;
    where?: Prisma.TipoCampanhaWhereInput;
};
export type TipoCampanhaUpdateToOneWithWhereWithoutCampanhasInput = {
    where?: Prisma.TipoCampanhaWhereInput;
    data: Prisma.XOR<Prisma.TipoCampanhaUpdateWithoutCampanhasInput, Prisma.TipoCampanhaUncheckedUpdateWithoutCampanhasInput>;
};
export type TipoCampanhaUpdateWithoutCampanhasInput = {
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TipoCampanhaUncheckedUpdateWithoutCampanhasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type TipoCampanhaCountOutputType
 */
export type TipoCampanhaCountOutputType = {
    campanhas: number;
};
export type TipoCampanhaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campanhas?: boolean | TipoCampanhaCountOutputTypeCountCampanhasArgs;
};
/**
 * TipoCampanhaCountOutputType without action
 */
export type TipoCampanhaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanhaCountOutputType
     */
    select?: Prisma.TipoCampanhaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TipoCampanhaCountOutputType without action
 */
export type TipoCampanhaCountOutputTypeCountCampanhasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampanhaWhereInput;
};
export type TipoCampanhaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
    campanhas?: boolean | Prisma.TipoCampanha$campanhasArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoCampanhaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipoCampanha"]>;
export type TipoCampanhaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tipoCampanha"]>;
export type TipoCampanhaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
}, ExtArgs["result"]["tipoCampanha"]>;
export type TipoCampanhaSelectScalar = {
    id?: boolean;
    descricao?: boolean;
    status?: boolean;
};
export type TipoCampanhaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "descricao" | "status", ExtArgs["result"]["tipoCampanha"]>;
export type TipoCampanhaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campanhas?: boolean | Prisma.TipoCampanha$campanhasArgs<ExtArgs>;
    _count?: boolean | Prisma.TipoCampanhaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TipoCampanhaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TipoCampanhaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TipoCampanhaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TipoCampanha";
    objects: {
        campanhas: Prisma.$CampanhaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        descricao: string;
        status: string | null;
    }, ExtArgs["result"]["tipoCampanha"]>;
    composites: {};
};
export type TipoCampanhaGetPayload<S extends boolean | null | undefined | TipoCampanhaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload, S>;
export type TipoCampanhaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TipoCampanhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TipoCampanhaCountAggregateInputType | true;
};
export interface TipoCampanhaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TipoCampanha'];
        meta: {
            name: 'TipoCampanha';
        };
    };
    /**
     * Find zero or one TipoCampanha that matches the filter.
     * @param {TipoCampanhaFindUniqueArgs} args - Arguments to find a TipoCampanha
     * @example
     * // Get one TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoCampanhaFindUniqueArgs>(args: Prisma.SelectSubset<T, TipoCampanhaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TipoCampanha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoCampanhaFindUniqueOrThrowArgs} args - Arguments to find a TipoCampanha
     * @example
     * // Get one TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoCampanhaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TipoCampanhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TipoCampanha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaFindFirstArgs} args - Arguments to find a TipoCampanha
     * @example
     * // Get one TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoCampanhaFindFirstArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaFindFirstArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TipoCampanha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaFindFirstOrThrowArgs} args - Arguments to find a TipoCampanha
     * @example
     * // Get one TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoCampanhaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TipoCampanhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoCampanhas
     * const tipoCampanhas = await prisma.tipoCampanha.findMany()
     *
     * // Get first 10 TipoCampanhas
     * const tipoCampanhas = await prisma.tipoCampanha.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tipoCampanhaWithIdOnly = await prisma.tipoCampanha.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TipoCampanhaFindManyArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TipoCampanha.
     * @param {TipoCampanhaCreateArgs} args - Arguments to create a TipoCampanha.
     * @example
     * // Create one TipoCampanha
     * const TipoCampanha = await prisma.tipoCampanha.create({
     *   data: {
     *     // ... data to create a TipoCampanha
     *   }
     * })
     *
     */
    create<T extends TipoCampanhaCreateArgs>(args: Prisma.SelectSubset<T, TipoCampanhaCreateArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TipoCampanhas.
     * @param {TipoCampanhaCreateManyArgs} args - Arguments to create many TipoCampanhas.
     * @example
     * // Create many TipoCampanhas
     * const tipoCampanha = await prisma.tipoCampanha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TipoCampanhaCreateManyArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TipoCampanhas and returns the data saved in the database.
     * @param {TipoCampanhaCreateManyAndReturnArgs} args - Arguments to create many TipoCampanhas.
     * @example
     * // Create many TipoCampanhas
     * const tipoCampanha = await prisma.tipoCampanha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TipoCampanhas and only return the `id`
     * const tipoCampanhaWithIdOnly = await prisma.tipoCampanha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TipoCampanhaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TipoCampanha.
     * @param {TipoCampanhaDeleteArgs} args - Arguments to delete one TipoCampanha.
     * @example
     * // Delete one TipoCampanha
     * const TipoCampanha = await prisma.tipoCampanha.delete({
     *   where: {
     *     // ... filter to delete one TipoCampanha
     *   }
     * })
     *
     */
    delete<T extends TipoCampanhaDeleteArgs>(args: Prisma.SelectSubset<T, TipoCampanhaDeleteArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TipoCampanha.
     * @param {TipoCampanhaUpdateArgs} args - Arguments to update one TipoCampanha.
     * @example
     * // Update one TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TipoCampanhaUpdateArgs>(args: Prisma.SelectSubset<T, TipoCampanhaUpdateArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TipoCampanhas.
     * @param {TipoCampanhaDeleteManyArgs} args - Arguments to filter TipoCampanhas to delete.
     * @example
     * // Delete a few TipoCampanhas
     * const { count } = await prisma.tipoCampanha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TipoCampanhaDeleteManyArgs>(args?: Prisma.SelectSubset<T, TipoCampanhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TipoCampanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoCampanhas
     * const tipoCampanha = await prisma.tipoCampanha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TipoCampanhaUpdateManyArgs>(args: Prisma.SelectSubset<T, TipoCampanhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TipoCampanhas and returns the data updated in the database.
     * @param {TipoCampanhaUpdateManyAndReturnArgs} args - Arguments to update many TipoCampanhas.
     * @example
     * // Update many TipoCampanhas
     * const tipoCampanha = await prisma.tipoCampanha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TipoCampanhas and only return the `id`
     * const tipoCampanhaWithIdOnly = await prisma.tipoCampanha.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoCampanhaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TipoCampanhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TipoCampanha.
     * @param {TipoCampanhaUpsertArgs} args - Arguments to update or create a TipoCampanha.
     * @example
     * // Update or create a TipoCampanha
     * const tipoCampanha = await prisma.tipoCampanha.upsert({
     *   create: {
     *     // ... data to create a TipoCampanha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoCampanha we want to update
     *   }
     * })
     */
    upsert<T extends TipoCampanhaUpsertArgs>(args: Prisma.SelectSubset<T, TipoCampanhaUpsertArgs<ExtArgs>>): Prisma.Prisma__TipoCampanhaClient<runtime.Types.Result.GetResult<Prisma.$TipoCampanhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TipoCampanhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaCountArgs} args - Arguments to filter TipoCampanhas to count.
     * @example
     * // Count the number of TipoCampanhas
     * const count = await prisma.tipoCampanha.count({
     *   where: {
     *     // ... the filter for the TipoCampanhas we want to count
     *   }
     * })
    **/
    count<T extends TipoCampanhaCountArgs>(args?: Prisma.Subset<T, TipoCampanhaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TipoCampanhaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TipoCampanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoCampanhaAggregateArgs>(args: Prisma.Subset<T, TipoCampanhaAggregateArgs>): Prisma.PrismaPromise<GetTipoCampanhaAggregateType<T>>;
    /**
     * Group by TipoCampanha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCampanhaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TipoCampanhaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TipoCampanhaGroupByArgs['orderBy'];
    } : {
        orderBy?: TipoCampanhaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TipoCampanhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoCampanhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TipoCampanha model
     */
    readonly fields: TipoCampanhaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TipoCampanha.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TipoCampanhaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campanhas<T extends Prisma.TipoCampanha$campanhasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TipoCampanha$campanhasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampanhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the TipoCampanha model
 */
export interface TipoCampanhaFieldRefs {
    readonly id: Prisma.FieldRef<"TipoCampanha", 'Int'>;
    readonly descricao: Prisma.FieldRef<"TipoCampanha", 'String'>;
    readonly status: Prisma.FieldRef<"TipoCampanha", 'String'>;
}
/**
 * TipoCampanha findUnique
 */
export type TipoCampanhaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which TipoCampanha to fetch.
     */
    where: Prisma.TipoCampanhaWhereUniqueInput;
};
/**
 * TipoCampanha findUniqueOrThrow
 */
export type TipoCampanhaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which TipoCampanha to fetch.
     */
    where: Prisma.TipoCampanhaWhereUniqueInput;
};
/**
 * TipoCampanha findFirst
 */
export type TipoCampanhaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which TipoCampanha to fetch.
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TipoCampanhas to fetch.
     */
    orderBy?: Prisma.TipoCampanhaOrderByWithRelationInput | Prisma.TipoCampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TipoCampanhas.
     */
    cursor?: Prisma.TipoCampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TipoCampanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TipoCampanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TipoCampanhas.
     */
    distinct?: Prisma.TipoCampanhaScalarFieldEnum | Prisma.TipoCampanhaScalarFieldEnum[];
};
/**
 * TipoCampanha findFirstOrThrow
 */
export type TipoCampanhaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which TipoCampanha to fetch.
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TipoCampanhas to fetch.
     */
    orderBy?: Prisma.TipoCampanhaOrderByWithRelationInput | Prisma.TipoCampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TipoCampanhas.
     */
    cursor?: Prisma.TipoCampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TipoCampanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TipoCampanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TipoCampanhas.
     */
    distinct?: Prisma.TipoCampanhaScalarFieldEnum | Prisma.TipoCampanhaScalarFieldEnum[];
};
/**
 * TipoCampanha findMany
 */
export type TipoCampanhaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter, which TipoCampanhas to fetch.
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TipoCampanhas to fetch.
     */
    orderBy?: Prisma.TipoCampanhaOrderByWithRelationInput | Prisma.TipoCampanhaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TipoCampanhas.
     */
    cursor?: Prisma.TipoCampanhaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TipoCampanhas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TipoCampanhas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TipoCampanhas.
     */
    distinct?: Prisma.TipoCampanhaScalarFieldEnum | Prisma.TipoCampanhaScalarFieldEnum[];
};
/**
 * TipoCampanha create
 */
export type TipoCampanhaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * The data needed to create a TipoCampanha.
     */
    data: Prisma.XOR<Prisma.TipoCampanhaCreateInput, Prisma.TipoCampanhaUncheckedCreateInput>;
};
/**
 * TipoCampanha createMany
 */
export type TipoCampanhaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoCampanhas.
     */
    data: Prisma.TipoCampanhaCreateManyInput | Prisma.TipoCampanhaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TipoCampanha createManyAndReturn
 */
export type TipoCampanhaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * The data used to create many TipoCampanhas.
     */
    data: Prisma.TipoCampanhaCreateManyInput | Prisma.TipoCampanhaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TipoCampanha update
 */
export type TipoCampanhaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * The data needed to update a TipoCampanha.
     */
    data: Prisma.XOR<Prisma.TipoCampanhaUpdateInput, Prisma.TipoCampanhaUncheckedUpdateInput>;
    /**
     * Choose, which TipoCampanha to update.
     */
    where: Prisma.TipoCampanhaWhereUniqueInput;
};
/**
 * TipoCampanha updateMany
 */
export type TipoCampanhaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoCampanhas.
     */
    data: Prisma.XOR<Prisma.TipoCampanhaUpdateManyMutationInput, Prisma.TipoCampanhaUncheckedUpdateManyInput>;
    /**
     * Filter which TipoCampanhas to update
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * Limit how many TipoCampanhas to update.
     */
    limit?: number;
};
/**
 * TipoCampanha updateManyAndReturn
 */
export type TipoCampanhaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * The data used to update TipoCampanhas.
     */
    data: Prisma.XOR<Prisma.TipoCampanhaUpdateManyMutationInput, Prisma.TipoCampanhaUncheckedUpdateManyInput>;
    /**
     * Filter which TipoCampanhas to update
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * Limit how many TipoCampanhas to update.
     */
    limit?: number;
};
/**
 * TipoCampanha upsert
 */
export type TipoCampanhaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * The filter to search for the TipoCampanha to update in case it exists.
     */
    where: Prisma.TipoCampanhaWhereUniqueInput;
    /**
     * In case the TipoCampanha found by the `where` argument doesn't exist, create a new TipoCampanha with this data.
     */
    create: Prisma.XOR<Prisma.TipoCampanhaCreateInput, Prisma.TipoCampanhaUncheckedCreateInput>;
    /**
     * In case the TipoCampanha was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TipoCampanhaUpdateInput, Prisma.TipoCampanhaUncheckedUpdateInput>;
};
/**
 * TipoCampanha delete
 */
export type TipoCampanhaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
    /**
     * Filter which TipoCampanha to delete.
     */
    where: Prisma.TipoCampanhaWhereUniqueInput;
};
/**
 * TipoCampanha deleteMany
 */
export type TipoCampanhaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCampanhas to delete
     */
    where?: Prisma.TipoCampanhaWhereInput;
    /**
     * Limit how many TipoCampanhas to delete.
     */
    limit?: number;
};
/**
 * TipoCampanha.campanhas
 */
export type TipoCampanha$campanhasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CampanhaWhereInput;
    orderBy?: Prisma.CampanhaOrderByWithRelationInput | Prisma.CampanhaOrderByWithRelationInput[];
    cursor?: Prisma.CampanhaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampanhaScalarFieldEnum | Prisma.CampanhaScalarFieldEnum[];
};
/**
 * TipoCampanha without action
 */
export type TipoCampanhaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCampanha
     */
    select?: Prisma.TipoCampanhaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TipoCampanha
     */
    omit?: Prisma.TipoCampanhaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TipoCampanhaInclude<ExtArgs> | null;
};
//# sourceMappingURL=TipoCampanha.d.ts.map