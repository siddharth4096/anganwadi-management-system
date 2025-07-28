const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

// Submit a supervisor report
router.post('/submit', reportController.submitReport);

// Fetch all supervisor reports
router.get('/all', reportController.getAllReports);

// Fetch reports by supervisor ID
router.get('/supervisor/:supervisorId', reportController.getReportsBySupervisor);

// Fetch reports by centre ID
router.get('/centre/:centreId', reportController.getReportsByCentre);

module.exports = router;