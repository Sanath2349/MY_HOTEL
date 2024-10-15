import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,  // Keep this for user info
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = {
        email: action.payload.email,
        username: action.payload.username,
      };
      state.isAuthenticated = true; // Set to true when the user logs in
    },
    clearUser: (state) => {
      state.currentUser = null; // Clear user info on logout
      state.isAuthenticated = false; // Set authentication status to false
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
