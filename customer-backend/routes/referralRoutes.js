const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralcontroller');
const authMiddleware = require('../middlewares/authMiddleware');

// Get referral link
router.get('/link/:userId', authMiddleware, referralController.getReferralLink);

// Get referral data
router.get('/data/:userId', authMiddleware, referralController.getReferralData);

module.exports = router;
