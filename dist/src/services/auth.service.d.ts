import { z } from "zod";
import { LoginSchema, RegisterUserSchema } from "../schemas/index.js";
export declare class AuthService {
    static login(data: z.infer<typeof LoginSchema>): Promise<{
        token: string;
        user: {
            id: number;
            nome: string;
            email: string;
            role: "ADMIN" | "USER";
        };
    }>;
    static register(data: z.infer<typeof RegisterUserSchema>): Promise<{
        role: string;
        email: string;
        nome: string;
        cpf: string;
        status: import("../../generated/prisma/enums.js").StatusUsuario;
        id: number;
        tipoUsuario: string | null;
    }>;
    static bootstrapAdmin(data: z.infer<typeof RegisterUserSchema>): Promise<{
        role: string;
        email: string;
        nome: string;
        cpf: string;
        status: import("../../generated/prisma/enums.js").StatusUsuario;
        id: number;
        tipoUsuario: string | null;
    }>;
    static getMe(userId: number): Promise<{
        id: number;
        nome: string;
        cpf: string;
        email: string;
        status: import("../../generated/prisma/enums.js").StatusUsuario;
        role: "ADMIN" | "USER";
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map