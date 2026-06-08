import "dotenv/config";
import { prisma } from "./src/config/prisma.js";
import { hashPassword } from "./src/utils/auth.js";

async function main() {
  const adminEmail = "admin@gmail.com";
  const userEmail = "user@gmail.com";
  const joaoEmail = "joao@gmail.com";

  // Clean up all other users
  const deleteResult = await prisma.usuario.deleteMany({
    where: {
      email: {
        notIn: [adminEmail, userEmail, joaoEmail]
      }
    }
  });
  console.log(`Deletados ${deleteResult.count} outros usuários.`);

  // 1. Admin
  let admin = await prisma.usuario.findUnique({ where: { email: adminEmail } });
  if (!admin) {
    admin = await prisma.usuario.create({
      data: {
        nome: "Administrador",
        email: adminEmail,
        senha: hashPassword("admin"),
        cpf: "99999999999",
        status: "ATIVO",
        tipoUsuario: "ADMIN",
      },
    });
    console.log(`Admin criado: ${adminEmail} / admin`);
  } else {
    await prisma.usuario.update({
      where: { email: adminEmail },
      data: { 
        nome: "Administrador",
        senha: hashPassword("admin"),
        cpf: "99999999999",
        status: "ATIVO",
        tipoUsuario: "ADMIN",
      },
    });
    console.log(`Admin atualizado: ${adminEmail} (senha atualizada para 'admin')`);
  }

  // 2. User Normal
  let user = await prisma.usuario.findUnique({ where: { email: userEmail } });
  if (!user) {
    user = await prisma.usuario.create({
      data: {
        nome: "Usuario Normal",
        email: userEmail,
        senha: hashPassword("admin"),
        cpf: "88888888888",
        status: "ATIVO",
        tipoUsuario: "USER",
      },
    });
    console.log(`Usuario normal criado: ${userEmail} / admin`);
  } else {
    await prisma.usuario.update({
      where: { email: userEmail },
      data: {
        nome: "Usuario Normal",
        senha: hashPassword("admin"),
        cpf: "88888888888",
        status: "ATIVO",
        tipoUsuario: "USER",
      },
    });
    console.log(`Usuario normal atualizado: ${userEmail} (senha atualizada para 'admin')`);
  }

  // 3. Joao
  let joao = await prisma.usuario.findUnique({ where: { email: joaoEmail } });
  if (!joao) {
    joao = await prisma.usuario.create({
      data: {
        nome: "Joao",
        email: joaoEmail,
        senha: hashPassword("admin"),
        cpf: "32145698700",
        status: "ATIVO",
        tipoUsuario: "USER",
      },
    });
    console.log(`João criado: ${joaoEmail} / admin`);
  } else {
    await prisma.usuario.update({
      where: { email: joaoEmail },
      data: {
        nome: "Joao",
        senha: hashPassword("admin"),
        cpf: "32145698700",
        status: "ATIVO",
        tipoUsuario: "USER",
      },
    });
    console.log(`João atualizado: ${joaoEmail} (senha atualizada para 'admin')`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
