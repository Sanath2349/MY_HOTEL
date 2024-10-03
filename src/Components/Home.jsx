import React from "react";
import styles from "./Style/Home.module.css";
import homeHeroImg from "../assets/Home/Rectangle 5.png";
import homeroom1 from "../assets/Home/homeroom1.png";
import homeroom2 from "../assets/Home/homeroom2.png";
import homeroom3 from "../assets/Home/homeroom3.png";
import { RiHotelFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosWifi } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { MdLocalLaundryService } from "react-icons/md";
import { FaParking } from "react-icons/fa";

const Home = () => {
  const testimonials = [
    {
      date: "2 Mar. 2023",
      content:
        "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs.",
      author: "Anthony Bruff",
      rating: 5,
    },
    {
      date: "25 Mar. 2023",
      content:
        "Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff.",
      author: "Regina Gella",
      rating: 5,
    },
    {
      date: "5 Apr. 2023",
      content:
        "I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high!",
      author: "Jamiyu Aliyu",
      rating: 5,
    },
    {
      date: "15 Apr. 2023",
      content:
        "The attention to detail in every aspect of our stay was remarkable. From the room service to the conference facilities, everything was top-notch.",
      author: "Sarah Johnson",
      rating: 4,
    },
    {
      date: "1 May 2023",
      content:
        "As a frequent business traveler, I can confidently say that Hotel Monteleone stands out in terms of service quality and staff professionalism.",
      author: "Michael Chang",
      rating: 5,
    },
    {
      date: "10 May 2023",
      content:
        "The historical charm of the hotel combined with modern amenities made for a unique and comfortable stay. I'll definitely be returning.",
      author: "Emma Thompson",
      rating: 5,
    },
  ];
  return (
    <main className={styles.homeMain}>
      <div className={styles.homeHeroWrapper}>
        <div className={styles.homeHero}>
          <div className={styles.homeHeroContent}>
            <h1>
              <i>My Hotel</i>
            </h1>
            <h2>Hotel for every moment rich in emotion</h2>
            <p>Every moment feels like first time in My Hotel</p>
            <button type="button" className={styles.homeHeroBookBtn}>
              Book Now
            </button>
          </div>
          <div className={styles.homeHeroImg}>
            <img src={homeHeroImg} alt="hero Img" />
          </div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.roomSearch}>
            <div className={styles.searchTypeIcon}>
              <RiHotelFill style={{ fontSize: "30px" }} />
            </div>
            <div className={styles.searchContent}>
              <label htmlFor="room">Room Type</label>
              <select name="room" id="room">
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                <option value="luxury">Luxury</option>
                <option value="suite">Suite</option>
              </select>
            </div>
          </div>
          <div className={styles.roomSearch}>
            <div className={styles.searchTypeIcon}>
              <IoPersonSharp style={{ fontSize: "30px" }} />
            </div>
            <div className={styles.searchContent}>
              <label htmlFor="person">Person</label>
              <select name="person" id="person">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className={styles.roomSearch}>
            <div className={styles.searchTypeIcon}>
              <BsCalendarDateFill style={{ fontSize: "30px" }} />
            </div>
            <div className={styles.searchContent}>
              <label htmlFor="checkin">Room Type</label>
              <input type="date" name="checkin" id="checkin" />
            </div>
          </div>
          <div className={styles.roomSearch}>
            <div className={styles.searchTypeIcon}>
              <BsCalendarDateFill style={{ fontSize: "30px" }} />
            </div>
            <div className={styles.searchContent}>
              <label htmlFor="checkout">Room Type</label>
              <input type="date" name="checkout" id="checkout" />
            </div>
          </div>
          <button type="button" className={styles.searchBtn}>
            Book Now
          </button>
        </div>
      </div>
      <div className={styles.homeFeature}>
        <div className={styles.homeFeatureHeading}>
          <h1>Our Facilities</h1>
          <p>We offer modern (5 star) hotel facilities for your comfort</p>
        </div>
        <div className={styles.homeFeatureContainer}>
          <div className={styles.facility}>
            <FaPersonSwimming style={{ fontSize: "80px",color:"#7c6a46" }} />
            <p>Swimming Pool</p>
          </div>
          <div className={styles.facility}>
            <IoIosWifi style={{ fontSize: "80px",color:"#7c6a46" }} />
            <p>WiFi</p>
          </div>
          <div className={styles.facility}>
            <IoFastFood style={{ fontSize: "80px",color:"#7c6a46" }} />
            <p>Breakfast</p>
          </div>
          <div className={styles.facility}>
            <CgGym style={{ fontSize: "80px",color:"#7c6a46" }} />
            <p>Gym</p>
          </div>
          <div className={styles.facility}>
            <IoGameController style={{ fontSize: "60px",color:"#7c6a46" }} />
            <p>Game Center</p>
          </div>
          <div className={styles.facility}>
            <HiLightBulb style={{ fontSize: "60px",color:"#7c6a46" }} />
            <p>24 / 7 Light</p>
          </div>
          <div className={styles.facility}>
            <MdLocalLaundryService style={{ fontSize: "60px",color:"#7c6a46" }} />
            <p>Laundry</p>
          </div>
          <div className={styles.facility}>
            <FaParking style={{ fontSize: "60px",color:"#7c6a46" }} />
            <p>Parking Space</p>
          </div>
        </div>
      </div>
      <div className={styles.homeRooms}>
        <div className={styles.homeRoomsHeading}>
          <h1>Luxury Rooms</h1>
          <p>All Rooms are designed for your comfort</p>
        </div>
        <div className={styles.homeRoomContainer}>
          <div className={styles.homeRoom}>
            <img src={homeroom1} alt="" />
            <p>Television set, Extra sheets and Breakfast</p>
          </div>
          <div className={styles.homeRoom}>
            <img src={homeroom2} alt="" />
            <p>Television set, Extra sheets, Breakfast, and fireplace</p>
          </div>
          <div className={styles.homeRoom}>
            <img src={homeroom3} alt="" />
            <p>
              Television set, Extra sheets, Breakfast, and fireplace, Console
              and bed rest
            </p>
          </div>
        </div>
      </div>
      <div className={styles.testimonials}>

      </div>
    </main>
  );
};

export default Home;
