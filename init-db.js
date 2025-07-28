const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '014323', // Replace with your MySQL password
  multipleStatements: true, // Allow multiple SQL statements
});

const sqlFile = path.join(__dirname, 'database', 'schema.sql');
const sql = fs.readFileSync(sqlFile, 'utf8');

db.query(sql, (err) => {
  if (err) {
    console.error('Error executing SQL file:', err);
  } else {
    console.log('Database initialized successfully');
  }
  db.end();
});