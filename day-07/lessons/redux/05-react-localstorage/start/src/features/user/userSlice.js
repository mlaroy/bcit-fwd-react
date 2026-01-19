import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  location: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload.username;
      state.location = action.payload.location;
    },
    deleteUser: (state) => {
      state.username = null;
      state.location = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;