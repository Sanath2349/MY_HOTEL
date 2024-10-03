import React, { useState } from 'react';
import styles from "../Login/Login.module.css";
import { useNavigate } from 'react-router';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate("")
  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  const handlesignup = ()=>{
    navigate('/signup')
  }
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
        {/* Login Form */}
        <form className={styles.form}>
          <span className={styles.title}>Login</span>
          <div className={styles.form_control}>
            <input type="text" className={styles.input} required />
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.form_control}>
            <input type="password" className={styles.input} required />
            <label className={styles.label}>Password</label>
          </div>
          <button className={styles.login}>Login</button>
          <span className={styles.bottom_text}>
            Don't have an account? <label htmlFor="register_toggle" className={styles.switch} onClick={handlesignup}>Sign Up</label>
          </span>
        </form>
        {/* Registration Form Placeholder */}
        <form className={styles.form}>
          <span className={styles.title}>Sign Up</span>
          <div className={styles.form_control}>
            <input type="text" className={styles.input} required />
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.form_control}>
            <input type="password" className={styles.input} required />
            <label className={styles.label}>Create Password</label>
          </div>
          <button>Register</button>
          <span className={styles.bottom_text}>
            Already have an account? <label htmlFor="register_toggle" className={styles.switch}>Login</label>
          </span>
        </form>
      </div>
    </div>
    </div>
  );
}
