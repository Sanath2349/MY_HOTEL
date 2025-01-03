import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiWifiOn } from "react-icons/ci";
import { PiShowerLight } from "react-icons/pi";
import { IoMdTv } from "react-icons/io";
import { setAvailableRooms, selectRoom } from "../../redux/slices/roomSlice";
import style from "./Style/Room.module.css";
import roomprice from "../../assets/Rooms/roomprice.png";

// Move static room data outside the component
const roomData = [
  {
    id: 1,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  {
    id: 2,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  {
    id: 3,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  {
    id: 4,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  {
    id: 5,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  {
    id: 6,
    title: "The Royal Room",
    price: "₦190,000",
    available: "Yes",
    imageUrl: {roomprice},
  },
  // ... other room data
];

const Room = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms?.availableRooms || []);

  useEffect(() => {
    dispatch(setAvailableRooms(roomData));
  }, [dispatch]);

  const handleRoomSelection = (room) => {
    dispatch(selectRoom(room));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={style.herosection}>
        {/* ... hero content ... */}

        <div className={style.herocontent}>
          
          <h1 className={style.herotitle}>Rooms and Suites</h1>
          <p className={style.herosubtitle}>
            
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </p>
          <div className={style.scrolldown}>
            
            <span>!</span>
          </div>
        </div>
      </section>

      {/* Room Grid Section */}
      <section className={style.roomsgrid}>
        {rooms.map((room) => (
          <div key={room.id} className={style.roomcard}>
            <img src={roomprice} alt={room.title} className={style.roomimage} />
            <div className={style.roomdetails}>
              <div className={style.roomsub}>
                <h3 className={style.roomtitle}>{room.title}</h3>
                <p className={style.roomavailability}>
                  Available: {room.available}
                </p>
              </div>
              <p className={style.roomprice}>{room.price}</p>
            </div>
            <div className={style.roomicons}>
              <span className={style.icon}>
                <IoMdTv />
              </span>
              <span className={style.icon}>
                <PiShowerLight />
              </span>
              <span className={style.icon}>
                <CiWifiOn />
              </span>
              <button
                className={style.booknowbtn}
                onClick={() => handleRoomSelection(room)}
              >
                Book now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Room;
