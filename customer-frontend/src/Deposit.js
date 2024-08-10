import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Deposit.css';

const Deposit = () => {
  const location = useLocation();
  const plan = location.state?.plan || {};
  const [depositAmount, setDepositAmount] = useState('');
  const [currency, setCurrency] = useState('usdt');
  const [username, setUsername] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setScreenshot(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmDeposit = async () => {
    if (!username || !depositAmount || !currency || !transactionHash || !screenshot) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('depositAmount', depositAmount);
    formData.append('currency', currency);
    formData.append('transactionHash', transactionHash);
    formData.append('screenshot', screenshot);
    formData.append('stakingPlanId', plan.id);

    try {
      const response = await fetch('/wallet/deposit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Deposit failed');
      }

      const data = await response.json();
      alert('Deposit details submitted successfully.');
      window.location.href = '/deposit-success';
    } catch (error) {
      console.error('Error during deposit:', error);
      alert('Error during deposit submission');
    }
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="deposit-container">
      <header>
        <div className="logo">
          <img src="/path/to/fctc.png" alt="Logo" />
        </div>
      </header>

      <button className="back-button" onClick={goBack}>Back</button>

      <main>
        <h1>Deposit FCTC</h1>
        <div className="deposit-details">
          <div className="input-group">
            <label htmlFor="deposit-amount">Amount:</label>
            <input
              type="number"
              id="deposit-amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className="input-group">
            <label htmlFor="currency">Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="usdt">USDT</option>
              <option value="fctc">FCTC</option>
              <option value="bnb">BNB</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="staking-plan">Staking Plan:</label>
            <input
              type="text"
              id="staking-plan"
              value={plan.days ? `${plan.days} Days Staking` : ''}
              readOnly
            />
          </div>
          <div className="input-group">
            <label htmlFor="staking-bonus">Staking Bonus:</label>
            <input
              type="text"
              id="staking-bonus"
              value={plan.bonusPercentage ? `${plan.bonusPercentage}% Daily` : ''}
              readOnly
            />
          </div>
          <div className="qr-code-container">
            <img id="qr-code" src={require("./QR.jpeg")} alt="QR Code" className="logo" width="120" height="100px" />
          </div>
          <div className="wallet-info">
            <p><strong>0x4Aa9B91D7BB8a6771bA579260d37981Eddee7217</strong></p>
            <button id="copy-address"><i className="fas fa-copy"></i> Copy Address</button>
          </div>
          <div className="user-info">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <label htmlFor="transaction-hash">Transaction Hash:</label>
            <input
              type="text"
              id="transaction-hash"
              value={transactionHash}
              onChange={(e) => setTransactionHash(e.target.value)}
              placeholder="Enter transaction hash"
            />
          </div>
          <div className="upload-section">
            <label htmlFor="transaction-screenshot">Upload Screenshot:</label>
            <input
              type="file"
              id="transaction-screenshot"
              accept="image/*"
              onChange={handleFileChange}
            />
            {previewUrl && (
              <div id="preview-container">
                <img id="preview" src={previewUrl} alt="Screenshot Preview" />
              </div>
            )}
          </div>
          <button id="confirm-deposit" onClick={handleConfirmDeposit}>Confirm Deposit</button>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 FCTC Token. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Deposit;
