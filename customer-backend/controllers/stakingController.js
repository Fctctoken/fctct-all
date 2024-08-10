const { Staking } = require('../models/Staking');
const { StakingPlan } = require('../models/StakingPlan');
const { Op } = require('sequelize');

// Existing logic for calculating staking bonus percentages
const stakingPlans = {
  200: 0.10,
  400: 0.20,
  800: 0.25,
  1200: 0.30,
};

// Retrieve all staking plans
exports.getStakingPlans = async (req, res) => {
  try {
    const plans = await StakingPlan.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staking plans', error });
  }
};

// Create a new staking investment
exports.createStaking = async (req, res) => {
  try {
    const { userId, stakingPlanId, amount } = req.body;

    const plan = await StakingPlan.findByPk(stakingPlanId);
    if (!plan) {
      return res.status(404).json({ message: 'Staking plan not found' });
    }

    const newStaking = await Staking.create({
      userId,
      stakingPlanId,
      amount,
      status: 'Pending'
    });

    res.status(201).json({ message: 'Staking created successfully', newStaking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating staking', error });
  }
};

// Retrieve all staking investments for a user
exports.getUserStaking = async (req, res) => {
  try {
    const { userId } = req.params;

    const userStakings = await Staking.findAll({
      where: { userId },
      include: {
        model: StakingPlan,
        attributes: ['days', 'bonusPercentage']
      }
    });

    if (userStakings.length === 0) {
      return res.status(404).json({ message: 'No staking investments found for this user' });
    }

    res.status(200).json(userStakings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user staking investments', error });
  }
};

// Approve a staking investment (Admin)
exports.approveStaking = async (req, res) => {
  try {
    const { stakingId } = req.body;
    const staking = await Staking.findByPk(stakingId, {
      include: StakingPlan
    });

    if (!staking) {
      return res.status(404).json({ message: 'Staking investment not found' });
    }

    staking.status = 'Approved';
    staking.startDate = new Date();
    staking.endDate = new Date(staking.startDate);
    staking.endDate.setDate(staking.endDate.getDate() + staking.StakingPlan.days);

    await staking.save();
    res.status(200).json({ message: 'Staking investment approved', staking });
  } catch (error) {
    res.status(500).json({ message: 'Error approving staking investment', error });
  }
};

// Retrieve all staking data
exports.getStakingData = async (req, res) => {
  try {
    const stakingData = await Staking.findAll({
      include: StakingPlan
    });
    res.status(200).json(stakingData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staking data', error });
  }
};

// Get daily staking bonus for a user
exports.getDailyStakingBonus = async (req, res) => {
  try {
    const { userId } = req.params;
    const today = new Date();

    const stakings = await Staking.findAll({
      where: {
        userId,
        startDate: {
          [Op.lte]: today
        },
        endDate: {
          [Op.gte]: today
        }
      },
      include: StakingPlan
    });

    const dailyBonus = stakings.reduce((total, staking) => {
      const bonus = (staking.amount / 100) * staking.StakingPlan.bonusPercentage;
      return total + bonus;
    }, 0);

    res.status(200).json({ dailyBonus });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching daily staking bonus', error });
  }
};

// Get total staking bonus for a user
exports.getTotalStakingBonus = async (req, res) => {
  try {
    const { userId } = req.params;

    const stakings = await Staking.findAll({
      where: {
        userId
      },
      include: StakingPlan
    });

    const totalBonus = stakings.reduce((total, staking) => {
      const bonus = (staking.amount / 100) * staking.StakingPlan.bonusPercentage;
      const daysStaked = Math.floor((new Date() - new Date(staking.startDate)) / (1000 * 60 * 60 * 24));
      const actualDays = Math.min(daysStaked, staking.StakingPlan.days);
      return total + (bonus * actualDays);
    }, 0);

    res.status(200).json({ totalBonus });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total staking bonus', error });
  }
};
