import React, { useState } from 'react';
import axios from 'axios';
import styles from './Changepassword.module.css'; // Importing CSS module

export default function Changepassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle password change
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setLoading(true); // Set loading state

    axios.patch(`http://3.7.35.89/changepassword?email=${encodeURIComponent(email)}`, {
      password: password,
      confirm_password: confirmPassword
    })
    .then(() => {
      setSuccessMessage('Password changed successfully');
      setErrorMessage('');
    })
    .catch(() => {
      setErrorMessage('Error changing password. Please try again.');
      setSuccessMessage('');
    })
    .finally(() => {
      setLoading(false); // Remove loading state
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Change Password</h2>

        <label className={styles.label}>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={styles.input}
          required
        />

        <label className={styles.label}>New Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className={styles.input}
          required
        />

        <label className={styles.label}>Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          className={styles.input}
          required
        />

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
