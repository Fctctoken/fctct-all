// src/LevelIncomePage.js
import React from 'react';
import './LevelIncomePage.css';

const LevelIncomePage = ({ currentLevel, levelEarnings, onTransfer }) => {
  const levelDetails = [
    { level: 1, percentage: 70, requirement: "2 Direct Referrals", minStaked: 0 },
    { level: 2, percentage: 35, requirement: "3 Direct Referrals", minStaked: 30000 },
    { level: 3, percentage: 17, requirement: "4 Direct Referrals", minStaked: 50000 },
    { level: 4, percentage: 9,  requirement: "5 Direct Referrals", minStaked: 75000 },
    { level: 5, percentage: 6,  requirement: "6 Direct Referrals", minStaked: 150000 },
    { level: 6, percentage: 3,  requirement: "6 Direct Referrals", minStaked: 300000 },
  ];

  const currentLevelDetails = levelDetails.find(detail => detail.level === currentLevel);

  if (!currentLevelDetails) {
    return (
      <div className="level-income-container">
        <h1>Level Income</h1>
        <div className="level-details">
          <h2>Current Level: {currentLevel}</h2>
          <p>Invalid level. Please check your level status.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="level-income-container">
      <h1>Level Income</h1>
      <div className="level-details">
        <h2>Current Level: {currentLevel}</h2>
        <p><strong>Percentage Earned:</strong> {currentLevelDetails.percentage}%</p>
        <p><strong>Requirements:</strong> {currentLevelDetails.requirement}</p>
        <p><strong>Minimum Staked Coins:</strong> {currentLevelDetails.minStaked} FCTC</p>
        <p><strong>Total Earnings:</strong> {levelEarnings} FCTC</p>
        <button className="transfer-button" onClick={onTransfer}>Transfer to FCTC Wallet</button>
      </div>
    </div>
  );
};

export default LevelIncomePage;
