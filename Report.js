const db = require('../config/db');

const Report = {
  submit: (supervisorId, centreId, report) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO supervisor_reports (supervisor_id, centre_id, report) VALUES (?, ?, ?)';
      db.query(query, [supervisorId, centreId, report], (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM supervisor_reports';
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
  getBySupervisor: (supervisorId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM supervisor_reports WHERE supervisor_id = ?';
      db.query(query, [supervisorId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
  getByCentre: (centreId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM supervisor_reports WHERE centre_id = ?';
      db.query(query, [centreId], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },
};

module.exports = Report;