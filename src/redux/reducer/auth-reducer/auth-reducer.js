import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticatedUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinStart: (state) => {
      console.log("signinStart", state);
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      console.log("signinSuccess", action);
      state.loading = false;
      state.authenticatedUser = action.payload;
    },
    signinFailure: (state, action) => {
      console.log("signinFailure", action);
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.authenticatedUser = null;
    },
  },
});

export const {
  signinStart, signinSuccess, signinFailure
} = authSlice.actions;
export default authSlice.reducer;