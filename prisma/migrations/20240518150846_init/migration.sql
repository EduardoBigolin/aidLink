/*
  Warnings:

  - You are about to drop the `SecurePoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SecurePoint" DROP CONSTRAINT "SecurePoint_user_id_fkey";

-- DropTable
DROP TABLE "SecurePoint";
