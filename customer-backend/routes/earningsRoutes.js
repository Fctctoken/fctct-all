const express = require('express');
const router = express.Router();
const earningsController = require('../controllers/earningsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get daily earnings for a specific user
router.get('/:userId/daily', authMiddleware, earningsController.getDailyEarnings);

// Get total earnings for a specific user
router.get('/:userId/total', authMiddleware, earningsController.getTotalEarnings);

module.exports = router;
