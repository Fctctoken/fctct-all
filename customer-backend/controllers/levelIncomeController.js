const { LevelIncome } = require('../models/LevelIncome');

exports.getLevelIncomeData = async (req, res) => {
  try {
    const incomeData = await LevelIncome.findAll();
    res.status(200).json(incomeData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching level income data', error });
  }
};
