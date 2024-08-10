// routes/dailyLevelIncomeRoutes.js
const express = require('express');
const router = express.Router();
const dailyLevelIncomeController = require('../controllers/dailyLevelIncomeController');

router.post('/', dailyLevelIncomeController.calculateDailyLevelIncome);

module.exports = router;
