import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globalVariables';

function getUserFromLocalStorage() {
  const userFromStorage = localStorage.getItem(appStorageName);
  if (userFromStorage === null) {
    return {
        username: null,
        location: null
    }
  }

  return JSON.parse(userFromStorage);
}

const userFromStorage = getUserFromLocalStorage();

const initialState = {
  username: userFromStorage.username,
  location: userFromStorage.location
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
        const userToBeStored = JSON.stringify(action.payload);
        localStorage.setItem(appStorageName, userToBeStored);
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.username = action.payload.username;
        state.location = action.payload.location;
    },
    deleteUser: (state) => {
        localStorage.removeItem(appStorageName);
        state.username = null;
        state.location = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
