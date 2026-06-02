export declare function base64UrlEncode(input: string | Buffer): string;
export declare function base64UrlDecodeToString(input: string): string;
export declare function signToken(payload: Record<string, unknown>): string;
export declare function verifyToken(token: string): Record<string, unknown> | null;
export declare function hashPassword(password: string): string;
export declare function verifyPassword(password: string, stored: string): boolean;
export declare function getRoleFromUsuario(tipoUsuario: string | null): "ADMIN" | "USER";
//# sourceMappingURL=auth.d.ts.map