import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  mailchimp: '',
 goBack:'',
 
};

const mailchimp = createSlice({
  name: "mailchimp",
  initialState,
  reducers: {
    mailDisable(state, action) {
      state.mailchimp = "disabled";
      
    },

    mailEnable(state, action) {
      state.mailchimp = "active";
     
      
    },
  },
});

export default mailchimp.reducer;
