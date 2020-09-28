import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  customerall: [],
};

const customer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerAdd(state, action) {
      state.customer = "success";
    },

    CustomerSuccess(state, { type, payload }) {
      state.customerall = [payload].flat();
    },
    customerAddBulk(state, action) {
      state.customer="success";
      state.file = true;
    },
  },
});
export const { customerAdd, CustomerSuccess } = customer.actions;
export default customer.reducer;
