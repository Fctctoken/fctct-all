const { StakingPlan } = require('../models/StakingPlan');

// Get all staking plans
exports.getStakingPlans = async (req, res) => {
  try {
    const plans = await StakingPlan.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staking plans', error });
  }
};
