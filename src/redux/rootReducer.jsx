import { combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./slices/roomSlice";
import userReducer from "./slices/userSlice";
import bookingReducer from "./slices/bookingSlice";

const rootReducer = combineReducers({
  rooms: roomsReducer,
  user: userReducer,
  bookings: bookingReducer,
});

export default rootReducer;
