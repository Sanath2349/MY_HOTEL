import React, { useState } from 'react';
import axios from 'axios';
import styles from "../Login/Login.module.css";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login success
  const dispatch = useDispatch();

  const navigate = useNavigate('')

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setError(''); // Clear any existing errors when toggling
  };

  const handleSignup = () => {
    navigate('/signup');
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors before attempting login
  
    axios.post('http://3.7.35.89/login_customer', null, {
      params: {
        email,
        password
      }
    })
    .then(response => {
      console.log("API Response:", response.data); // Debug the response
  
      // Check the actual API response data
      if (response.data && response.data.includes("Login Successfull")) {
        const userData = {
          email: email,
          username: response.data.username,  // Add username from response
        };
        dispatch(setUser(userData));
        setIsLoggedIn(true); // Set login success state to true
        navigate('/');  // Navigate to home page after login
      }
       else {
        setError('Invalid login credentials. Please try again.');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      if (error.response) {
        setError(error.response.data.message || 'An error occurred during login.');
      } else if (error.request) {
        setError('No response received from server. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    });
  };
  
  
  

  const handleForgot = () => {
    navigate('/changepassword');
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.container}>
        <input
          type="checkbox"
          id="register_toggle"
          checked={isRegistering}
          onChange={handleToggle}
          style={{ display: 'none' }}
        />
        <div className={styles.slider} style={{ transform: isRegistering ? 'translateX(-100%)' : 'translateX(0)' }}>
          {/* Conditionally render the form or success message */}
          {!isLoggedIn ? (
            <form className={styles.form} onSubmit={handleLogin}>
              <span className={styles.title}>Login</span>
              {error && <div className={styles.errorMessage}>{error}</div>}
              <div className={styles.form_control}>
                <input 
                  type="text" 
                  className={styles.input} 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={styles.label}>Email</label>
              </div>
              <div className={styles.form_control}>
                <input 
                  type="password" 
                  className={styles.input} 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.label}>Password</label>
              </div>
              <button type="submit" className={styles.login}>Login</button>
              <span className={styles.bottom_text}>
                Don't have an account? <label htmlFor="register_toggle" className={styles.switch} onClick={handleSignup}>Sign Up</label>
              </span>
              <button className={styles.login} onClick={handleForgot}>Forgot Password</button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <h2>Login successful!</h2>
              <p>Welcome back! You are now logged in.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
