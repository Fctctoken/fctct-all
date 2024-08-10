const { IntroducerReward } = require('../models/IntroducerReward');

// Function to get daily introducer rewards
exports.getDailyIntroducerReward = async (req, res) => {
  try {
    const rewards = await IntroducerReward.findAll();
    res.status(200).json(rewards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching introducer rewards', error });
  }
};
