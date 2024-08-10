import React, { useState, useEffect } from 'react';
import './DailyEarnings.css'; // Import the CSS file

const DailyEarnings = ({ registrationDate }) => {
  const [earnings, setEarnings] = useState([]);

  // Function to generate a random earnings amount
  const getRandomEarnings = () => {
    return (Math.random() * 100).toFixed(2);
  };

  // Function to generate earnings from the registration date to the current date
  const generateEarningsFromRegistration = () => {
    const earningsList = [];
    let currentDate = new Date();
    let startDate = new Date(registrationDate);

    while (startDate <= currentDate) {
      earningsList.push({
        date: startDate.toISOString().split('T')[0],
        stakingBonus: parseFloat(getRandomEarnings()),
        introducerReward: parseFloat(getRandomEarnings()),
        communityReward: parseFloat(getRandomEarnings()),
      });
      startDate.setDate(startDate.getDate() + 1);
    }

    setEarnings(earningsList);
  };

  // Automatically generate earnings from the registration date when the component mounts
  useEffect(() => {
    generateEarningsFromRegistration();
  }, [registrationDate]);

  const calculateTotal = (earning) => {
    return earning.stakingBonus + earning.introducerReward + earning.communityReward;
  };

  return (
    <div className="container">
      <h1>Daily Earnings</h1>
      <table className="earningsTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Daily Staking Bonus</th>
            <th>Daily Introducer Reward</th>
            <th>Daily Community Reward</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {earnings.map((earning, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{earning.date}</td>
              <td>${earning.stakingBonus.toFixed(2)}</td>
              <td>${earning.introducerReward.toFixed(2)}</td>
              <td>${earning.communityReward.toFixed(2)}</td>
              <td>${calculateTotal(earning).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyEarnings;
