import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import MainWallet from './mainwallet';
import StackedCoins from './StackedCoins';
import StakingCards from './StakingPlans';
import DailyIntroducerReward from './DailyIntroducerReward';
import IntroducerReward from './IntroducerReward';
import DailyStakingBonus from './DailyStakingBonus';
import LevelIncomePage from './LevelIncomePage';
import DailyCommunityReward from './DailyCommunityReward';
import DailyEarnings from './DailyEarnings';
import TotalEarningsDashboard from './TotalEarningsDashboard';
import ComingSoon from './ComingSoon';
import UserInfo from './UserInfo';
import KycForm from './KycForm';
import ChangePassword from './ChangePassword';
import Deposit from './Deposit';
import ReferralProgram from './ReferralProgram';
import Reports from './Reports';
import Login from './Login';
import Layout from './Layout';
 
const App = () => {
  return (
<Router>
<Routes>
<Route path="/" element={<Layout><Dashboard /></Layout>} />
<Route path="/StackedCoins" element={<Layout><StackedCoins /></Layout>} />
<Route path="/stakingBonus" element={<Layout><StakingCards /></Layout>} />
<Route path="/dailyStakingBonus" element={<Layout><DailyStakingBonus /></Layout>} />
<Route path="/DailyIntroducerReward" element={<Layout><DailyIntroducerReward /></Layout>} />
<Route path="/IntroducerReward" element={<Layout><IntroducerReward /></Layout>} />
<Route path="/LevelIncomePage" element={<Layout><LevelIncomePage /></Layout>} />
<Route path="/DailyCommunityReward" element={<Layout><DailyCommunityReward /></Layout>} />
<Route path="/DailyEarnings" element={<Layout><DailyEarnings /></Layout>} />
<Route path="/TotalEarningsDashboard" element={<Layout><TotalEarningsDashboard /></Layout>} />
<Route path="/ComingSoon" element={<Layout><ComingSoon /></Layout>} />
<Route path="/userinfo" element={<Layout><UserInfo /></Layout>} />
<Route path="/KycForm" element={<Layout><KycForm /></Layout>} />
<Route path="/ChangePassword" element={<Layout><ChangePassword /></Layout>} />
<Route path="/ReferralProgram" element={<Layout><ReferralProgram /></Layout>} />
<Route path="/Reports" element={<Layout><Reports /></Layout>} />
 
        {/* Pages without sidebar */}
<Route path="/withdraw" element={<MainWallet />} />
<Route path="/Deposit" element={<Deposit />} />
<Route path="/Login" element={<Login />} />
</Routes>
</Router>
  );
};
 
export default App;