import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerlist: null,
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerStart: (state) => {
      console.log("customerStart", state);
      state.loading = true;
      state.error = null;
    },
    customerSuccess: (state, action) => {
      console.log("customerSuccess", action);
      state.loading = false;
      state.customerlist = action.payload;
    },
    customerFailure: (state, action) => {
      console.log("customerFailure", action);
      state.loading = false;
      state.error = action.payload;
    },
    createcustomerStart: (state) => {
      console.log("createcustomerStart", state);
      state.loading = true;
      state.error = null;
    },
    createcustomerSuccess: (state, action) => {
      console.log("createcustomerSuccess", action);
      state.loading = false;
    },
    createcustomerFailure: (state, action) => {
      console.log("createcustomerFailure", action);
      state.loading = false;
    },
  },
});

export const {
  customerStart,
  customerSuccess,
  customerFailure,
  createcustomerStart,
  createcustomerSuccess,
  createcustomerFailure,
} = customerSlice.actions;

export default customerSlice.reducer;