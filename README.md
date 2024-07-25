
# BLEC Web ERP

## Description

Site web de BLEC Web en éco-construction avec ERP. Ce projet utilise Node.js, Express, SQLite, GraphQL, et Next.js pour fournir une plateforme complète de gestion de projets.

## Structure du Projet

```
bw_site_erp_nextjs_pg/
├── data/
│   ├── create_table.sql
│   ├── insert_data.sql
│   ├── init_db.js
├── src/
│   ├── schemas/
│   │   ├── userSchema.js
│   │   ├── projectSchema.js
│   │   ├── clientSchema.js
│   │   ├── index.js
│   ├── server.js
├── pages/
│   ├── index.js
├── mydatabase.db
├── package.json
├── pnpm-lock.yaml
├── README.md
└── .gitignore
```

## Installation

1. **Clonez le dépôt :**

```bash
git clone https://github.com/RBLEC/bw_site_erp_nextjs_pg.git
cd bw_site_erp_nextjs_pg
```

2. **Installez les dépendances :**

```bash
npm install
```

3. **Initialisez la base de données :**

```bash
node data/init_db.js
```

## Démarrage du Projet

1. **Démarrez le serveur GraphQL :**

```bash
npm run graphql
```

2. **Accédez à l'interface GraphiQL :**

Ouvrez votre navigateur et allez à `http://localhost:4000/graphql`.

3. **Démarrez le serveur Next.js :**

```bash
npm run dev
```

Accédez ensuite à `http://localhost:3000` pour voir votre application Next.js en cours d'exécution.

## Schémas et Résolveurs

Les schémas GraphQL et leurs résolveurs sont organisés de manière modulaire dans le dossier `src/schemas`. Chaque entité (utilisateurs, projets, clients) a son propre schéma et ses résolveurs.

- `userSchema.js` : Schéma et résolveurs pour les utilisateurs.
- `projectSchema.js` : Schéma et résolveurs pour les projets.
- `clientSchema.js` : Schéma et résolveurs pour les clients.

Ces schémas sont combinés dans `src/schemas/index.js`.

## Contributions

Les contributions sont les bienvenues ! Veuillez soumettre une pull request pour tout changement ou amélioration.

## Licence

Ce projet est sous licence ISC.

## Auteurs

- **RBLEC**

## Bugs

Pour signaler des bugs, veuillez utiliser le [système de suivi des problèmes](https://github.com/RBLEC/bw_site_erp_nextjs_pg/issues).

