require('dotenv').config(); // Load environment variables

const express = require('express');
const app = express();
const db = require('./models');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});
