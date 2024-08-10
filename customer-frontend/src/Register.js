import React, { useState } from 'react';
import './Register.css';

function App() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    countryCode: '+1',
    password: '',
    confirmPassword: '',
    referral: '',
    verificationCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, mobile, countryCode, password, confirmPassword, referral } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Mock backend request (replace with actual request logic)
    setTimeout(() => {
      console.log('User registered:', formData);
      alert('User registered successfully.');
    }, 1000);
  };

  const sendVerificationCode = () => {
    const { mobile, countryCode } = formData;
    console.log('Sending verification code to:', countryCode + mobile);
    alert('Verification code sent to ' + countryCode + mobile);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="referral">Referral ID (Optional)</label>
            <input
              type="text"
              id="referral"
              name="referral"
              placeholder="Enter Referral ID"
              value={formData.referral}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname" className="required">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter Full Name"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="required">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="required">Mobile Number</label>
            <div className="mobile-input-group">
              <select
                id="country-code"
                name="countryCode"
                className="country-code-dropdown"
                value={formData.countryCode}
                onChange={handleInputChange}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                {/* Add more country options as needed */}
              </select>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group verification-group">
            <label htmlFor="mobile-verification">Mobile Verification Code</label>
            <input
              type="text"
              id="mobile-verification"
              name="verificationCode"
              placeholder="Enter Code"
              value={formData.verificationCode}
              onChange={handleInputChange}
              required
            />
            <button type="button" className="verification-btn" onClick={sendVerificationCode}>
              Send Code
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="required">New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="required">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
