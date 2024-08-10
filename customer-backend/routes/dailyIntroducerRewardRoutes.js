const express = require('express');
const router = express.Router();
const dailyIntroducerRewardController = require('../controllers/dailyIntroducerRewardController');

router.post('/', dailyIntroducerRewardController.calculateDailyIntroducerReward);

module.exports = router;
