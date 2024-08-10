import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("FCTC");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Fetch the current balance when the component mounts
    const fetchBalance = async () => {
      try {
        const response = await axios.get("/api/wallet/balance", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const handleWithdraw = async (e) => {
    e.preventDefault();

    // Validate withdrawal conditions
    if (amount < 2000) {
      alert("Minimum withdrawal is 2000 FCTC");
      return;
    }

    try {
      const response = await axios.post("/api/withdraw", {
        amount,
        currency,
        address,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data.success) {
        alert("Withdrawal request sent to admin for approval.");
      } else {
        alert("Withdrawal request rejected: " + response.data.message);
      }
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <img
          src={require("./fctc.png")}
          alt="Logo"
          className="logo"
          width="120"
          height="100px"
        />
      </header>
      <div className="withdrawal-container">
        <h1 className="title">Withdraw FCTC</h1>
        <p className="balance">Current Balance: {balance} FCTC</p>
        <p className="minimum-withdraw">Minimum withdraw: 2000 FCTC</p>
        <form className="withdrawal-form" onSubmit={handleWithdraw}>
          <label>
            Amount (FCTC):
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </label>
          <label>
            Currency:
            <select
              name="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USDT">USDT</option>
              <option value="FCTC">FCTC</option>
              {/* Add more options if needed */}
            </select>
          </label>
          <label>
            Withdrawal Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter withdrawal address"
              required
            />
          </label>
          <button type="submit" className="confirm-button">
            Confirm Withdrawal
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
