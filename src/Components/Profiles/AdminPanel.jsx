import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllBookings } from "../../redux/slices/bookingSlice";
import { setAvailableRooms } from "../../redux/slices/roomSlice";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { allBookings } = useSelector((state) => state.bookings);
  const { availableRooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    // Fetch all bookings and rooms here
    // This is just a placeholder, replace with actual API calls
    const fetchData = async () => {
      const bookingsResponse = await fetch("/api/bookings");
      const bookingsData = await bookingsResponse.json();
      dispatch(setAllBookings(bookingsData));

      const roomsResponse = await fetch("/api/rooms");
      const roomsData = await roomsResponse.json();
      dispatch(setAvailableRooms(roomsData));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>All Bookings</h2>
      {allBookings.map((booking) => (
        <div key={booking.id}>
          <p>User: {booking.userName}</p>
          <p>Room: {booking.roomName}</p>
          <p>Check-in: {booking.checkInDate}</p>
          <p>Check-out: {booking.checkOutDate}</p>
        </div>
      ))}
      <h2>Available Rooms</h2>
      {availableRooms.map((room) => (
        <div key={room.id}>
          <p>Room Name: {room.name}</p>
          <p>Capacity: {room.capacity}</p>
          <p>Price: ${room.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
