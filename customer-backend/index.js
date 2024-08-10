const express = require('express');
const app = express();
const sequelize = require('./config/database');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/profile', require('./routes/profileRoutes'));
app.use('/staking', require('./routes/stakingRoutes'));
app.use('/wallet', require('./routes/walletRoutes')); // Wallet routes

// Add the referral and level routes under the 'team' path
app.use('/team/referral', require('./routes/referralRoutes'));
app.use('/team/level', require('./routes/levelRoutes'));

// Reports route for accessing different types of user reports
app.use('/report', require('./routes/reportRoutes'));

app.use('/introducer-reward', require('./routes/introducerRewardRoutes'));
app.use('/community-reward', require('./routes/communityRewardRoutes'));
app.use('/level-income', require('./routes/levelIncomeRoutes'));
app.use('/daily-staking-bonus', require('./routes/dailyStakingBonusRoutes'));
app.use('/earnings', require('./routes/earningsRoutes'));
app.use('/daily-introducer-reward', require('./routes/dailyIntroducerRewardRoutes'));
app.use('/daily-community-reward', require('./routes/dailyCommunityRewardRoutes'));

// Add the new daily level income route
app.use('/daily-level-income', require('./routes/dailyLevelIncomeRoutes')); 

// Sync Database and Start Server
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
