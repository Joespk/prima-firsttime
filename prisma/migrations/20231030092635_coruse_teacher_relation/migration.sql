/*
  Warnings:

  - Added the required column `instructorId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "instructorId" UUID NOT NULL DEFAULT '015eb948-6c7e-4068-83d9-ffdbd5da2619' ;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
