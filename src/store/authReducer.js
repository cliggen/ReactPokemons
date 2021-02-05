/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import admin from './admin';

const auth = createSlice({
  name: 'authReducer',
  initialState: {
    isAdmin: false,
    isLoggedIn: false,
    username: null
  },
  reducers: {
    logIn(state, action) {
      const currentUser = action.payload.username;
      const currentPassword = action.payload.password;
      state.isAdmin = (currentUser === admin.username && currentPassword === admin.password);
      state.isLoggedIn = true;
      state.username = currentUser;
      sessionStorage.setItem('username', currentUser);
      sessionStorage.setItem('password', currentPassword);
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.username = null;
    }
  }
});
export default auth;
export const authReducer = auth.reducer;
