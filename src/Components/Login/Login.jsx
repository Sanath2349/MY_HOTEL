import React, { useState } from "react";
import axios from "axios";
import styles from "../Login/Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://3.7.35.89/login_customer", null, {
        params: {
          email,
          password,
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);

        if (response.data && response.data.includes("Login Successfull")) {
          // Extract username from response if available
          const username = response.data.username || email.split("@")[0];
          const userData = {
            email: email,
            username: username,
            isAdmin: false, // Set this based on your backend response if you have admin users
          };
          dispatch(setUser(userData));
          console.log("Dispatched user data:", userData);
          navigate("/");
        } else {
          setError("Invalid login credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        if (error.response) {
          setError(
            error.response.data.message || "An error occurred during login."
          );
        } else if (error.request) {
          setError("No response received from server. Please try again.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  };

  const handleForgot = () => {
    navigate("/changepassword");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.container}>
        <div className={styles.slider}>
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
            <button type="submit" className={styles.login}>
              Login
            </button>
            <span className={styles.bottom_text}>
              Don't have an account?{" "}
              <span className={styles.switch} onClick={handleSignup}>
                Sign Up
              </span>
            </span>
            <button
              type="button"
              className={styles.login}
              onClick={handleForgot}
            >
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
