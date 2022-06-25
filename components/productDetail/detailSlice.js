import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    value: [],
    detailModal: false,
  },
  reducers: {
    openDetailModal: (state) => {
      state.detailModal = true;
    },
    closeDetailModal: (state) => {
      state.detailModal = false;
    },
    addDetailProduct: (state, action) => {
      return { value: action.payload };
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addDetailProduct,
  closeDetailModal,
  openDetailModal
} = detailSlice.actions;
export const selectDetailProduct = (state) => state.detail.value;
export const selectDetailModalFlag = (state) => state.detail.detailModal;
export default detailSlice.reducer;
