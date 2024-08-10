const express = require('express');
const router = express.Router();
const dailyStakingBonusController = require('../controllers/dailyStakingBonusController.js');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { check } = require('express-validator');

// Get daily staking bonus for a specific user
router.get('/:userId', authMiddleware, dailyStakingBonusController.getDailyStakingBonus);

// Create or update daily staking bonus
router.post(
  '/',
  [
    authMiddleware,
    check('userId').isInt().withMessage('User ID must be an integer'),
    check('bonusAmount').isFloat().withMessage('Bonus amount must be a float'),
    validationMiddleware
  ],
  dailyStakingBonusController.createDailyStakingBonus
);

module.exports = router;
