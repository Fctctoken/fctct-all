const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get referral data for a specific user
router.get('/:userId/referral', authMiddleware, teamController.getReferral);

// Get level data for a specific user
router.get('/:userId/level', authMiddleware, teamController.getLevel);

module.exports = router;
