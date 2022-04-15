/*
  Warnings:

  - You are about to drop the column `baked` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `berryFruit` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `buttery` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `citrusFruit` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `darkFruit` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `driedFruit` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `earthy` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `floral` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `herbaceous` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `nutty` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `oaky` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `redFruit` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `stoneFruit` on the `Review` table. All the data in the column will be lost.
  - Added the required column `almond` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apple` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banana` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blackberry` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blueberry` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `butterscotch` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caramel` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cherry` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cinnamon` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `citrus` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coffee` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dough` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grape` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `herbal` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `honey` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mint` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oak` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oily` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peanut` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pecan` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pepper` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raspberry` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smokey` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stone` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strawberry` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toasted` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tropical` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vanilla` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walnut` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
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
    "pepper" INTEGER NOT NULL,
    "bakingSpice" INTEGER NOT NULL,
    "cinnamon" INTEGER NOT NULL,
    "herbal" INTEGER NOT NULL,
    "mint" INTEGER NOT NULL,
    "cherry" INTEGER NOT NULL,
    "strawberry" INTEGER NOT NULL,
    "raspberry" INTEGER NOT NULL,
    "blackberry" INTEGER NOT NULL,
    "blueberry" INTEGER NOT NULL,
    "apple" INTEGER NOT NULL,
    "banana" INTEGER NOT NULL,
    "grape" INTEGER NOT NULL,
    "stone" INTEGER NOT NULL,
    "citrus" INTEGER NOT NULL,
    "tropical" INTEGER NOT NULL,
    "coffee" INTEGER NOT NULL,
    "tobacco" INTEGER NOT NULL,
    "leather" INTEGER NOT NULL,
    "oak" INTEGER NOT NULL,
    "toasted" INTEGER NOT NULL,
    "smokey" INTEGER NOT NULL,
    "peanut" INTEGER NOT NULL,
    "almond" INTEGER NOT NULL,
    "pecan" INTEGER NOT NULL,
    "walnut" INTEGER NOT NULL,
    "oily" INTEGER NOT NULL,
    "corn" INTEGER NOT NULL,
    "rye" INTEGER NOT NULL,
    "wheat" INTEGER NOT NULL,
    "malt" INTEGER NOT NULL,
    "dough" INTEGER NOT NULL,
    "vanilla" INTEGER NOT NULL,
    "caramel" INTEGER NOT NULL,
    "molasses" INTEGER NOT NULL,
    "butterscotch" INTEGER NOT NULL,
    "honey" INTEGER NOT NULL,
    "chocolate" INTEGER NOT NULL,
    "toffee" INTEGER NOT NULL,
    "sugar" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    "overallRating" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_bottleId_fkey" FOREIGN KEY ("bottleId") REFERENCES "Bottle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("bakingSpice", "bottleId", "chocolate", "corn", "createdAt", "date", "finish", "glassware", "id", "imageId", "leather", "malt", "molasses", "nose", "overallRating", "palate", "restTime", "rye", "setting", "thoughts", "tobacco", "toffee", "updatedAt", "userId", "value", "wheat") SELECT "bakingSpice", "bottleId", "chocolate", "corn", "createdAt", "date", "finish", "glassware", "id", "imageId", "leather", "malt", "molasses", "nose", "overallRating", "palate", "restTime", "rye", "setting", "thoughts", "tobacco", "toffee", "updatedAt", "userId", "value", "wheat" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
