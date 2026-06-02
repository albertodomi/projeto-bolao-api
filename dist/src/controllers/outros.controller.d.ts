import type { Request, Response, NextFunction } from "express";
export declare class TipoCampanhaController {
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class MeioPagamentoController {
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class ApostaController {
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findMinhas(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=outros.controller.d.ts.map