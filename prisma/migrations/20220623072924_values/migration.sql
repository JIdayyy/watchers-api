-- AlterTable
ALTER TABLE "User" ALTER COLUMN "is_disabled" SET DEFAULT false,
ALTER COLUMN "nickname" SET DEFAULT E'username';
