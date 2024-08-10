import React, { useState, useEffect } from 'react';
import './DailyStakingBonus.css';

const DailyStakingBonus = () => {
  const [dailyBonuses, setDailyBonuses] = useState([]);

  const fetchDailyStakingBonus = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bonuses = Array.from({ length: 10 }, (_, index) => {
          const bonusValue = (Math.random() * 100).toFixed(2);
          return {
            sno: index + 1,
            date: `8/${10 + index}/2024`,
            stakingBonus: parseFloat(bonusValue),
          };
        });
        resolve(bonuses);
      }, 1000);
    });
  };

  const updateBonuses = async () => {
    try {
      const bonuses = await fetchDailyStakingBonus();
      setDailyBonuses(bonuses);
    } catch (error) {
      console.error('Error loading bonuses:', error);
    }
  };

  useEffect(() => {
    updateBonuses();
  }, [updateBonuses]);

  const calculateTotalEarned = () => {
    return dailyBonuses.reduce((acc, bonus) => acc + bonus.stakingBonus, 0).toFixed(2);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Daily Staking Bonus</h1>
        <p><strong>Total Earnings Till Date:</strong> {calculateTotalEarned()} FCTC</p>
      </div>
      <table className="bonus-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Date</th>
            <th>Staking Bonus (FCTC)</th>
          </tr>
        </thead>
        <tbody>
          {dailyBonuses.map((bonus) => (
            <tr key={bonus.sno}>
              <td>{bonus.sno}</td>
              <td>{bonus.date}</td>
              <td>{bonus.stakingBonus} FCTC</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyStakingBonus;
