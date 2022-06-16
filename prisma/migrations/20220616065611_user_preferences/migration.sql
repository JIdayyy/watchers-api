-- CreateTable
CREATE TABLE "Preferences" (
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

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
