import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../../generated/prisma/client.js";
function createPrismaClient() {
    const url = process.env["DATABASE_URL"];
    if (!url)
        throw new Error("DATABASE_URL não configurada");
    if (url.startsWith("postgres://") || url.startsWith("postgresql://")) {
        const pool = new Pool({ connectionString: url });
        const adapter = new PrismaPg(pool);
        return new PrismaClient({ adapter });
    }
    return new PrismaClient({ accelerateUrl: url });
}
export const prisma = createPrismaClient();
//# sourceMappingURL=prisma.js.map