import React, { useEffect } from "react";
import styles from "./Style/Navbar.module.css";
import logo from "../assets/HotelLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/slices/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser, isAuthenticated, isAdmin } = useSelector((state) => state.user);



  useEffect(() => {
    console.log("Navbar - Redux State:", { currentUser, isAuthenticated, isAdmin });
  }, [currentUser, isAuthenticated, isAdmin]);


  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? styles.active : "";
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" onClick={() => handleNavigation("/")} />
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
        {isAuthenticated ? (
          <>
            <span className={styles.welcomeMessage}>Welcome, {currentUser.username}!</span>
            {isAdmin ? (
              <button onClick={() => handleNavigation("/admin")} className={styles.navAdmin}>
                Admin Panel
              </button>
            ) : (
              <button onClick={() => handleNavigation("/profile")} className={styles.navProfile}>
                My Profile
              </button>
            )}
            <button onClick={handleLogout} className={styles.navLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleNavigation("/signup")} className={styles.navSignup}>
              New User?
            </button>
            <button onClick={() => handleNavigation("/login")} className={styles.navLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;