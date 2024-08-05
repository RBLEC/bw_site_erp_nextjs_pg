const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const statusClientSchema = buildSchema(`
  type Query {
    statusClients: [StatusClient]
  }
  type Mutation {
    updateStatusClient(id: String!, name: String, description: String): StatusClient
  }
  type StatusClient {
    id: String
    name: String
    description: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const statusClientResolvers = {
  Query: {
    statusClients: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM status_client WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateStatusClient: ({ id, name, description }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE status_client SET 
          name = COALESCE(?, name), 
          description = COALESCE(?, description),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [name, description, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM status_client WHERE id = ?', [id], (err, row) => {
              if (err) {
                reject(err);
              }
              resolve(row);
            });
          }
        });
      });
    }
  }
};

module.exports = { statusClientSchema, statusClientResolvers };
