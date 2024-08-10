const { Earnings } = require('../models/Earnings');

// Function to get daily earnings for a user
const getDailyEarnings = async (req, res) => {
  try {
    const { userId } = req.params;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    const dailyEarnings = await Earnings.findAll({
      where: {
        userId,
        date: today
      }
    });

    const earningsBreakdown = dailyEarnings.reduce((acc, earning) => {
      acc.stakingBonus += earning.stakingBonus;
      acc.introducerReward += earning.introducerReward;
      acc.communityReward += earning.communityReward;
      return acc;
    }, { stakingBonus: 0, introducerReward: 0, communityReward: 0 });

    res.json({ date: today, ...earningsBreakdown });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving daily earnings', error });
  }
};

// Function to get total earnings for a user
const getTotalEarnings = async (req, res) => {
  try {
    const { userId } = req.params;

    const totalEarnings = await Earnings.findAll({
      where: { userId }
    });

    const earningsBreakdown = totalEarnings.reduce((acc, earning) => {
      acc.stakingBonus += earning.stakingBonus;
      acc.introducerReward += earning.introducerReward;
      acc.communityReward += earning.communityReward;
      return acc;
    }, { stakingBonus: 0, introducerReward: 0, communityReward: 0 });

    res.json(earningsBreakdown);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving total earnings', error });
  }
};

module.exports = { getDailyEarnings, getTotalEarnings };
