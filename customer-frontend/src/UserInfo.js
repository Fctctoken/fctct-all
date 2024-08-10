import React, { useEffect, useState } from 'react';
import './userinfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    userId: 'Loading...',
    fullName: 'Loading...',
    email: 'Loading...',
    joinedDate: 'Loading...'
  });

  // Replace this useEffect with actual data fetching logic
  useEffect(() => {
    // Simulating fetching data
    const fetchedUser = {
      userId: '123456789',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      joinedDate: '2021-01-01'
    };
    setUser(fetchedUser);
  }, []);

  return (
    <div className="user-info-container">
      <header>
        <div className="logo">
        <img src={require("./fctc.png")} alt="Logo" className="logo" width="100"height="80px" />
        </div>
        <h1>User Information</h1>
      </header>
      <main>
        <div className="user-details">
          <h2>Profile</h2>
          <p><strong>User ID:</strong> <span>{user.userId}</span></p>
          <p><strong>Full Name:</strong> <span>{user.fullName}</span></p>
          <p><strong>Email:</strong> <span>{user.email}</span></p>
          <p><strong>Joined Date:</strong> <span>{user.joinedDate}</span></p>
        </div>
        <div className="crypto-details">
          <h2>Cryptocurrency Details</h2>
          <p><strong>Total Balance:</strong> 1.234 BTC</p>
          <p><strong>Staked Amount:</strong> 0.567 BTC</p>
          <p><strong>Referral Income:</strong> 0.123 BTC</p>
          <p><strong>Recent Transactions:</strong></p>
          <ul>
            <li>Transaction 1 - 0.01 BTC - <span className="transaction-type">Deposit</span></li>
            <li>Transaction 2 - 0.005 BTC - <span className="transaction-type">Withdrawal</span></li>
            <li>Transaction 3 - 0.02 BTC - <span className="transaction-type">Staking</span></li>
          </ul>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 FCTC Token. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserInfo;
