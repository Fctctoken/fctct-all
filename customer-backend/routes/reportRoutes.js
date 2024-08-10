const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routes to get reports for the user
router.get('/deposit/:userId', authMiddleware, reportController.getDepositHistory);
router.get('/withdraw/:userId', authMiddleware, reportController.getWithdrawHistory);
router.get('/staking/:userId', authMiddleware, reportController.getStakingRecords);
router.get('/level-income/:userId', authMiddleware, reportController.getLevelIncome);
router.get('/referral-income/:userId', authMiddleware, reportController.getReferralIncome);

module.exports = router;
