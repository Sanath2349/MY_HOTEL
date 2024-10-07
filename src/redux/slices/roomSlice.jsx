import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    availableRooms: [],
    selectedRoom: null,
  },
  reducers: {
    setAvailableRooms: (state, action) => {
      state.availableRooms = action.payload;
    },
    selectRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { setAvailableRooms, selectRoom } = roomSlice.actions;
export default roomSlice.reducer;