import React from "react";
import styles from "./Style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerHead}>
        <div>
          <h2 className={styles.footerTittle}>
            <i>My Hotel</i>
          </h2>
          <p className={styles.footerDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatem nihil esse quis minima porro nemo culpa quidem illo iure
            laudantium aliquam corrupti libero inventore sequi sint, praesentium
            sunt quisquam ea dignissimos eaque amet maiores pariatur! Asperiores
            neque expedita dignissimos!
          </p>
        </div>
        <div className={styles.footerLinks}>
          <h2 >Quick Links</h2>
          <ul>
            <li>Room Booking</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Explore</li>
          </ul>
        </div>
        <div className={styles.footerTerms}>
          <h2>Company</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>F.A.Q</li>
            <li>About</li>
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <h2>Social Media</h2>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Tiktok</li>
          </ul>
        </div>
        <div className={styles.footerNewsletter}>
          <h2>Newsletter</h2>
          <p>
            Kindly subscribe to our newsletter to get latest deals on our rooms
            and vacation discount.
          </p>
          <div className={styles.newsletterInput}>
            <input type="mail" name="newsletter" id="newsletter" placeholder="Enter your email" />
            <button type="button">subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <hr />
        <h3>&copy; Copyright My Hotel 2024</h3>
      </div>
    </footer>
  );
};

export default Footer;
