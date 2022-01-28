import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    addrModalFlag: false,
    shippingModalFlag: false,
    confirmModalFlag: false,
    value: [],
  },
  reducers: {
    // addToCart: (state, action) => {

    //   let flag = true
    //   state.value.map((item, key) => {
    //     //check for newCartItem or not
    //     if(item.idProduct == action.payload.idProduct){
    //       flag = false
    //       state.value[key].quantity = Number(item.quantity)+Number(action.payload.quantity)
    //     }
    //   });
    //   if(flag){ 
    //     return { value : state.value.concat(action.payload) }
    //   }

    // },
    openAddrModal: (state) => state.addrModalFlg = true,
    closeAddrModal: (state) => state.addrModalFlg = false,
    openShippingModal: (state) => state.shippingModalFlag = true,
    closeShippingModal: (state) => state.shippingModalFlag = false,
    openConfirmModal: (state) => state.confirmModalFlg = true,
    closeConfirmModal: (state) => state.confirmModalFlg = false,
  },
})

// Action creators are generated for each case reducer function
export const { openAddrModal,
              closeAddrModal,
              openShippingModal,
              closeShippingModal,
              openConfirmModal,
              closeConfirmModal } = invoiceSlice.actions
export const selectInvoiceInfo = state => state.invoice.value;
export const selectAddrModalFlag = state => state.invoice.addrModalFlag;
export const selectShippingModalFlag = state => state.invoice.shippingModalFlag;
export const selectConfirmModalFlag = state => state.invoice.confirmModalFlag;
export default invoiceSlice.reducer