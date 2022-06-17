import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    addrModalFlag: false,
    shippingModalFlag: false,
    confirmModalFlag: false,
    value: {
      // "name" : "",
      // "phone" : "",
      // "province" : "Hồ Chí Minh",
      // "district" : "Quận 10",
      // "ward" : "phường 12",
      // "addressDetail" : "135 Thành Thái",
    },
  },
  reducers: {
    addInfo: (state, action) => {
        console.log("payload:"+JSON.stringify(action.payload));
        return { value : action.payload,
                confirmModalFlag: true }
    },
    openAddrModal: (state) => {state.addrModalFlag = true},
    closeAddrModal: (state) => {state.addrModalFlag = false},
    openShippingModal: (state) => {state.shippingModalFlag = true},
    closeShippingModal: (state) => {state.shippingModalFlag = false},
    openConfirmModal: (state) => {state.confirmModalFlag = true},
    closeConfirmModal: (state) => {state.confirmModalFlag = false},
  },
})

// Action creators are generated for each case reducer function
export const { openAddrModal,
              closeAddrModal,
              openShippingModal,
              closeShippingModal,
              openConfirmModal,
              closeConfirmModal,
              addInfo } = invoiceSlice.actions
export const selectInvoiceInfo = state => state.invoice.value;
export const selectAddrModalFlag = state => state.invoice.addrModalFlag;
export const selectShippingModalFlag = state => state.invoice.shippingModalFlag;
export const selectConfirmModalFlag = state => state.invoice.confirmModalFlag;
export default invoiceSlice.reducer