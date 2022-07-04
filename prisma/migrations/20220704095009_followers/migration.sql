-- AlterTable
ALTER TABLE "User" ADD COLUMN     "follower_id" TEXT;

-- CreateTable
CREATE TABLE "_following" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_following_AB_unique" ON "_following"("A", "B");

-- CreateIndex
CREATE INDEX "_following_B_index" ON "_following"("B");

-- AddForeignKey
ALTER TABLE "_following" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_following" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
