import React from 'react';
import './ReferralProgram.css';

const ReferralProgram = () => {
  return (
    <div className="referral-program">
      <div className="header">
        <h1>Referral Program</h1>
      </div>
      <div className="referral-link-section">
        <label>Your Referral Link</label>
        <div className="referral-link">
          <input type="text" value="https://example.com/referral/FCT00001" readOnly />
          <button>Copy Link</button>
        </div>
      </div>
      <div className="user-data">
        <h2>User Data</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Left Business</th>
              <th>Right Business</th>
              <th>Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-07-23</td>
              <td>FCT00001</td>
              <td>John Doe</td>
              <td>$1000</td>
              <td>$1500</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>2024-07-22</td>
              <td>FCT00002</td>
              <td>Jane Smith</td>
              <td>$500</td>
              <td>$800</td>
              <td>Standard</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralProgram;
