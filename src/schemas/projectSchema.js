const { buildSchema } = require('graphql');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.resolve(__dirname, '..', '..', 'mydatabase.db'));

const projectSchema = buildSchema(`
  type Query {
    projects: [Project]
  }
  type Mutation {
    updateProject(id: String!, name: String, description: String): Project
  }
  type Project {
    id: String
    name: String
    description: String
    created_at: String
    updated_at: String
    deleted_at: String
  }
`);

const projectResolvers = {
  Query: {
    projects: () => {
      return new Promise((resolve, reject) => {
        db.all('SELECT * FROM projects WHERE deleted_at IS NULL', (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
      });
    }
  },
  Mutation: {
    updateProject: ({ id, name, description }) => {
      return new Promise((resolve, reject) => {
        const query = `UPDATE projects SET 
          name = COALESCE(?, name), 
          description = COALESCE(?, description),
          updated_at = CURRENT_TIMESTAMP
          WHERE id = ? AND deleted_at IS NULL`;
        db.run(query, [name, description, id], function (err) {
          if (err) {
            reject(err);
          } else {
            db.get('SELECT * FROM projects WHERE id = ?', [id], (err, row) => {
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

module.exports = { projectSchema, projectResolvers };
