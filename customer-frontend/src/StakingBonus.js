import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StakingBonus.css';

const StakingBonus = () => {
  const navigate = useNavigate();

  // Mock data for demonstration (You will fetch actual data from the backend)
  const stakedPlans = [
    {
      id: 1,
      userId: 123, // Include userId
      name: '200 Days Plan',
      stakedAmount: 100000,
      dailyBonus: 100,
      totalDays: 200,
      earnedSoFar: 15000, // Example value
    },
    {
      id: 2,
      userId: 123, // Include userId
      name: '400 Days Plan',
      stakedAmount: 100000,
      dailyBonus: 200,
      totalDays: 400,
      earnedSoFar: 60000, // Example value
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(stakedPlans[0]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleWithdraw = async () => {
    try {
      const response = await fetch('/wallet/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: selectedPlan.userId, amount: selectedPlan.earnedSoFar }),
      });

      if (!response.ok) {
        throw new Error('Withdrawal failed');
      }

      const data = await response.json();
      alert('Withdrawal request submitted for approval');
    } catch (error) {
      console.error('Error during withdrawal:', error);
      alert('Error during withdrawal request');
    }
  };

  const toggleHistory = () => {
    if (isHistoryVisible) {
      navigate('/withdraw');
    } else {
      setIsHistoryVisible(true);
    }
  };

  return (
    <div className="staking-bonus-container">
      <h1 className="title">Staking Bonus</h1>

      <div className="staking-plan">
        <h2>Selected Plan: {selectedPlan.name}</h2>
        <p><strong>Staked Amount:</strong> {selectedPlan.stakedAmount} FCTC</p>
        <p><strong>Daily Bonus:</strong> {selectedPlan.dailyBonus} FCTC</p>
        <p><strong>Total Days:</strong> {selectedPlan.totalDays}</p>
        <p><strong>Bonus Earned So Far:</strong> {selectedPlan.earnedSoFar} FCTC</p>
        <button className="withdraw-button" onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className="history-button" onClick={toggleHistory}>
          {isHistoryVisible ? 'Close History' : 'View History'}
        </button>
      </div>

      {isHistoryVisible && (
        <div className="bonus-history">
          <h2>Bonus History</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount (FCTC)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              <tr>
                <td>2024-08-01</td>
                <td>100 FCTC</td>
                <td>Daily bonus from 200 Days Plan</td>
              </tr>
              <tr>
                <td>2024-08-02</td>
                <td>100 FCTC</td>
                <td>Daily bonus from 200 Days Plan</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StakingBonus;
