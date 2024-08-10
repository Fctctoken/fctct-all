const { Level } = require('../models/level');

exports.getLevelData = async (req, res) => {
  try {
    const { userId } = req.params;
    const levels = await Level.findAll({ where: { userId } });

    res.json(levels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching level data', error });
  }
};

exports.addLevelIncome = async (req, res) => {
  try {
    const { userId, level, income } = req.body;

    let levelData = await Level.findOne({ where: { userId, level } });

    if (!levelData) {
      levelData = await Level.create({ userId, level, totalIncome: income });
    } else {
      levelData.totalIncome += income;
      await levelData.save();
    }

    res.status(201).json({ message: 'Level income added successfully', levelData });
  } catch (error) {
    res.status(500).json({ message: 'Error adding level income', error });
  }
};
