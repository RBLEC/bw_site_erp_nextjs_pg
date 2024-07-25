const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const userProjectSchema = buildSchema(`
  type Query {
    userProjects: [UserProject]
  }
  type Mutation {
    assignUserToProject(user_id: String!, project_id: String!, role_id: String): UserProject
  }
  type UserProject {
    user_id: String
    project_id: String
    role_id: String
    created_at: String
  }
`);

const userProjectResolvers = {
  Query: {
    userProjects: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM user_projects', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    assignUserToProject: ({ user_id, project_id, role_id }) => {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO user_projects (user_id, project_id, role_id, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)`;
        db.run(query, [user_id, project_id, role_id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM user_projects WHERE user_id = ? AND project_id = ?', [user_id, project_id], (err, row) => {
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

module.exports = { userProjectSchema, userProjectResolvers };
