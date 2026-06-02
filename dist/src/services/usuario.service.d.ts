import { z } from "zod";
import { CreateUserSchema } from "../schemas/index.js";
export declare class UsuarioService {
    static create(data: z.infer<typeof CreateUserSchema>): Promise<{
        role: "ADMIN" | "USER";
        email: string;
        nome: string;
        cpf: string;
        status: import("../../generated/prisma/enums.js").StatusUsuario;
        id: number;
        tipoUsuario: string | null;
    }>;
    static findAll(): Promise<any[]>;
}
//# sourceMappingURL=usuario.service.d.ts.map