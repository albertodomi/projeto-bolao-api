import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more TipoCampanhas
 * const tipoCampanhas = await prisma.tipoCampanha.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model TipoCampanha
 *
 */
export type TipoCampanha = Prisma.TipoCampanhaModel;
/**
 * Model Campanha
 *
 */
export type Campanha = Prisma.CampanhaModel;
/**
 * Model CampanhaOpcao
 *
 */
export type CampanhaOpcao = Prisma.CampanhaOpcaoModel;
/**
 * Model Usuario
 *
 */
export type Usuario = Prisma.UsuarioModel;
/**
 * Model MeioPagamento
 *
 */
export type MeioPagamento = Prisma.MeioPagamentoModel;
/**
 * Model Aposta
 *
 */
export type Aposta = Prisma.ApostaModel;
//# sourceMappingURL=client.d.ts.map