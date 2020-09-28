
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  dashboard: [],
  //isloading: false,
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    dashboardSuccess(state, { type, payload }) {
      state.dashboard = ([payload]).flat() ;
     // state.isLoading = false;
    },
  },
});

export const { dashboardSuccess } = dashboard.actions;

export default dashboard.reducer;
