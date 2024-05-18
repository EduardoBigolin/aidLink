/*
  Warnings:

  - You are about to drop the column `street` on the `SecurePoint` table. All the data in the column will be lost.
  - Added the required column `current_people` to the `SecurePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_people` to the `SecurePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `SecurePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pix_key` to the `SecurePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `SecurePoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SecurePoint" DROP COLUMN "street",
ADD COLUMN     "current_people" INTEGER NOT NULL,
ADD COLUMN     "max_people" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "pix_key" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SecurePoint" ADD CONSTRAINT "SecurePoint_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
