const express = require('express');
const router = express.Router();
const dailyCommunityRewardController = require('../controllers/dailyCommunityRewardController');

router.post('/add', dailyCommunityRewardController.storeDailyCommunityReward);

module.exports = router;
