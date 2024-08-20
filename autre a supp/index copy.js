// pages/index.js
import fs from 'fs';
import path from 'path';
import Navbar from '../src/components/Navbar';

export default function Home({ menuData, isAuthenticated }) {
  return (
    <>
      <Navbar menuData={menuData} isAuthenticated={isAuthenticated} />
      <main>
        <h1>Bienvenue sur notre site!</h1>
        {/* Le reste de ton contenu */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const menuFilePath = path.join(process.cwd(), 'src/data/menu.json');
  let menuData = { menu: [] };

  try {
    const jsonData = fs.readFileSync(menuFilePath, 'utf-8');
    console.log('JSON Data:', jsonData); // Ajoute ce log pour vérifier le contenu du fichier
    menuData = JSON.parse(jsonData);
  } catch (error) {
    console.error("Failed to load menu.json:", error);
  }

  return {
    props: {
      menuData,
      isAuthenticated: false // Tu peux remplacer cela par ta propre logique d'authentification
    },
  };
}
