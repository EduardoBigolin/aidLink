/*
  Warnings:

  - The `item` column on the `Shelter` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Shelter" DROP COLUMN "item",
ADD COLUMN     "item" JSONB[];
