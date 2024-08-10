const express = require('express');
const router = express.Router();
const stakingController = require('../controllers/stakingController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { check } = require('express-validator');

// Get all staking plans
router.get('/plans', authMiddleware, stakingController.getStakingPlans);

// Create a new staking investment
router.post(
  '/create',
  [
    authMiddleware,
    check('userId').isInt().withMessage('User ID must be an integer'),
    check('stakingPlanId').isInt().withMessage('Staking Plan ID must be an integer'),
    check('amount').isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
    validationMiddleware
  ],
  stakingController.createStaking
);

// Get all staking investments for a user
router.get('/my-staking/:userId', authMiddleware, stakingController.getUserStaking);

// Approve a staking investment (Admin only)
router.post('/approve', authMiddleware, stakingController.approveStaking);

// Get staking data
router.get('/', authMiddleware, stakingController.getStakingData);

// Get daily staking bonus for a user
router.get('/daily-bonus/:userId', authMiddleware, stakingController.getDailyStakingBonus);

// Get total staking bonus for a user
router.get('/total-bonus/:userId', authMiddleware, stakingController.getTotalStakingBonus);

module.exports = router;
