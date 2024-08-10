const { DailyIntroducerReward } = require('../models/DailyIntroducerReward');

// Function to calculate and store daily introducer reward
const calculateDailyIntroducerReward = async (req, res) => {
  try {
    const { userId, stakeAmount } = req.body;
    const reward = (stakeAmount * 0.05).toFixed(2); // 5% of the stake amount

    await DailyIntroducerReward.create({
      userId,
      stakeAmount,
      reward,
      date: new Date().toISOString().split('T')[0]
    });

    res.json({ message: 'Daily introducer reward calculated and stored.', reward });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating daily introducer reward', error });
  }
};

module.exports = { calculateDailyIntroducerReward };
