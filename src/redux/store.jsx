import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;