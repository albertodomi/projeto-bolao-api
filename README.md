# Projeto Bolão API

Backend em Node.js com Express para o sistema de gerenciamento do Projeto Bolão.

## 🚀 Tecnologias

- **Node.js** com **Express**
- **TypeScript**
- **Prisma ORM** para interação com o banco de dados
- **PostgreSQL** como banco de dados relacional
- **Zod** para validação de dados
- **Swagger / OpenAPI** para documentação da API

## 📋 Pré-requisitos

Para rodar este projeto localmente, você vai precisar do [Node.js](https://nodejs.org/en/) e de um banco de dados [PostgreSQL](https://www.postgresql.org/) instalados na sua máquina (ou rodando via Docker).

## 🔧 Instalação e Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o arquivo `.env` na raiz do projeto. Defina suas variáveis (exemplo):
   ```env
   PORT=3001
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/bolao?schema=public"
   ```

3. Rode as migrations do banco de dados (isso irá criar as tabelas necessárias):
   ```bash
   npm run prisma:migrate
   ```

4. Gere o client do Prisma:
   ```bash
   npm run prisma:generate
   ```

## ⚙️ Como executar

### Desenvolvimento
Para rodar a API em modo de desenvolvimento (com hot-reload através do `tsx`):
```bash
npm run dev
```

### Produção
Para compilar o código TypeScript e rodá-lo:
```bash
npm run build
npm start
```

## 📚 Documentação da API

A documentação interativa da API está disponível via Swagger.
Com a aplicação rodando (por padrão na porta 3001), acesse em seu navegador:

- **Swagger UI:** [http://localhost:3001/swagger](http://localhost:3001/swagger)
- **OpenAPI JSON:** [http://localhost:3001/openapi.json](http://localhost:3001/openapi.json)

## 🗄️ Entidades Principais

- **Usuario**: Contas de acesso no sistema.
- **Campanha**: Configurações de eventos que receberão os bolões.
- **CampanhaOpcao**: Opções de apostas válidas para cada campanha.
- **Aposta**: Vínculo entre usuário, campanha, opção escolhida e pagamento.
- **MeioPagamento**: Formas de pagamento disponíveis.
- **TipoCampanha**: Agrupamento lógico das campanhas.
