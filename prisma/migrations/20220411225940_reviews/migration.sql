/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bottleId" TEXT,
    "date" TEXT NOT NULL,
    "imageId" TEXT,
    "setting" TEXT,
    "glassware" TEXT,
    "restTime" TEXT,
    "nose" TEXT NOT NULL,
    "palate" TEXT NOT NULL,
    "finish" TEXT NOT NULL,
    "thoughts" TEXT,
    "baked" INTEGER NOT NULL,
    "buttery" INTEGER NOT NULL,
    "chocolate" INTEGER NOT NULL,
    "toffee" INTEGER NOT NULL,
    "corn" INTEGER NOT NULL,
    "rye" INTEGER NOT NULL,
    "wheat" INTEGER NOT NULL,
    "malt" INTEGER NOT NULL,
    "bakingSpice" INTEGER NOT NULL,
    "molasses" INTEGER NOT NULL,
    "nutty" INTEGER NOT NULL,
    "oaky" INTEGER NOT NULL,
    "redFruit" INTEGER NOT NULL,
    "darkFruit" INTEGER NOT NULL,
    "berryFruit" INTEGER NOT NULL,
    "citrusFruit" INTEGER NOT NULL,
    "stoneFruit" INTEGER NOT NULL,
    "driedFruit" INTEGER NOT NULL,
    "earthy" INTEGER NOT NULL,
    "tobacco" INTEGER NOT NULL,
    "leather" INTEGER NOT NULL,
    "floral" INTEGER NOT NULL,
    "herbaceous" INTEGER NOT NULL,
    "overallRating" REAL NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_bottleId_fkey" FOREIGN KEY ("bottleId") REFERENCES "Bottle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bottle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "bottler" TEXT,
    "distiller" TEXT,
    "producer" TEXT,
    "country" TEXT,
    "region" TEXT,
    "price" REAL NOT NULL,
    "age" TEXT,
    "year" TEXT,
    "batch" TEXT,
    "alcoholPercent" TEXT NOT NULL,
    "proof" TEXT NOT NULL,
    "size" TEXT,
    "color" TEXT NOT NULL,
    "finishing" TEXT
);
