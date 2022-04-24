-- AlterTable
ALTER TABLE `pages` ADD COLUMN `editorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Pages` ADD CONSTRAINT `Pages_editorId_fkey` FOREIGN KEY (`editorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
