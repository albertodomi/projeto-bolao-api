export const openApi = {
  openapi: "3.0.3",
  info: { title: "Projeto Bolão API", version: "1.0.0" },
  servers: [{ url: "http://localhost:3001" }],
  components: {
    securitySchemes: {
      bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    },
    schemas: {
      Login: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: { type: "string", format: "email", example: "admin@gmail.com" },
          senha: { type: "string", example: "admin" },
        },
      },
      Register: {
        type: "object",
        required: ["nome", "cpf", "email", "senha"],
        properties: {
          nome: { type: "string", example: "João da Silva" },
          cpf: { type: "string", example: "12345678901" },
          email: { type: "string", format: "email", example: "joao@gmail.com" },
          senha: { type: "string", example: "admin123" },
          telefone: { type: "string", example: "11999999999" },
        },
      },
      CreateUser: {
        type: "object",
        required: ["nome", "cpf", "email", "senha"],
        properties: {
          nome: { type: "string", example: "Maria Souza" },
          cpf: { type: "string", example: "98765432100" },
          email: { type: "string", format: "email", example: "maria@gmail.com" },
          senha: { type: "string", example: "admin123" },
          telefone: { type: "string", example: "11988888888" },
          status: { type: "string", enum: ["ATIVO", "INATIVO"], default: "ATIVO" },
          role: { type: "string", enum: ["ADMIN", "USER"], default: "USER" },
        },
      },
      CreateTipoCampanha: {
        type: "object",
        required: ["descricao"],
        properties: {
          descricao: { type: "string", example: "Futebol Nacional" },
        },
      },
      CreateCampanha: {
        type: "object",
        required: ["nome", "dt_inicio", "dt_fim", "taxa_operacional", "valor_bolao", "codigo_campanha", "tipo_campanha_id"],
        properties: {
          nome: { type: "string", example: "Copa do Mundo 2026" },
          dt_inicio: { type: "string", format: "date-time", example: "2026-06-01T00:00:00.000Z" },
          dt_fim: { type: "string", format: "date-time", example: "2026-07-31T23:59:59.000Z" },
          taxa_operacional: { type: "number", example: 5 },
          valor_bolao: { type: "number", example: 100 },
          codigo_campanha: { type: "string", example: "COP26" },
          status: { type: "string", enum: ["ABERTA", "ENCERRADA", "APURADA", "INATIVA"], default: "ABERTA" },
          tipo_campanha_id: { type: "integer", example: 1 },
        },
      },
      UpdateCampanhaStatus: {
        type: "object",
        required: ["status"],
        properties: {
          status: { type: "string", enum: ["ABERTA", "ENCERRADA", "APURADA", "INATIVA"] },
        },
      },
      CreateCampanhaOpcao: {
        type: "object",
        required: ["descricao"],
        properties: {
          descricao: { type: "string", example: "Brasil" },
          status: { type: "string", enum: ["ATIVA", "INATIVA"], default: "ATIVA" },
        },
      },
      CreateMeioPagamento: {
        type: "object",
        required: ["descricao"],
        properties: {
          descricao: { type: "string", example: "PIX" },
          exige_comprovante: { type: "boolean", default: false },
        },
      },
      CreateAposta: {
        type: "object",
        required: ["campanha_opcao_id", "meio_pagamento_id"],
        properties: {
          campanha_opcao_id: { type: "integer", example: 1 },
          meio_pagamento_id: { type: "integer", example: 1 },
          comprovante: { type: "string", format: "uri", example: "https://comprovantes.com/pagamento123.pdf" },
        },
      },
    },
  },
  paths: {
    "/health": { get: { responses: { "200": { description: "OK" } } } },
    "/auth/bootstrap-admin": {
      post: {
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/Register" } } } },
        responses: { "201": { description: "Admin criado" }, "403": { description: "Bloqueado" } },
      },
    },
    "/auth/login": {
      post: {
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/Login" } } } },
        responses: { "200": { description: "Token" }, "401": { description: "Inválido" } },
      },
    },
    "/auth/me": {
      get: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Usuário atual" }, "401": { description: "Não autenticado" } } },
    },
    "/usuarios/register": {
      post: {
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/Register" } } } },
        responses: { "201": { description: "Usuário criado" } },
      },
    },
    "/usuarios": {
      get: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Listar usuários (admin)" }, "403": { description: "Acesso negado" } } },
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateUser" } } } },
        responses: { "201": { description: "Criar usuário (admin)" } },
      },
    },
    "/tipo-campanhas": {
      get: { responses: { "200": { description: "Listar tipos" } } },
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateTipoCampanha" } } } },
        responses: { "201": { description: "Criar tipo (admin)" } },
      },
    },
    "/campanhas": {
      get: { responses: { "200": { description: "Listar campanhas" } } },
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateCampanha" } } } },
        responses: { "201": { description: "Criar campanha (admin)" } },
      },
    },
    "/campanhas/{id}/status": {
      patch: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/UpdateCampanhaStatus" } } } },
        responses: { "200": { description: "Atualizar status (admin)" } },
      },
    },
    "/campanhas/{campanhaId}/opcoes": {
      get: { responses: { "200": { description: "Listar opções" } } },
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateCampanhaOpcao" } } } },
        responses: { "201": { description: "Criar opção (admin)" } },
      },
    },
    "/campanha-opcoes/{id}/definir-resultado-final": {
      post: { security: [{ bearerAuth: [] }], responses: { "200": { description: "Definir resultado final (admin)" } } },
    },
    "/meios-pagamento": {
      get: { responses: { "200": { description: "Listar meios" } } },
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateMeioPagamento" } } } },
        responses: { "201": { description: "Criar meio (admin)" } },
      },
    },
    "/apostas": {
      post: {
        security: [{ bearerAuth: [] }],
        requestBody: { required: true, content: { "application/json": { schema: { $ref: "#/components/schemas/CreateAposta" } } } },
        responses: { "201": { description: "Criar aposta" } },
      },
    },
  },
} as const
