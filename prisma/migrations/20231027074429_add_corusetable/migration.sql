-- CreateTable
CREATE TABLE "Coruse" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "duration" SMALLINT NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Coruse_pkey" PRIMARY KEY ("id")
);
