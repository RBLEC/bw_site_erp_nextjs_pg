const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const userSchema = buildSchema(`
  type Query {
    users: [User]
  }
  type Mutation {
    updateUser(id: String!, first_name: String, last_name: String, email: String, phone: String, address: String, project: String, group_name: String, other_info: String, username: String, password: String): User
  }
  type User {
    id: String
    first_name: String
    last_name: String
    email: String
    phone: String
    address: String
    project: String
    group_name: String
    other_info: String
    username: String
    password: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const userResolvers = {
  Query: {
    users: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateUser: ({ id, first_name, last_name, email, phone, address, project, group_name, other_info, username, password }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE users SET 
          first_name = COALESCE(?, first_name), 
          last_name = COALESCE(?, last_name), 
          email = COALESCE(?, email), 
          phone = COALESCE(?, phone), 
          address = COALESCE(?, address), 
          project = COALESCE(?, project), 
          group_name = COALESCE(?, group_name), 
          other_info = COALESCE(?, other_info), 
          username = COALESCE(?, username), 
          password = COALESCE(?, password),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [first_name, last_name, email, phone, address, project, group_name, other_info, username, password, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
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

module.exports = { userSchema, userResolvers };
