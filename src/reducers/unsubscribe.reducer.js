import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  unsubscribe: [],
};

const unsubscribe = createSlice({
  name: "unsubscribe",
  initialState,
  reducers: {
    UnsubscribeSuccess(state, { payload }) {
      state.unsubscribe = [payload].flat();
    },
  },
});

export const { UnsubscribeSuccess } = unsubscribe.actions;

export default unsubscribe.reducer;
