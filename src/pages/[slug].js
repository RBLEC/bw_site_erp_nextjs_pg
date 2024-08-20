// pages/[slug].js
import fs from 'fs';
import path from 'path';

export default function Page({ pageData }) {
  return (
    <div>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  // Charger les données du fichier JSON
  //!const filePath = path.join(process.cwd(), 'src/data/pages.json');
  const filePath = path.join(process.cwd(), 'src/data/menu.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Récupérer tous les slugs
  const paths = data.pages.map((page) => ({
    params: { slug: page.slug }
  }));

  return {
    paths,
    fallback: false // Retourne une 404 pour les routes non générées
  };
}

export async function getStaticProps({ params }) {
  // Charger les données du fichier JSON
  //!const filePath = path.join(process.cwd(), 'src/data/pages.json');
  const filePath = path.join(process.cwd(), 'src/data/menu.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Récupérer la page correspondant au slug
  const pageData = data.pages.find((page) => page.slug === params.slug);

  return {
    props: {
      pageData
    }
  };
}
