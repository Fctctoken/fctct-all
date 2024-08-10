import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine, faCoins, faDollarSign, faFileInvoiceDollar, faSignOutAlt,
  faUser, faUserCheck, faUserPlus, faUsers, faUserTimes, faWallet
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const navigationHandlers = {
    handleWalletButtonClick: () => navigate('/withdraw'),
    handleStackedCoinsClick: () => navigate('/StackedCoins'),
    handleStakingBonusClick: () => navigate('/StakingBonus'),
    handleDailyStakingBonusClick: () => navigate('/dailyStakingBonus'),
    handleIntroducerRewardClick: () => navigate('/IntroducerReward'),
    handleDailyIntroducerRewardClick: () => navigate('/DailyIntroducerReward'),
    handleLevelIncomepageClick: () => navigate('/LevelIncomepage'),
    handleDailyCommunityRewardClick: () => navigate('/LevelIncomepage'),
    handleDailyEarningsClick: () => navigate('/DailyEarnings'),
    handleTotalEarningsDashboardClick: () => navigate('/TotalEarningsDashboard'),
    handleComingSoonClick: () => navigate('/ComingSoon'),
    handleProfileInfoClick: () => navigate('/userinfo'),
    handleKycFormClick: () => navigate('/KycForm'),
    handleChangePasswordClick: () => navigate('/ChangePassword'),
    handleDepositClick: () => navigate('/Deposit'),
    handleReferralProgramClick: () => navigate('/ReferralProgram'),
    handleReportsClick: () => navigate('/Reports'),
    handleLogin: () => navigate('/Login')
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing tokens)
    navigate('/login');
  };

  return (
    <div className="main">
      <nav className="sidebar">
        <div className="logo">DASHBOARD</div>
        <ul className="navigation">
          <li className="profile">
            <FontAwesomeIcon icon={faUser} /> Profile
            <div className="dropdown-content">
              <a onClick={navigationHandlers.handleProfileInfoClick}>Info</a>
              <a onClick={navigationHandlers.handleKycFormClick}>KYC</a>
              <a onClick={navigationHandlers.handleChangePasswordClick}>Change Password</a>
            </div>
          </li>
          <li className="staking">
            <FontAwesomeIcon icon={faCoins} /> Staking
            <div className="dropdown-content">
              <a onClick={navigationHandlers.handleStakingBonusClick}>Staking</a>
              <p>*My Staking*</p>
            </div>
          </li>
          <li className="deposit">
            <FontAwesomeIcon icon={faWallet} /> Wallet
            <div className="dropdown-content">
              <a onClick={navigationHandlers.handleWalletButtonClick}>Withdraw</a>
              <a onClick={navigationHandlers.handleDepositClick}>Deposit</a>
            </div>
          </li>
          <li className="team">
            <FontAwesomeIcon icon={faUsers} /> Team
            <div className="dropdown-content">
              <a onClick={navigationHandlers.handleReferralProgramClick}>Referral</a>
              <a onClick={navigationHandlers.handleLevelIncomepageClick}>Level</a>
            </div>
          </li>
          <li className="report">
            <FontAwesomeIcon icon={faChartLine} /> Report
            <div className="dropdown-content">
              <a onClick={navigationHandlers.handleReportsClick}>Reports</a>
            </div>
          </li>
          <li className="logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-id">FCTC</span>
            <span className="user-name">TOKEN</span>
          </div>
          <div className="wallet-info">
            <span className="wallet-balance">W-Wallet - 0.00 USD</span>
          </div>
          <div className="display-mode">
            <button className="dark-mode active"></button>
            <button className="light-mode"></button>
          </div>
        </header>
        <section className="dashboard">
          <div className="card card1">
            <FontAwesomeIcon icon={faUsers} />
            <h2>FCTC WALLET</h2>
            <h3>4000</h3>
            <button id="walletButton" className="wallet-button" onClick={navigationHandlers.handleWalletButtonClick}>Withdraw</button>
          </div>
          <div className="card card2" onClick={navigationHandlers.handleStackedCoinsClick}>
            <FontAwesomeIcon icon={faUserPlus} />
            <h2>STAKED COINS</h2>
          </div>
          <div className="card card3" onClick={navigationHandlers.handleStakingBonusClick}>
            <FontAwesomeIcon icon={faUserCheck} />
            <h2>STAKING BONUS</h2>
          </div>
          <div className="card card4" onClick={navigationHandlers.handleDailyStakingBonusClick}>
            <FontAwesomeIcon icon={faWallet} />
            <h2>Daily Staking Bonus</h2>
          </div>
          <div className="card card5" onClick={navigationHandlers.handleIntroducerRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>INTRODUCER REWARD</h2>
          </div>
          <div className="card card6" onClick={navigationHandlers.handleDailyIntroducerRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>DAILY INTRODUCER REWARD</h2>
          </div>
          <div className="card card7" onClick={navigationHandlers.handleLevelIncomepageClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Level Income Page</h2>
          </div>
          <div className="card card8" onClick={navigationHandlers.handleDailyCommunityRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Daily Community Reward</h2>
          </div>
          <div className="card card9" onClick={navigationHandlers.handleDailyEarningsClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Daily Earnings</h2>
          </div>
          <div className="card card10" onClick={navigationHandlers.handleTotalEarningsDashboardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Total Earnings</h2>
          </div>
          <div className="card card11">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            <h2>FCTC in Koinpark Exchange</h2>
            <div className="button-container">
              <a href="https://www.koinpark.com/trade/FCTC-INR" target="_blank" rel="noopener noreferrer">FCTC/INR</a>
              <a href="https://www.koinpark.com/trade/FCTC-USDT" target="_blank" rel="noopener noreferrer">FCTC/USDT</a>
            </div>
          </div>
          <a href="https://bscscan.com/token/0x8B8E4C825B2deb7aE5fC4614A0e151bB981D3Cbe" className="card card12" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDollarSign} />
            <h2>FCTC Bep 20 Contract</h2>
          </a>
          <div className="card card13" onClick={navigationHandlers.handleComingSoonClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>ADD USDT WALLET</h2>
          </div>
          <div className="card card14" onClick={navigationHandlers.handleComingSoonClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>ADD BND WALLET</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
