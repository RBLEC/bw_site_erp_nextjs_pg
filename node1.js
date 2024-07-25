// init_db.js

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('mydatabase.db');

const createTableSql = fs.readFileSync('create_table.sql', 'utf8');
const insertDataSql = fs.readFileSync('insert_data.sql', 'utf8');

db.serialize(() => {
    db.exec(createTableSql, (err) => {
        if (err) {
            console.error("Error creating table:", err);
        } else {
            console.log("Table created successfully.");
            db.exec(insertDataSql, (err) => {
                if (err) {
                    console.error("Error inserting data:", err);
                } else {
                    console.log("Data inserted successfully.");
                }
                db.close();
            });
        }
    });
});
