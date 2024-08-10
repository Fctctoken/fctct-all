// controllers/dailyLevelIncomeController.js
const { DailyLevelIncome } = require('../models/DailyLevelIncome');

const calculateDailyLevelIncome = async (req, res) => {
  try {
    const { userId, level, stakingBonus } = req.body;
    const levelPercentages = [0.7, 0.35, 0.17, 0.09, 0.06, 0.03]; // Level percentages
    const income = (stakingBonus * levelPercentages[level - 1]).toFixed(2);

    await DailyLevelIncome.create({
      userId,
      level,
      income,
      date: new Date().toISOString().split('T')[0]
    });

    res.json({ message: 'Daily level income calculated and stored.', income });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating daily level income', error });
  }
};

module.exports = { calculateDailyLevelIncome };
