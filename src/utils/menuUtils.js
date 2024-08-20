import fs from 'fs';
import path from 'path';

export const checkFileExists = (filePath) => {
  return fs.existsSync(filePath);
};

export const filterMenuItems = (menuItems) => {
  return menuItems.filter(item => {
    const jsonFilePath = path.join(process.cwd(), `src/data/${item.slug}.json`);
    const hasJsonFile = checkFileExists(jsonFilePath);

    if (item.subMenu && item.subMenu.length > 0) {
      item.subMenu = filterMenuItems(item.subMenu);
    }

    // Si l'élément n'a pas de fichier JSON associé, il est masqué
    return hasJsonFile || item.subMenu.length > 0;
  });
};
