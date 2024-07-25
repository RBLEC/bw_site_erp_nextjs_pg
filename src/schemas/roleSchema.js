const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const roleSchema = buildSchema(`
  type Query {
    roles: [Role]
  }
  type Mutation {
    updateRole(id: String!, name: String, description: String): Role
  }
  type Role {
    id: String
    name: String
    description: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const roleResolvers = {
  Query: {
    roles: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM roles WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateRole: ({ id, name, description }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE roles SET 
          name = COALESCE(?, name), 
          description = COALESCE(?, description),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [name, description, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM roles WHERE id = ?', [id], (err, row) => {
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

module.exports = { roleSchema, roleResolvers };
