import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loginModal: false,
    registerModal: false,
    userInfoModal: false,
  },
  reducers: {
    addLoginInfo: (state, action) => {
      return { user: action.payload };
    },
    userLogout: (state) => {
      state.user = {};
    },
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    openRegisterModal: (state) => {
      state.registerModal = true;
    },
    openUserInfoModal: (state) => {
      state.userInfoModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    closeRegisterModal: (state) => {
      state.registerModal = false;
    },
    closeUserInfoModal: (state) => {
      state.userInfoModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addLoginInfo,
  userLogout,
  openLoginModal,
  openRegisterModal,
  openUserInfoModal,
  closeLoginModal,
  closeRegisterModal,
  closeUserInfoModal,
} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectLoginModalFlag = (state) => state.auth.loginModal;
export const selectRegisterModalFlag = (state) => state.auth.registerModal;
export const selectUserInfoModalFlag = (state) => state.auth.userInfoModal;
export default authSlice.reducer;
