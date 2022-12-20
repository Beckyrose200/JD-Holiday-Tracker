/*
  Warnings:

  - You are about to drop the column `daysRemaining` on the `holidayTracker` table. All the data in the column will be lost.
  - You are about to drop the column `daysUsed` on the `holidayTracker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `holidayTracker` table. All the data in the column will be lost.
  - You are about to drop the column `totalDays` on the `holidayTracker` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `holidayTracker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `holidayTracker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "holidayTracker" DROP COLUMN "daysRemaining",
DROP COLUMN "daysUsed",
DROP COLUMN "name",
DROP COLUMN "totalDays",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
