import React, { useState } from 'react';
import styles from '../Register/Signup.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let validationErrors = {};

    // Full Name validation
    if (!formData.fullname.trim()) {
      validationErrors.fullname = "Full Name is required";
    }

    // Email validation (basic regex for email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    // Password validation (min 8 characters, 1 uppercase, 1 lowercase, 1 number)
 
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } 

    // Confirm Password validation (must match password)
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted', formData);
      // Proceed with form submission (e.g., call an API)
    } else {
      setErrors(validationErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create Your Account</h1>

        <div className={styles.inputGroup}>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={styles.input}
            placeholder="Full Name"
          />
          {errors.fullname && <p className={styles.error}>{errors.fullname}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="Email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Password"
          />
          <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            placeholder="Confirm Password"
          />
          <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
          {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
}
