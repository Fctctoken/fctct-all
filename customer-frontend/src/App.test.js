import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
 
test('renders Dashboard component', () => {
  render(
<Router>
<App />
</Router>
  );
  // Check if the Dashboard title is rendered
  const dashboardTitle = screen.getByText(/Dashboard/i);
  expect(dashboardTitle).toBeInTheDocument();
});
 
test('renders Navigation Links', () => {
  render(
<Router>
<App />
</Router>
  );
 
  // Check if navigation links are rendered
  const stackedCoinsLink = screen.getByText(/StackedCoins/i);
  expect(stackedCoinsLink).toBeInTheDocument();
 
  const stakingBonusLink = screen.getByText(/stakingBonus/i);
  expect(stakingBonusLink).toBeInTheDocument();
});
 
test('renders Login component', () => {
  render(
<Router>
<App />
</Router>
  );
 
  // Check if the Login page is rendered when route is "/Login"
  window.history.pushState({}, 'Login Page', '/Login');
  const loginTitle = screen.getByText(/Login/i);
  expect(loginTitle).toBeInTheDocument();
});