const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const dbPath = path.resolve(__dirname, '..', process.env.DB_PATH || 'mydatabase.db');
const createTableSql = fs.readFileSync(path.resolve(__dirname, 'create_table.sql'), 'utf8');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.exec("DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS clients; DROP TABLE IF EXISTS projects; DROP TABLE IF EXISTS roles; DROP TABLE IF EXISTS groups; DROP TABLE IF EXISTS user_projects; DROP TABLE IF EXISTS user_groups;", (err) => {
        if (err) {
            console.error("Error dropping tables:", err);
        } else {
            console.log("Tables dropped successfully.");
            db.exec(createTableSql, (err) => {
                if (err) {
                    console.error("Error creating tables:", err);
                } else {
                    console.log("Tables created successfully.");
                    insertData();
                }
            });
        }
    });
});

function insertData() {
    const insertUserStmt = db.prepare('INSERT INTO users (id, first_name, last_name, email, phone, address, project, group_name, other_info, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
    insertUserStmt.run(uuidv4(), 'Alice', 'Wonderland', 'alice@example.com', '123-456-7890', '123 Main St', 'Project X', 'Group A', 'Some info', 'alice123', 'password123');
    insertUserStmt.run(uuidv4(), 'Bob', 'Builder', 'bob@example.com', '234-567-8901', '456 Oak St', 'Project Y', 'Group B', 'Some info', 'bob123', 'password123');
    insertUserStmt.run(uuidv4(), 'Charlie', 'Chocolate', 'charlie@example.com', '345-678-9012', '789 Pine St', 'Project Z', 'Group C', 'Some info', 'charlie123', 'password123');
    insertUserStmt.finalize();

    const insertClientStmt = db.prepare('INSERT INTO clients (id, first_name, last_name, email, phone, address, project, group_name, other_info, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
    insertClientStmt.run(uuidv4(), 'John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Main St', 'Project A', 'Group 1', 'Additional info');
    insertClientStmt.run(uuidv4(), 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', '456 Oak St', 'Project B', 'Group 2', 'Additional info');
    insertClientStmt.finalize();

    const insertProjectStmt = db.prepare('INSERT INTO projects (id, name, description, created_at, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
    insertProjectStmt.run(uuidv4(), 'Project 1', 'Description for project 1');
    insertProjectStmt.run(uuidv4(), 'Project 2', 'Description for project 2');
    insertProjectStmt.finalize();

    const insertRoleStmt = db.prepare('INSERT INTO roles (id, name, description, created_at, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
    insertRoleStmt.run(uuidv4(), 'Admin', 'Administrator role');
    insertRoleStmt.run(uuidv4(), 'User', 'Regular user role');
    insertRoleStmt.run(uuidv4(), 'Manager', 'Project and group manager role');
    insertRoleStmt.run(uuidv4(), 'Client', 'Client role with access to own information and projects');
    insertRoleStmt.run(uuidv4(), 'Guest', 'Guest role with limited access');
    insertRoleStmt.run(uuidv4(), 'Developer', 'Developer role with access to development tools and resources');
    insertRoleStmt.run(uuidv4(), 'Support', 'Support role responsible for technical assistance');
    insertRoleStmt.run(uuidv4(), 'Auditor', 'Auditor role with read-only access for audit purposes');
    insertRoleStmt.finalize();

    const insertGroupStmt = db.prepare('INSERT INTO groups (id, name, description, created_at, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)');
    insertGroupStmt.run(uuidv4(), 'Group A', 'Description for group A');
    insertGroupStmt.run(uuidv4(), 'Group B', 'Description for group B');
    insertGroupStmt.finalize();

    const insertUserProjectStmt = db.prepare('INSERT INTO user_projects (user_id, project_id, role_id, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)');
    insertUserProjectStmt.run('<UUID1>', '<UUID6>', '<UUID9>');
    insertUserProjectStmt.run('<UUID2>', '<UUID7>', '<UUID9>');
    insertUserProjectStmt.finalize();

    const insertUserGroupStmt = db.prepare('INSERT INTO user_groups (user_id, group_id, role_id, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)');
    insertUserGroupStmt.run('<UUID1>', '<UUID10>', '<UUID9>');
    insertUserGroupStmt.run('<UUID3>', '<UUID11>', '<UUID9>');
    insertUserGroupStmt.finalize((err) => {
        if (err) {
            console.error("Error inserting data:", err);
        } else {
            console.log("Data inserted successfully.");
        }
        db.close();
    });
}
