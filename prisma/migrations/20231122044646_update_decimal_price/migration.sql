/*
  Warnings:

  - You are about to alter the column `price` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "gas" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Item" ("color", "createdAt", "description", "gas", "id", "name", "price", "updatedAt", "years") SELECT "color", "createdAt", "description", "gas", "id", "name", "price", "updatedAt", "years" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
