import React, { useEffect, useState } from 'react';
import './StakingPlans.css';

const StakingPlans = () => {
  const [stakingPlans, setStakingPlans] = useState([]);

  useEffect(() => {
    const fetchStakingPlans = async () => {
      try {
        const response = await fetch('/staking-plans/plans');
        if (!response.ok) {
          throw new Error('Failed to fetch staking plans');
        }

        const plans = await response.json();
        setStakingPlans(plans);
      } catch (error) {
        console.error('Error loading staking plans:', error);
      }
    };

    fetchStakingPlans();
  }, []);

  return (
    <div className="staking-plans-container">
      <h1>FCTC Token Staking Plans</h1>
      <div className="plans">
        {stakingPlans.map((plan) => (
          <div key={plan.id} className="plan">
            <h2>Plan {plan.id}</h2>
            <p>{plan.days} Days Staking</p>
            <p>Staking Bonus {plan.bonusPercentage}% Daily</p>
            <button className="stake-button">Stake Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakingPlans;
