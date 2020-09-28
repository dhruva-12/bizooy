import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  completed: [],
};

const completed = createSlice({
  name: "completed",
  initialState,
  reducers: {
    CompletedSuccess(state, { type, payload }) {
      state.completed = [payload].flat();
    },
  },
});

export const { CompletedSuccess } = completed.actions;

export default completed.reducer;
