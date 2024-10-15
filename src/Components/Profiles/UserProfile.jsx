import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserBookings } from '../../redux/slices/bookingSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { userBookings } = useSelector(state => state.bookings);

  useEffect(() => {
    // Fetch user bookings here
    // This is just a placeholder, replace with actual API call
    const fetchUserBookings = async () => {
      const response = await fetch(`/api/bookings/${currentUser.id}`);
      const data = await response.json();
      dispatch(setUserBookings(data));
    };

    fetchUserBookings();
  }, [currentUser, dispatch]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <h2>Your Bookings</h2>
      {/* {userBookings.map(booking => (
        <div key={booking.id}>
          <p>Room: {booking.roomName}</p>
          <p>Check-in: {booking.checkInDate}</p>
          <p>Check-out: {booking.checkOutDate}</p>
        </div>
      ))} */}
    </div>
  );
};

export default UserProfile;