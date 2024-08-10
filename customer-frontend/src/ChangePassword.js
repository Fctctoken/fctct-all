import React, { useState } from 'react';
import './ChangePassword.css';
 
const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
 
        // Reset any existing error or success messages
        setError('');
        setSuccess('');
 
        // Validate the form
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }
 
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }
 
        // Call API to change the password
        // Assuming there's a function to handle this API call
        fetch('/api/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentPassword,
                newPassword,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                setSuccess('Password changed successfully!');
                // Clear the form
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setError(data.message || 'An error occurred. Please try again.');
            }
        })
        .catch((error) => {
            setError('An error occurred. Please try again.');
        });
    };
 
    return (
<div className="change-password">
<h2>Change Password</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="currentPassword">Current Password</label>
<input
                        type="password"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
</div>
<div className="form-group">
<label htmlFor="newPassword">New Password</label>
<input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
</div>
<div className="form-group">
<label htmlFor="confirmPassword">Confirm New Password</label>
<input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
</div>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
<button type="submit">Change Password</button>
</form>
</div>
    );
};
 
export default ChangePassword;