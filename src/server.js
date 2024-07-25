const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();
const schema = require('./schemas');

const app = express();
const port = process.env.PORT_SERVER || 4000;

// Connexion à la base de données SQLite existante
const db = new sqlite3.Database(path.resolve(__dirname, '..', 'mydatabase.db'));

// Middleware GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/graphql`);
});
