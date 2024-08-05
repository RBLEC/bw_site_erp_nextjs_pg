const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const createTableSql = fs.readFileSync(path.resolve(__dirname, 'create_table.sql'), 'utf8');
const insertDataSql = fs.readFileSync(path.resolve(__dirname, 'insert_data.sql'), 'utf8');

const initDB = async () => {
  try {
    // Suppression de tous les objets
    const dropAllSql = `
      DROP TABLE IF EXISTS additional_info CASCADE;
      DROP TABLE IF EXISTS user_projects CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS clients CASCADE;
      DROP TABLE IF EXISTS projects CASCADE;
      DROP TABLE IF EXISTS roles CASCADE;
      DROP TABLE IF EXISTS status_client CASCADE;
      DROP TABLE IF EXISTS enterprises CASCADE;
      DROP TABLE IF EXISTS addresses CASCADE;
      DROP TABLE IF EXISTS contacts CASCADE;
    `;

    await pool.query(dropAllSql);
    console.log("All objects dropped successfully.");

    // Création des tables
    await pool.query(createTableSql);
    console.log("Tables created successfully.");

    // Insertion des données
    await pool.query(insertDataSql);
    console.log("Data inserted successfully.");
  } catch (err) {
    console.error("Error during DB initialization:", err);
  } finally {
    pool.end();
  }
};

initDB();
