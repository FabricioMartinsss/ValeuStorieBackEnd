-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "image" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
