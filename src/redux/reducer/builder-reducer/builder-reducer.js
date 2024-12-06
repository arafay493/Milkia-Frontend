import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  builderlist: null,
  loading: false,
  error: null,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    builderStart: (state) => {
      console.log("builderStart", state);
      state.loading = true;
      state.error = null;
    },
    builderSuccess: (state, action) => {
      console.log("builderSuccess", action);
      state.loading = false;
      state.builderlist = action.payload;
    },
    builderFailure: (state, action) => {
      console.log("builderFailure", action);
      state.loading = false;
      state.error = action.payload;
    },
    createbuilderStart: (state) => {
      console.log("createbuilderStart", state);
      state.loading = true;
      state.error = null;
    },
    createbuilderSuccess: (state, action) => {
      console.log("createbuilderSuccess", action);
      state.loading = false;
    },
    createbuilderFailure: (state, action) => {
      console.log("createbuilderFailure", action);
      state.loading = false;
    },
  },
});

export const {
  builderStart,
  builderSuccess,
  builderFailure,
  createbuilderStart,
  createbuilderSuccess,
  createbuilderFailure,
} = builderSlice.actions;

export default builderSlice.reducer;