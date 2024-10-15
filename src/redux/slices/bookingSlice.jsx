import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    userBookings: [],
    allBookings: [],
  },
  reducers: {
    setUserBookings: (state, action) => {
      state.userBookings = action.payload;
    },
    setAllBookings: (state, action) => {
      state.allBookings = action.payload;
    },
    addBooking: (state, action) => {
      state.userBookings.push(action.payload);
      state.allBookings.push(action.payload);
    },
  },
});

export const { setUserBookings, setAllBookings, addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;