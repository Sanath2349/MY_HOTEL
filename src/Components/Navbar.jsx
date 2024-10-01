import React from "react";
import styles from "./Style/Navbar.module.css";
import logo from "../assets/HotelLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current path

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li 
            className={`${styles.navLink} ${isActive("/")}`} 
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/explore")}`} 
            onClick={() => handleNavigation("/explore")}
          >
            Explore
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/about")}`} 
            onClick={() => handleNavigation("/about")}
          >
            About
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/rooms")}`} 
            onClick={() => handleNavigation("/rooms")}
          >
            Rooms
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/contact")}`} 
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </li>
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
