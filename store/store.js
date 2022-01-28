import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/cart/cartSlice'
import invoiceReducer from '../components/invoice/invoiceSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    invoice: invoiceReducer,
  },
})