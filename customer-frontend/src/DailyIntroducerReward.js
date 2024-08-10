// src/DailyIntroducerReward.js
import React from 'react';
import './DailyIntroducerReward.css';

const DailyIntroducerReward = () => {
  // Mock data for demonstration
  const dailyRewards = [
    { date: '08/09/2024', amount: 250 },
    { date: '08/10/2024', amount: 200 },
    { date: '08/11/2024', amount: 300 },
  ];

  return (
    <div className="daily-introducer-reward-container">
      <h1 className="title">Daily Introducer Reward</h1>
      <table className="reward-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Date</th>
            <th>Reward (FCTC)</th>
          </tr>
        </thead>
        <tbody>
          {dailyRewards.map((reward, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reward.date}</td>
              <td>{reward.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyIntroducerReward;
