import "dotenv/config";
import { prisma } from "./src/config/prisma.js";

async function main() {
  const users = await prisma.usuario.findMany();
  console.log(users);
}

main().finally(() => prisma.$disconnect());
