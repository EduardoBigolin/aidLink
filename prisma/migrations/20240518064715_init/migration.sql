-- CreateTable
CREATE TABLE "SecurePoint" (
    "id" BIGSERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "items" JSONB NOT NULL,

    CONSTRAINT "SecurePoint_pkey" PRIMARY KEY ("id")
);
