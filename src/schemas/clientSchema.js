const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const clientSchema = buildSchema(`
  type Query {
    clients: [Client]
  }
  type Mutation {
    updateClient(id: String!, first_name: String, last_name: String, email: String, phone: String, address: String, project: String, status_id: String, other_info: String): Client
  }
  type Client {
    id: String
    first_name: String
    last_name: String
    email: String
    phone: String
    address: String
    project: String
    status_id: String
    other_info: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const clientResolvers = {
  Query: {
    clients: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM clients WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateClient: ({ id, first_name, last_name, email, phone, address, project, status_id, other_info }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE clients SET 
          first_name = COALESCE(?, first_name), 
          last_name = COALESCE(?, last_name), 
          email = COALESCE(?, email), 
          phone = COALESCE(?, phone), 
          address = COALESCE(?, address), 
          project = COALESCE(?, project), 
          status_id = COALESCE(?, status_id), 
          other_info = COALESCE(?, other_info),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [first_name, last_name, email, phone, address, project, status_id, other_info, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM clients WHERE id = ?', [id], (err, row) => {
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

module.exports = { clientSchema, clientResolvers };
