import React, { useState } from "react";
import axios from "axios";
import styles from "../Register/Signup.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validate = () => {
    let validationErrors = {};

    if (!formData.fullname.trim()) {
      validationErrors.fullname = "Full Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setApiError(null);

      axios.post("http://3.7.35.89/customer_register", {
        full_name: formData.fullname,  // Adjusted key to match 'full_name'
        email: formData.email,
        phone_no: formData.phone_no || 0,  // Assuming phone number is optional
        password: formData.password,
        confirm_password: formData.confirmPassword,  // Added confirm_password
        role: "customer"  // Fixed role to "customer" as per your response body
      })
      
        .then((response) => {
          console.log("Signup successful", response.data);
          setSignupSuccess(true);
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          setApiError("An error occurred during signup. Please try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (signupSuccess) {
    return (
      <div className={styles.successMessage}>
        <p>
          Signup successful! Welcome aboard. You can now log in with your new
          account.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create Your Account</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={`${styles.input} ${
              errors.fullname ? styles.inputError : ""
            }`}
          />
          {errors.fullname && <p className={styles.error}>{errors.fullname}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.password ? styles.inputError : ""
              }`}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.eyeIcon}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`${styles.input} ${
              errors.confirmPassword ? styles.inputError : ""
            }`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.eyeIcon}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>

        {apiError && <p className={styles.apiError}>{apiError}</p>}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
