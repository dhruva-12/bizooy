import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
};

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    InformationAdd(state, action) {
      state.isLoading = true;
    },

    SmsEmailAdd() {},
    CustomAdd() {},
    SocialProfiles() {},
  },
});

export default settings.reducer;
