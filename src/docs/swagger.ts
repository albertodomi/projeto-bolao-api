export const openApi = {
  openapi: "3.0.3",
  info: { title: "Projeto Bolão API", version: "1.0.0" },
  servers: [{ url: "http://localhost:3001" }],
  components: {
    securitySchemes: {
      bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    },
  },
  paths: {
    "/health": { get: { responses: { "200": { description: "OK" } } } },
    "/auth/bootstrap-admin": {
      post: {
        requestBody: { required: true },
        responses: { "201": { description: "Admin criado" }, "403": { description: "Bloqueado" } },
      },
    },
    "/auth/login": {
      post: { requestBody: { required: true }, responses: { "200": { description: "Token" }, "401": { description: "Inválido" } } },
    },
    "/auth/me": {
      get: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Usuário atual" }, "401": { description: "Não autenticado" } } },
    },
    "/usuarios/register": { post: { requestBody: { required: true }, responses: { "201": { description: "Usuário criado" } } } },
    "/usuarios": {
      get: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Listar usuários (admin)" }, "403": { description: "Acesso negado" } } },
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar usuário (admin)" } } },
    },
    "/tipo-campanhas": {
      get: { responses: { "200": { description: "Listar tipos" } } },
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar tipo (admin)" } } },
    },
    "/campanhas": {
      get: { responses: { "200": { description: "Listar campanhas" } } },
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar campanha (admin)" } } },
    },
    "/campanhas/{id}/status": {
      patch: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "200": { description: "Atualizar status (admin)" } } },
    },
    "/campanhas/{campanhaId}/opcoes": {
      get: { responses: { "200": { description: "Listar opções" } } },
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar opção (admin)" } } },
    },
    "/campanha-opcoes/{id}/definir-resultado-final": {
      post: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Definir resultado final (admin)" } } },
    },
    "/meios-pagamento": {
      get: { responses: { "200": { description: "Listar meios" } } },
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar meio (admin)" } } },
    },
    "/apostas": {
      post: { security: [{ bearerAuth: [] }], requestBody: { required: true }, responses: { "201": { description: "Criar aposta" } } },
    },
  },
} as const
