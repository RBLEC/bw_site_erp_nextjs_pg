const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const userGroupSchema = buildSchema(`
  type Query {
    userGroups: [UserGroup]
  }
  type Mutation {
    assignUserToGroup(user_id: String!, group_id: String!, role_id: String): UserGroup
  }
  type UserGroup {
    user_id: String
    group_id: String
    role_id: String
    created_at: String
  }
`);

const userGroupResolvers = {
  Query: {
    userGroups: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM user_groups', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    assignUserToGroup: ({ user_id, group_id, role_id }) => {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO user_groups (user_id, group_id, role_id, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)`;
        db.run(query, [user_id, group_id, role_id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM user_groups WHERE user_id = ? AND group_id = ?', [user_id, group_id], (err, row) => {
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

module.exports = { userGroupSchema, userGroupResolvers };
