// pages/index.js
import fs from 'fs';
import path from 'path';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer'; // Assure-toi d'avoir un composant Footer

export default function Home({ headerMenuData, footerMenuData, isAuthenticated }) {
  return (
    <>
      <Navbar menuData={headerMenuData} isAuthenticated={isAuthenticated} />
      <main>
        <h1>Bienvenue sur notre site!</h1>
        {/* Le reste de ton contenu */}
      </main>
      <Footer menuData={footerMenuData} />
    </>
  );
}

export async function getStaticProps() {
  const menuFilePath = path.join(process.cwd(), 'src/data/menu.json');
  let headerMenuData = { menu: [] };
  let footerMenuData = { menu: [] };

  try {
    const jsonData = fs.readFileSync(menuFilePath, 'utf-8');
    const menuData = JSON.parse(jsonData);

    headerMenuData = { menu: menuData.headerMenu || [] };
    footerMenuData = { menu: menuData.footerMenu || [] };

  } catch (error) {
    console.error("Failed to load menu.json:", error);
  }

  return {
    props: {
      headerMenuData,
      footerMenuData,
      isAuthenticated: false // Tu peux remplacer cela par ta propre logique d'authentification
    },
  };
}
