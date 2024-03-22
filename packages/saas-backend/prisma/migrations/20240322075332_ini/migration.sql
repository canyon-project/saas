-- CreateEnum
CREATE TYPE "organization_member_role" AS ENUM ('OWNER', 'ADMIN', 'DEVELOPER', 'VIEWER');

-- CreateTable
CREATE TABLE "organization_member" (
    "id" TEXT NOT NULL,
    "role" "organization_member_role" NOT NULL,
    "user_id" INTEGER NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "organization_member_pkey" PRIMARY KEY ("id")
);
