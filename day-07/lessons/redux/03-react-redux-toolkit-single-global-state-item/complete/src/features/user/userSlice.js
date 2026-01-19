import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.username = action.payload
        },
        deleteUser: (state) => {
            state.username = null
        },
    },
});

// action creators are generated for each case reducer function
export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
