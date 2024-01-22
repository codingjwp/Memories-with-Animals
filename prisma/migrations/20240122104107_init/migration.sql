-- CreateTable
CREATE TABLE "Species" (
    "species" TEXT NOT NULL,
    "krSpecies" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("species")
);

-- CreateTable
CREATE TABLE "Breeds" (
    "id" SERIAL NOT NULL,
    "speciesId" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "krBreed" TEXT NOT NULL,

    CONSTRAINT "Breeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Breeds" ADD CONSTRAINT "Breeds_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("species") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("species") ON DELETE RESTRICT ON UPDATE CASCADE;
