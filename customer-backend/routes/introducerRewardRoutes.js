const express = require('express');
const router = express.Router();
const introducerRewardController = require('../controllers/introducerRewardController');

// Ensure that the controller functions are properly defined and imported
router.get('/daily', introducerRewardController.getDailyIntroducerReward);

module.exports = router;
