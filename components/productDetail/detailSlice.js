import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    value: [],
    detailModal: false,
    slider: true,
  },
  reducers: {
    openDetailModal: (state) => {
      state.detailModal = true;
    },
    closeDetailModal: (state) => {
      state.detailModal = false;
    },
    openSlider: (state) => {
      state.slider = true;
    },
    closeSlider: (state) => {
      state.slider = false;
    },
    addDetailProduct: (state, action) => {
      return { value: action.payload };
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  openSlider,
  closeSlider,
  addDetailProduct,
  closeDetailModal,
  openDetailModal
} = detailSlice.actions;
export const selectDetailProduct = (state) => state.detail.value;
export const selectDetailModalFlag = (state) => state.detail.detailModal;
export const selectSliderFlag = (state) => state.detail.slider;
export default detailSlice.reducer;
