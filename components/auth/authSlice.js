import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loginModal: false,
    registerModal: false,
    userInfoModal: false,
    isLogin: false
  },
  reducers: {
    addLoginInfo: (state, action) => {
      return { user: action.payload, isLogin: true };
    },
    userLogout: (state) => {
      return { user:{}, isLogin: false};
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
    }
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
  closeUserInfoModal
} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectLoginModalFlag = (state) => state.auth.loginModal;
export const selectRegisterModalFlag = (state) => state.auth.registerModal;
export const selectUserInfoModalFlag = (state) => state.auth.userInfoModal;
export const selectIsLogin = (state) => state.auth.isLogin;
export default authSlice.reducer;
