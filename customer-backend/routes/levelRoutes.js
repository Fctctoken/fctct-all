const express = require('express');
const router = express.Router();
const levelController = require('../controllers/levelController');
const authMiddleware = require('../middlewares/authMiddleware');

// Get level data
router.get('/:userId', authMiddleware, levelController.getLevelData);

// Add level income
router.post('/', authMiddleware, levelController.addLevelIncome);

module.exports = router;
