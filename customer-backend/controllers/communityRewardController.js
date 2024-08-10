const { CommunityReward } = require('../models/CommunityReward');

// Function to add a community reward
const addCommunityReward = async (req, res) => {
  try {
    const reward = await CommunityReward.create(req.body);
    res.status(201).json(reward);
  } catch (error) {
    res.status(500).json({ message: 'Error adding community reward', error });
  }
};

// Function to get all community rewards
const getCommunityRewards = async (req, res) => {
  try {
    const rewards = await CommunityReward.findAll();
    res.status(200).json(rewards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching community rewards', error });
  }
};

module.exports = {
  addCommunityReward,
  getCommunityRewards,
};
