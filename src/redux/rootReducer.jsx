import { combineReducers } from '@reduxjs/toolkit';
import roomsReducer from './slices/roomSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  rooms: roomsReducer,
  user: userReducer,
  // other reducers...
});

export default rootReducer;