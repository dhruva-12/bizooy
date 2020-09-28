import { createSlice } from "@reduxjs/toolkit";
import JwtService from "../api/jwt.service";

let initialState = {
  userEmail: null,
  username: null,
  token: null,
  uri: null,
  roles: null,
  isLoading: false,
  isAuthenticated: '',
  status: '',
  passReset: false,
  registered: false,
};

const authUser = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state.userEmail = action.payload.email;
      state.username = action.payload.name;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.status = "pass";

      if (action.payload.token) {
        JwtService.saveToken(action.payload.token);
      }
    },

    setPendingStatus(state, action) {
      state.isLoading = true;
      state.isAuthenticated = '';
      state.status = "pending";
    },
    
    setFailedStatus(state, action) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.status = "failed"
    },

    passResetSent(state, action) {
      state.passReset = true
    },

    userRegPending(state, action) {
      state.registered = false
    },
    
    userRegSuccess(state, action) {
      state.registered = true;
      state.userEmail = action.payload.email;
      state.username = action.payload.name;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.status = "pass";

      if (action.payload.token) {
        JwtService.saveToken(action.payload.token);
      }
    },
    
    userRegFailed(state, action) {
      state.registered = false
    },
    
    destroyLoggedInUser(state, action) {
      Object.keys(state).forEach(function (index) {
        state[index] = null;
      });
      JwtService.destroyToken();
    },
    
  },
});

export const { setLoggedInUser, destroyLoggedInUser } = authUser.actions;

export default authUser.reducer;