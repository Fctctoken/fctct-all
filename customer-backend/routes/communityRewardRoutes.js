const express = require('express');
const router = express.Router();
const communityRewardController = require('../controllers/communityRewardController');

router.post('/add', communityRewardController.addCommunityReward);
router.get('/list', communityRewardController.getCommunityRewards);

module.exports = router;
