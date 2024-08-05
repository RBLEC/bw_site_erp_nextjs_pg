// src/server.js
const express = require('express');
const { postgraphile } = require('postgraphile');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT_SERVER || 4000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Fonction pour exécuter les fichiers SQL
const executeSQLFile = async (filePath) => {
  const sql = fs.readFileSync(filePath, 'utf8');
  try {
    await pool.query(sql);
    console.log('SQL script executed successfully');
  } catch (err) {
    console.error('Error executing SQL script:', err);
  }
};

// Exécuter les fichiers SQL au démarrage du serveur
//executeSQLFile(path.resolve(__dirname, 'data/create_table.sql'));
//executeSQLFile(path.resolve(__dirname, 'data/insert_data.sql'));

// Middleware PostGraphile
app.use(
  postgraphile(process.env.DATABASE_URL, 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    ownerConnectionString: process.env.OWNER_DATABASE_URL,
  })
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/graphiql`);
});
