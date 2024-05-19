/*
  Warnings:

  - Added the required column `image` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Shelter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "lat" TEXT NOT NULL,
ADD COLUMN     "long" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Shelter" ADD CONSTRAINT "Shelter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
