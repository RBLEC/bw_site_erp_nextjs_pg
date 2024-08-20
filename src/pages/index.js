import fs from 'fs';
import path from 'path';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ headerMenuData, footerMenuData, isAuthenticated }) {
  return (
    <>
      <Navbar menuData={headerMenuData} isAuthenticated={isAuthenticated} />
      <main>
        <h1>Bienvenue sur notre site!</h1>
        {/* Contenu principal */}
      </main>
      <Footer menuData={footerMenuData} />
    </>
  );
}

export async function getStaticProps() {
  const menuFilePath = path.join(process.cwd(), 'src/data/pages/menu.json');
  let headerMenuData = { menu: [] };
  let footerMenuData = { menu: [] };

  try {
    const jsonData = fs.readFileSync(menuFilePath, 'utf-8');
    const menuData = JSON.parse(jsonData);

    console.log('Loaded Menu Data:', menuData); // Ajout du log

    headerMenuData = { menu: menuData.headerMenu || [] };
    footerMenuData = { menu: menuData.footerMenu || [] };

  } catch (error) {
    console.error("Failed to load menu.json:", error);
  }

  return {
    props: {
      headerMenuData,
      footerMenuData,
      isAuthenticated: false // Logique d'authentification
    },
  };
}
