/*
  Warnings:

  - You are about to alter the column `content` on the `pages` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `LongText`.

*/
-- AlterTable
ALTER TABLE `pages` MODIFY `content` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `content` LONGTEXT NULL;
