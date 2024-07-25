const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const groupSchema = buildSchema(`
  type Query {
    groups: [Group]
  }
  type Mutation {
    updateGroup(id: String!, name: String, description: String): Group
  }
  type Group {
    id: String
    name: String
    description: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const groupResolvers = {
  Query: {
    groups: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM groups WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateGroup: ({ id, name, description }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE groups SET 
          name = COALESCE(?, name), 
          description = COALESCE(?, description),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [name, description, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM groups WHERE id = ?', [id], (err, row) => {
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

module.exports = { groupSchema, groupResolvers };
