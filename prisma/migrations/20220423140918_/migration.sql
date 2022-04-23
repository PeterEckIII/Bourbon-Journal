/*
  Warnings:

  - You are about to alter the column `overallRating` on the `Review` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `value` on the `Review` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bottleId" TEXT,
    "date" TEXT,
    "imageId" TEXT,
    "setting" TEXT,
    "glassware" TEXT,
    "restTime" TEXT,
    "nose" TEXT,
    "palate" TEXT,
    "finish" TEXT,
    "thoughts" TEXT,
    "pepper" INTEGER,
    "bakingSpice" INTEGER,
    "cinnamon" INTEGER,
    "herbal" INTEGER,
    "mint" INTEGER,
    "cherry" INTEGER,
    "strawberry" INTEGER,
    "raspberry" INTEGER,
    "blackberry" INTEGER,
    "blueberry" INTEGER,
    "apple" INTEGER,
    "banana" INTEGER,
    "grape" INTEGER,
    "stone" INTEGER,
    "citrus" INTEGER,
    "tropical" INTEGER,
    "coffee" INTEGER,
    "tobacco" INTEGER,
    "leather" INTEGER,
    "oak" INTEGER,
    "toasted" INTEGER,
    "smokey" INTEGER,
    "peanut" INTEGER,
    "almond" INTEGER,
    "pecan" INTEGER,
    "walnut" INTEGER,
    "oily" INTEGER,
    "floral" INTEGER,
    "corn" INTEGER,
    "rye" INTEGER,
    "wheat" INTEGER,
    "malt" INTEGER,
    "dough" INTEGER,
    "vanilla" INTEGER,
    "caramel" INTEGER,
    "molasses" INTEGER,
    "butterscotch" INTEGER,
    "honey" INTEGER,
    "chocolate" INTEGER,
    "toffee" INTEGER,
    "sugar" INTEGER,
    "value" INTEGER,
    "overallRating" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_bottleId_fkey" FOREIGN KEY ("bottleId") REFERENCES "Bottle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("almond", "apple", "bakingSpice", "banana", "blackberry", "blueberry", "bottleId", "butterscotch", "caramel", "cherry", "chocolate", "cinnamon", "citrus", "coffee", "corn", "createdAt", "date", "dough", "finish", "floral", "glassware", "grape", "herbal", "honey", "id", "imageId", "leather", "malt", "mint", "molasses", "nose", "oak", "oily", "overallRating", "palate", "peanut", "pecan", "pepper", "raspberry", "restTime", "rye", "setting", "smokey", "stone", "strawberry", "sugar", "thoughts", "toasted", "tobacco", "toffee", "tropical", "updatedAt", "userId", "value", "vanilla", "walnut", "wheat") SELECT "almond", "apple", "bakingSpice", "banana", "blackberry", "blueberry", "bottleId", "butterscotch", "caramel", "cherry", "chocolate", "cinnamon", "citrus", "coffee", "corn", "createdAt", "date", "dough", "finish", "floral", "glassware", "grape", "herbal", "honey", "id", "imageId", "leather", "malt", "mint", "molasses", "nose", "oak", "oily", "overallRating", "palate", "peanut", "pecan", "pepper", "raspberry", "restTime", "rye", "setting", "smokey", "stone", "strawberry", "sugar", "thoughts", "toasted", "tobacco", "toffee", "tropical", "updatedAt", "userId", "value", "vanilla", "walnut", "wheat" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE TABLE "new_Bottle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "bottler" TEXT,
    "distiller" TEXT,
    "producer" TEXT,
    "country" TEXT,
    "region" TEXT,
    "price" TEXT,
    "age" TEXT,
    "year" TEXT,
    "batch" TEXT,
    "alcoholPercent" TEXT,
    "proof" TEXT,
    "size" TEXT,
    "color" TEXT,
    "finishing" TEXT
);
INSERT INTO "new_Bottle" ("age", "alcoholPercent", "batch", "bottler", "color", "country", "distiller", "finishing", "id", "name", "price", "producer", "proof", "region", "size", "type", "year") SELECT "age", "alcoholPercent", "batch", "bottler", "color", "country", "distiller", "finishing", "id", "name", "price", "producer", "proof", "region", "size", "type", "year" FROM "Bottle";
DROP TABLE "Bottle";
ALTER TABLE "new_Bottle" RENAME TO "Bottle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
