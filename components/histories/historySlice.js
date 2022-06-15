import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    value: [],
    detail: [],
    historyModal: false,
    historyDetailModel: false,
  },
  reducers: {
    openHistoryModal: (state) => {
      state.historyModal = true;
    },
    openHistoryDetailModal: (state) => {
      state.historyDetailModel = true;
    },
    closeHistoryModal: (state) => {
      state.historyModal = false;
    },
    closeHistoryDetailModal: (state) => {
      state.historyDetailModel = false;
    },
    addHistoryList: (state, action) => {
      return { value: action.payload };
    },
    addDetailList: (state, action) => {
      return { detail: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addHistoryList,
  addDetailList,
  openHistoryModal,
  openHistoryDetailModal,
  closeHistoryModal,
  closeHistoryDetailModal
} = historySlice.actions;
export const selectHistoryList = (state) => state.history.value;
export const selectHistoryDetailList = (state) => state.history.detail;
export const selectHistoryModalFlag = (state) => state.history.historyModal;
export const selectHistoryDetailModalFlag = (state) =>
  state.history.historyDetailModel;
export default historySlice.reducer;
