import React from "react";
import styles from "./Style/Navbar.module.css";
import logo from "../assets/HotelLogo.png";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>Explore</li>
          <li className={styles.navLink}>About</li>
          <li className={styles.navLink}>Rooms</li>
          <li className={styles.navLink}>Contact</li>
        </ul>
      </div>
      <div className={styles.navButtons}>
        <button type="button" className={styles.navSignup}>
          New User?
        </button>
        <button type="button" className={styles.navLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
