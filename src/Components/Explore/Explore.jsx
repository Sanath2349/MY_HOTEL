import React from "react";
import styles from "../Explore/styles/Explore.module.css";
import lux from "../../assets/Explore/Lux.png";
import gym from "../../assets/Explore/Gym.png";
import rest from "../../assets/Explore/rest.png";
import play from '../../assets/Explore/play.png';


export default function Explore() {
  return (
    <div>
      <div className={styles.imageContainer}>

        <div className={styles.overlay}>
          <div className={styles.playButton}>
            <span><img src={play}alt="" /></span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Take a tour</h2>
        <div className={styles.tourSection}>
          <div className={styles.tourItem}>
            <img src={lux} alt="Luxurious rooms" className={styles.tourImage} />
            <div className={styles.tourContent}>
              <div className={styles.border}></div>
              <h3 className={styles.tourTitle}>Luxurious rooms</h3>
              <p className={styles.tourDescription}>
                Experience ultimate comfort in our spacious rooms. Each room is
                designed to provide a serene and relaxing atmosphere, ensuring a
                restful stay during your visit.
              </p>
            </div>
          </div>
          <div className={styles.tourItem}>
            <img src={gym} alt="Gym center" className={styles.tourImage} />
            <div className={styles.tourContent}>
              <div className={styles.border}></div>
              <h3 className={styles.tourTitle}>Gym center</h3>
              <p className={styles.tourDescription}>
                Stay fit even while traveling in our state-of-the-art gym.
                Equipped with modern exercise machines and free weights, our gym
                caters to all your fitness needs.
              </p>
            </div>
          </div>
          <div className={styles.tourItem}>
            <img src={rest} alt="Restaurant" className={styles.tourImage} />
            <div className={styles.tourContent}>
              <div className={styles.border}></div>
              <h3 className={styles.tourTitle}>Restaurant</h3>
              <p className={styles.tourDescription}>
                Indulge in culinary delights at our in-house restaurant. Our
                expert chefs prepare a wide range of dishes to satisfy every
                palate, using fresh, locally-sourced ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
