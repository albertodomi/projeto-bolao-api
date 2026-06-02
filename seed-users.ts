import "dotenv/config";
import { prisma } from "./src/config/prisma.js";
import { hashPassword } from "./src/utils/auth.js";

async function main() {
  const adminEmail = "admin@gmail.com";
  const userEmail = "user@gmail.com";

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
      data: { senha: hashPassword("admin") },
    });
    console.log(`Admin já existia: ${adminEmail} (senha atualizada para 'admin')`);
  }

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
      data: { senha: hashPassword("admin") },
    });
    console.log(`Usuario normal já existia: ${userEmail} (senha atualizada para 'admin')`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
