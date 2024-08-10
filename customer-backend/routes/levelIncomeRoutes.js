const express = require('express');
const router = express.Router();
const levelIncomeController = require('../controllers/levelIncomeController');

router.get('/', levelIncomeController.getLevelIncomeData);

module.exports = router;
