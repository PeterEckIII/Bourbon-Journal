-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
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
    "value" DOUBLE PRECISION,
    "overallRating" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bottle" (
    "id" TEXT NOT NULL,
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
    "finishing" TEXT,

    CONSTRAINT "Bottle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bottleId_fkey" FOREIGN KEY ("bottleId") REFERENCES "Bottle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
