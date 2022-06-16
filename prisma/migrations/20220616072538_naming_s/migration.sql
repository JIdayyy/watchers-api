/*
  Warnings:

  - You are about to drop the `Preferences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Preferences" DROP CONSTRAINT "Preferences_userId_fkey";

-- DropTable
DROP TABLE "Preferences";

-- CreateTable
CREATE TABLE "Preference" (
    "id" TEXT NOT NULL,
    "showEmail" BOOLEAN NOT NULL DEFAULT true,
    "website" TEXT,
    "location" TEXT,
    "skills" TEXT,
    "job" TEXT,
    "education" TEXT,
    "bio" TEXT,
    "color_1" TEXT,
    "color_2" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
