import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.error = null;
            state.loading = false;
            state.user = action.payload;
        },
        signInFail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFail } = userSlice.actions;
export default userSlice.reducer;