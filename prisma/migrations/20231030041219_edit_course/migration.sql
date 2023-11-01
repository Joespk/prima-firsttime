/*
  Warnings:

  - You are about to drop the `Coruse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coruse";

-- CreateTable
CREATE TABLE "Course" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "start_time" TIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
