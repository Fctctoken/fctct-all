import React, { useState, useEffect } from 'react';
import './TotalEarningsDashboard.css'; // Import the CSS file

const TotalEarningsDashboard = ({ registrationDate }) => {
  const [totalEarnings, setTotalEarnings] = useState({
    stakingBonus: 0,
    introducerReward: 0,
    communityReward: 0,
  });

  // Function to generate a random earnings amount
  const getRandomEarnings = () => {
    return parseFloat((Math.random() * 100).toFixed(2));
  };

  // Function to calculate total earnings from the registration date to the current date
  const calculateTotalEarnings = () => {
    let currentDate = new Date();
    let startDate = new Date(registrationDate);
    let cumulativeEarnings = {
      stakingBonus: 0,
      introducerReward: 0,
      communityReward: 0,
    };

    while (startDate <= currentDate) {
      cumulativeEarnings.stakingBonus += getRandomEarnings();
      cumulativeEarnings.introducerReward += getRandomEarnings();
      cumulativeEarnings.communityReward += getRandomEarnings();
      startDate.setDate(startDate.getDate() + 1);
    }

    setTotalEarnings(cumulativeEarnings);
  };

  // Automatically calculate total earnings when the component mounts
  useEffect(() => {
    calculateTotalEarnings();
  }, [registrationDate, calculateTotalEarnings]);

  const calculateGrandTotal = () => {
    return totalEarnings.stakingBonus + totalEarnings.introducerReward + totalEarnings.communityReward;
  };

  return (
    <div className="container">
      <h1>Total Earnings</h1>
      <div className="earningsSummary">
        <p>Daily Staking Bonus: ${totalEarnings.stakingBonus.toFixed(2)}</p>
        <p>Daily Introducer Reward: ${totalEarnings.introducerReward.toFixed(2)}</p>
        <p>Daily Community Reward: ${totalEarnings.communityReward.toFixed(2)}</p>
        <hr />
        <p className="total">Total Earned: ${calculateGrandTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TotalEarningsDashboard;
