const { DailyCommunityReward } = require('../models/DailyCommunityReward');

// Function to store daily community reward
const storeDailyCommunityReward = async (req, res) => {
  try {
    const { userId, earnings } = req.body;

    await DailyCommunityReward.create({
      userId,
      earnings,
      date: new Date().toISOString().split('T')[0]
    });

    res.json({ message: 'Daily community reward stored.', earnings });
  } catch (error) {
    res.status(500).json({ message: 'Error storing daily community reward', error });
  }
};

module.exports = { storeDailyCommunityReward };
