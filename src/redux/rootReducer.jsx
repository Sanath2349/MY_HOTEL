import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import roomReducer from './slices/roomSlice';

const rootReducer = combineReducers({
  user: userReducer,
  rooms: roomReducer,
});

export default rootReducer;