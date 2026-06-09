import "dotenv/config";
import { prisma } from "./src/config/prisma.js";
import { hashPassword } from "./src/utils/auth.js";

async function main() {
  console.log("Iniciando limpeza do banco de dados...");
  
  // 1. Deletar na ordem correta para evitar violação de chaves estrangeiras
  await prisma.aposta.deleteMany({});
  await prisma.campanhaOpcao.deleteMany({});
  await prisma.campanha.deleteMany({});
  await prisma.meioPagamento.deleteMany({});
  await prisma.tipoCampanha.deleteMany({});
  await prisma.usuario.deleteMany({});
  
  console.log("Banco de dados limpo com sucesso!");

  // 2. Criar Usuários
  const admin = await prisma.usuario.create({
    data: {
      nome: "Administrador",
      email: "admin@gmail.com",
      senha: hashPassword("admin"),
      cpf: "99999999999",
      status: "ATIVO",
      tipoUsuario: "ADMIN",
    },
  });
  console.log("Admin criado: admin@gmail.com / admin");

  const normalUser = await prisma.usuario.create({
    data: {
      nome: "Usuario Normal",
      email: "user@gmail.com",
      senha: hashPassword("admin"),
      cpf: "88888888888",
      status: "ATIVO",
      tipoUsuario: "USER",
    },
  });
  console.log("Usuário normal criado: user@gmail.com / admin");

  const joao = await prisma.usuario.create({
    data: {
      nome: "Joao",
      email: "joao@gmail.com",
      senha: hashPassword("admin"),
      cpf: "32145698700",
      status: "ATIVO",
      tipoUsuario: "USER",
    },
  });
  console.log("João criado: joao@gmail.com / admin");

  // 3. Criar Tipos de Campanha
  const tipoFutebol = await prisma.tipoCampanha.create({
    data: {
      descricao: "Futebol",
      status: "ATIVO",
    },
  });
  console.log("Tipos de Campanha criados");

  // 4. Criar Meios de Pagamento
  const pix = await prisma.meioPagamento.create({
    data: {
      descricao: "PIX",
      status: "ATIVO",
      exigeComprovante: true,
    },
  });
  const cartao = await prisma.meioPagamento.create({
    data: {
      descricao: "Cartão de Crédito",
      status: "ATIVO",
      exigeComprovante: false,
    },
  });
  console.log("Meios de pagamento criados");

  // 5. Criar Campanhas (Jogos)
  // Jogo 1: Copa do Mundo 2026 (João participa)
  const dtInicio = new Date();
  const dtFim = new Date();
  dtFim.setDate(dtFim.getDate() + 30); // 30 dias de duração

  const copa2026 = await prisma.campanha.create({
    data: {
      nome: "Copa do Mundo 2026",
      dtInicio,
      dtFim,
      taxaOperacional: 5.0,
      valorBolao: 100.0,
      codigoCampanha: "COP26",
      status: "ABERTA",
      tipoCampanhaId: tipoFutebol.id,
    },
  });

  // Jogo 2: Brasileirão 2026 (João NÃO participa)
  const brasileirao2026 = await prisma.campanha.create({
    data: {
      nome: "Brasileirão 2026",
      dtInicio,
      dtFim,
      taxaOperacional: 2.0,
      valorBolao: 50.0,
      codigoCampanha: "BRA26",
      status: "ABERTA",
      tipoCampanhaId: tipoFutebol.id,
    },
  });
  console.log("Campanhas (jogos) criadas");

  // 6. Criar Opções das Campanhas
  const opcaoCopa1 = await prisma.campanhaOpcao.create({
    data: {
      descricao: "Brasil Hexa",
      status: "ATIVA",
      campanhaId: copa2026.id,
    },
  });
  await prisma.campanhaOpcao.create({
    data: {
      descricao: "Argentina Bi",
      status: "ATIVA",
      campanhaId: copa2026.id,
    },
  });

  const opcaoBrasileirao1 = await prisma.campanhaOpcao.create({
    data: {
      descricao: "Flamengo Campeão",
      status: "ATIVA",
      campanhaId: brasileirao2026.id,
    },
  });
  await prisma.campanhaOpcao.create({
    data: {
      descricao: "Palmeiras Campeão",
      status: "ATIVA",
      campanhaId: brasileirao2026.id,
    },
  });
  console.log("Opções de campanhas criadas");

  // 7. Criar Apostas (Participação)
  // João participa da Copa do Mundo 2026
  await prisma.aposta.create({
    data: {
      usuarioId: joao.id,
      meioPagamentoId: pix.id,
      campanhaOpcaoId: opcaoCopa1.id,
      comprovante: "https://site-comprovante.com/comp1.png",
      status: "CONFIRMADA",
    },
  });
  
  // João NÃO participa do Brasileirão 2026 (no aposta)
  
  console.log("Apostas criadas para simular participações");
  console.log("Seeding finalizado com sucesso!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

