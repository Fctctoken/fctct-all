import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
      <img src={require("./fctc.png")} alt="Logo" className="logo" width="120"height="100px" />
        <h2>Login</h2>
        <div className="input-group">
          <label>Email ID *</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>
        {/* Don't have an account? <Link to="C:\Users\mohan\sample-app\src\Register.js">Register</Link> */}
        </p>
        <p>
          Login trouble? <a href="#support">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
