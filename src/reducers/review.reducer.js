import { createSlice } from "@reduxjs/toolkit";

let initialState = {
isLoading: false,
  request: [],
  key: "",
  opened: [],
  unopened: [],
};

const review = createSlice({
  name: "review",
  initialState,
  reducers: {
    RequestSuccess(state, { payload }) {
      state.request = [payload].flat();
    },

    deleteRequestSuccess(state) {
      state.key = true;
    },
    OpenedSuccess(state, { payload }) {
      state.opened = [payload].flat();
      
    },
    UnopenedSuccess(state, { type, payload }) {
      state.unopened = ([payload]).flat() ;
     
    },
  },
});

export const {
  RequestSuccess,
  deleteRequestSuccess,
  OpenedSuccess,
  unopenedSuccess
} = review.actions;

export default review.reducer;





