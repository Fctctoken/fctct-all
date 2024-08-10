import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faCoins,
  faSignOutAlt,
  faUser,
  faWallet,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="sidebar">
      <div className="logo">DASHBOARD</div>
      <ul className="navigation">
        <li>
          <a className="dropdown-trigger">
            <FontAwesomeIcon icon={faUser} /> Profile
          </a>
          <div className="dropdown-content">
            <a onClick={() => navigate('/userinfo')}>Info</a>
            <a onClick={() => navigate('/KycForm')}>KYC</a>
            <a onClick={() => navigate('/ChangePassword')}>Change Password</a>
          </div>
        </li>
        <li>
          <a className="dropdown-trigger">
            <FontAwesomeIcon icon={faCoins} /> Staking
          </a>
          <div className="dropdown-content">
            <a onClick={() => navigate('/stakingBonus')}>Staking Bonus</a>
            <a onClick={() => navigate('/StackedCoins')}>Staked Coins</a>
          </div>
        </li>
        <li>
          <a className="dropdown-trigger">
            <FontAwesomeIcon icon={faWallet} /> Wallet
          </a>
          <div className="dropdown-content">
            <a onClick={() => navigate('/withdraw')}>Withdraw</a>
            <a onClick={() => navigate('/Deposit')}>Deposit</a>
          </div>
        </li>
        <li>
          <a className="dropdown-trigger">
            <FontAwesomeIcon icon={faUsers} /> Team
          </a>
          <div className="dropdown-content">
            <a onClick={() => navigate('/ReferralProgram')}>Referral Program</a>
            <a onClick={() => navigate('/LevelIncomePage')}>Level Income</a>
          </div>
        </li>
        <li>
          <a className="dropdown-trigger">
            <FontAwesomeIcon icon={faChartLine} /> Report
          </a>
          <div className="dropdown-content">
            <a onClick={() => navigate('/Reports')}>Reports</a>
          </div>
        </li>
        <li className="logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
