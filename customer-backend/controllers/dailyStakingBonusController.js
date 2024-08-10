const { DailyStakingBonus } = require('../models/DailyStakingBonus');

exports.getDailyStakingBonus = async (req, res) => {
  try {
    const { userId } = req.params;
    const today = new Date();
    const dailyBonus = await DailyStakingBonus.findOne({
      where: {
        userId,
        date: today.toISOString().split('T')[0]  // Match date only (YYYY-MM-DD)
      }
    });
    if (!dailyBonus) {
      return res.status(404).json({ message: 'No bonus found for today' });
    }
    res.status(200).json(dailyBonus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching daily staking bonus', error });
  }
};

exports.createDailyStakingBonus = async (req, res) => {
  const { userId, bonusAmount } = req.body;
  const today = new Date();
  try {
    const [dailyBonus, created] = await DailyStakingBonus.findOrCreate({
      where: {
        userId,
        date: today.toISOString().split('T')[0]
      },
      defaults: {
        bonusAmount
      }
    });
    if (!created) {
      dailyBonus.bonusAmount = bonusAmount;
      await dailyBonus.save();
    }
    res.status(200).json(dailyBonus);
  } catch (error) {
    res.status(500).json({ message: 'Error creating daily staking bonus', error });
  }
};
