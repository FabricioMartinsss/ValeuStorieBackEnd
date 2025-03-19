/*
  Warnings:

  - You are about to drop the column `name` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `name_product` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "name",
ADD COLUMN     "name_product" TEXT NOT NULL;
