import { PrismaClient } from "@prisma/client";
import { hash } from "../../src/utils/hash";
const prisma = new PrismaClient();
async function main() {
  const hashPassword = await hash("123456")
  const admin = await prisma.user.create({
    data: {
      email: "admin@admin.com",
      name: "Admin",
      password: hashPassword,
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
