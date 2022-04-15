/*
  Warnings:

  - Added the required column `floral` to the `Review` table without a default value. This is not possible if the table is not empty.

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
    "floral" INTEGER NOT NULL,
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
INSERT INTO "new_Review" ("almond", "apple", "bakingSpice", "banana", "blackberry", "blueberry", "bottleId", "butterscotch", "caramel", "cherry", "chocolate", "cinnamon", "citrus", "coffee", "corn", "createdAt", "date", "dough", "finish", "glassware", "grape", "herbal", "honey", "id", "imageId", "leather", "malt", "mint", "molasses", "nose", "oak", "oily", "overallRating", "palate", "peanut", "pecan", "pepper", "raspberry", "restTime", "rye", "setting", "smokey", "stone", "strawberry", "sugar", "thoughts", "toasted", "tobacco", "toffee", "tropical", "updatedAt", "userId", "value", "vanilla", "walnut", "wheat") SELECT "almond", "apple", "bakingSpice", "banana", "blackberry", "blueberry", "bottleId", "butterscotch", "caramel", "cherry", "chocolate", "cinnamon", "citrus", "coffee", "corn", "createdAt", "date", "dough", "finish", "glassware", "grape", "herbal", "honey", "id", "imageId", "leather", "malt", "mint", "molasses", "nose", "oak", "oily", "overallRating", "palate", "peanut", "pecan", "pepper", "raspberry", "restTime", "rye", "setting", "smokey", "stone", "strawberry", "sugar", "thoughts", "toasted", "tobacco", "toffee", "tropical", "updatedAt", "userId", "value", "vanilla", "walnut", "wheat" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
