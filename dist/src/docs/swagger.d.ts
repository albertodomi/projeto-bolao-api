export declare const openApi: {
    readonly openapi: "3.0.3";
    readonly info: {
        readonly title: "Projeto Bolão API";
        readonly version: "1.0.0";
    };
    readonly servers: readonly [{
        readonly url: "http://localhost:3001";
    }];
    readonly components: {
        readonly securitySchemes: {
            readonly bearerAuth: {
                readonly type: "http";
                readonly scheme: "bearer";
                readonly bearerFormat: "JWT";
            };
        };
    };
    readonly paths: {
        readonly "/health": {
            readonly get: {
                readonly responses: {
                    readonly "200": {
                        readonly description: "OK";
                    };
                };
            };
        };
        readonly "/auth/bootstrap-admin": {
            readonly post: {
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Admin criado";
                    };
                    readonly "403": {
                        readonly description: "Bloqueado";
                    };
                };
            };
        };
        readonly "/auth/login": {
            readonly post: {
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "200": {
                        readonly description: "Token";
                    };
                    readonly "401": {
                        readonly description: "Inválido";
                    };
                };
            };
        };
        readonly "/auth/me": {
            readonly get: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly responses: {
                    readonly "200": {
                        readonly description: "Usuário atual";
                    };
                    readonly "401": {
                        readonly description: "Não autenticado";
                    };
                };
            };
        };
        readonly "/usuarios/register": {
            readonly post: {
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Usuário criado";
                    };
                };
            };
        };
        readonly "/usuarios": {
            readonly get: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly responses: {
                    readonly "200": {
                        readonly description: "Listar usuários (admin)";
                    };
                    readonly "403": {
                        readonly description: "Acesso negado";
                    };
                };
            };
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar usuário (admin)";
                    };
                };
            };
        };
        readonly "/tipo-campanhas": {
            readonly get: {
                readonly responses: {
                    readonly "200": {
                        readonly description: "Listar tipos";
                    };
                };
            };
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar tipo (admin)";
                    };
                };
            };
        };
        readonly "/campanhas": {
            readonly get: {
                readonly responses: {
                    readonly "200": {
                        readonly description: "Listar campanhas";
                    };
                };
            };
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar campanha (admin)";
                    };
                };
            };
        };
        readonly "/campanhas/{id}/status": {
            readonly patch: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "200": {
                        readonly description: "Atualizar status (admin)";
                    };
                };
            };
        };
        readonly "/campanhas/{campanhaId}/opcoes": {
            readonly get: {
                readonly responses: {
                    readonly "200": {
                        readonly description: "Listar opções";
                    };
                };
            };
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar opção (admin)";
                    };
                };
            };
        };
        readonly "/campanha-opcoes/{id}/definir-resultado-final": {
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly responses: {
                    readonly "200": {
                        readonly description: "Definir resultado final (admin)";
                    };
                };
            };
        };
        readonly "/meios-pagamento": {
            readonly get: {
                readonly responses: {
                    readonly "200": {
                        readonly description: "Listar meios";
                    };
                };
            };
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar meio (admin)";
                    };
                };
            };
        };
        readonly "/apostas": {
            readonly post: {
                readonly security: readonly [{
                    readonly bearerAuth: readonly [];
                }];
                readonly requestBody: {
                    readonly required: true;
                };
                readonly responses: {
                    readonly "201": {
                        readonly description: "Criar aposta";
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=swagger.d.ts.map