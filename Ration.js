const db = require('../config/db');

const Ration = {
  add: (centreId, childrenPresent, rationDistributed) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO ration_distribution (centre_id, children_present, ration_distributed) VALUES (?, ?, ?)';
      db.query(query, [centreId, childrenPresent, rationDistributed], (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM ration_distribution';
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
  getByCentre: (centreId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM ration_distribution WHERE centre_id = ?';
      db.query(query, [centreId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
};

module.exports = Ration;