/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Shelter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shelter_user_id_key" ON "Shelter"("user_id");
