-- CreateTable
CREATE TABLE "holidayTracker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "daysUsed" INTEGER NOT NULL,
    "daysRemaining" INTEGER NOT NULL,

    CONSTRAINT "holidayTracker_pkey" PRIMARY KEY ("id")
);
