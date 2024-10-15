import React from "react";
import styles from "./Style/Navbar.module.css";
import logo from "../assets/HotelLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";  // Import useDispatch along with useSelector
import { clearUser } from "../redux/slices/userSlice";  // Import clearUser action

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();  // Initialize useDispatch
  const user = useSelector((state) => state.user.currentUser);  // Get the logged-in user info

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : "";
  };

  const handlenewuser = () => {
    navigate("/signup");
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(clearUser());  // Clear user data from Redux store
    navigate("/login");
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
            onClick={() => handleNavigation("/")}>
            Home
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/explore")}`} 
            onClick={() => handleNavigation("/explore")}>
            Explore
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/aboutus")}`} 
            onClick={() => handleNavigation("/aboutus")}>
            About
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/rooms")}`} 
            onClick={() => handleNavigation("/rooms")}>
            Rooms
          </li>
          <li 
            className={`${styles.navLink} ${isActive("/contact")}`} 
            onClick={() => handleNavigation("/contact")}>
            Contact
          </li>
        </ul>
      </div>
      <div className={styles.navButtons}>
        {user ? (  // Check if user is available
          <div className={styles.userInfo}>
            <span>Welcome, {user.username}!</span>
            <button onClick={handleLogout} className={styles.navLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <button type="button" className={styles.navSignup} onClick={handlenewuser}>
              New User?
            </button>
            <button type="button" className={styles.navLogin} onClick={handlelogin}>
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
