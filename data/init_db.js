const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const dbPath = path.resolve(__dirname, '..', process.env.DB_PATH || 'mydatabase.db');
const createTableSql = fs.readFileSync(path.resolve(__dirname, 'create_table.sql'), 'utf8');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.exec("DROP TABLE IF EXISTS users; DROP TABLE IF EXISTS clients;", (err) => {
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
    insertClientStmt.finalize((err) => {
        if (err) {
            console.error("Error inserting data:", err);
        } else {
            console.log("Data inserted successfully.");
        }
        db.close();
    });
}
