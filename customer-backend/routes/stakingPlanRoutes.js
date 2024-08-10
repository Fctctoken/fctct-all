const express = require('express');
const router = express.Router();
const stakingPlanController = require('../controllers/stakingplancontroller');

router.get('/plans', stakingPlanController.getStakingPlans);

module.exports = router;
