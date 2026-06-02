import type { Request, Response, NextFunction } from "express";
export declare class CampanhaController {
    static create(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
    static findById(req: Request, res: Response, next: NextFunction): Promise<void>;
    static updateStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    static createOpcao(req: Request, res: Response, next: NextFunction): Promise<void>;
    static findOpcoesByCampanha(req: Request, res: Response, next: NextFunction): Promise<void>;
    static definirResultadoFinal(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=campanha.controller.d.ts.map