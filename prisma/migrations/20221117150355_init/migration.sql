-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "userName" VARCHAR(255) NOT NULL,
    "daysRemaining" INTEGER NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "daysTaken" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
