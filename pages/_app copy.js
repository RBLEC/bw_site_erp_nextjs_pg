// pages/_app.js
import fs from 'fs';
import path from 'path';
import Navbar from '../src/components/Navbar';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps, menuData, isAuthenticated }) {
  return (
    <>
      <Navbar menuData={menuData} isAuthenticated={isAuthenticated} />
      <Component {...pageProps} />
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
      isAuthenticated: false 
    },
  };
}

export default MyApp;
