// src/DailyCommunityReward.js
import React, { useState } from 'react';
import './DailyCommunityReward.css';

const DailyCommunityReward = ({ dailyRewards, onTransfer }) => {
  const [selectedReward, setSelectedReward] = useState(null);

  const handleViewClick = (reward) => {
    setSelectedReward(reward);
  };

  const handleTransferClick = () => {
    onTransfer(selectedReward);
    setSelectedReward(null); // Close the modal after transfer
  };

  return (
    <div className="daily-community-reward-container">
      <h1>Daily Community Reward</h1>
      <table className="reward-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Date</th>
            <th>Level</th>
            <th>Earnings (FCTC)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dailyRewards.map((reward, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reward.date}</td>
              <td>{reward.level}</td>
              <td>{reward.earnings} FCTC</td>
              <td>
                <button 
                  className="view-button" 
                  onClick={() => handleViewClick(reward)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReward && (
        <div className="modal">
          <div className="modal-content">
            <h2>Level {selectedReward.level} Details</h2>
            <p>Date: {selectedReward.date}</p>
            <p>Earnings: {selectedReward.earnings} FCTC</p>
            <button className="transfer-button" onClick={handleTransferClick}>
              Transfer to FCTC Wallet
            </button>
            <button 
              className="close-button" 
              onClick={() => setSelectedReward(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyCommunityReward;
