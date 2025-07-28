const db = require('../config/db');

const User = {
  create: (name, role, username, password, descriptor) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users (name, role, username, password, descriptor) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [name, role, username, password, JSON.stringify(descriptor)], (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      });
    });
  },
  findByUsername: (username) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE username = ?';
      db.query(query, [username], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });
  },
};

module.exports = User;