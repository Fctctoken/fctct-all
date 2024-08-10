// src/IntroducerReward.js
import React, { useState } from 'react';
import './IntroducerReward.css';

const IntroducerReward = () => {
  const [totalIntroducerReward, setTotalIntroducerReward] = useState(5000); // Example total reward
  const [isTransferred, setIsTransferred] = useState(false);

  const handleTransfer = () => {
    // Transfer logic here (e.g., API call to transfer reward to wallet)
    setIsTransferred(true);
  };

  return (
    <div className="introducer-reward-container">
      <h1 className="title">Introducer Reward</h1>
      <p><strong>Total Introducer Reward:</strong> {totalIntroducerReward} FCTC</p>
      <button
        className="transfer-button"
        onClick={handleTransfer}
        disabled={isTransferred}
      >
        {isTransferred ? 'Transferred' : 'Transfer to Wallet'}
      </button>
    </div>
  );
};

export default IntroducerReward;
