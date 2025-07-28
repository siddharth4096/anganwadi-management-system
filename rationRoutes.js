const express = require('express');
const rationController = require('../controllers/rationController');

const router = express.Router();

// Add ration distribution data
router.post('/add', rationController.addRation);

// Fetch all ration distribution data
router.get('/all', rationController.getAllRations);

// Fetch ration distribution data by centre ID
router.get('/centre/:centreId', rationController.getRationsByCentre);

module.exports = router;