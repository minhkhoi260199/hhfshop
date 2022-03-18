import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/cart/cartSlice'
import invoiceReducer from '../components/invoice/invoiceSlice'
import productReducer from '../components/item/productSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    invoice: invoiceReducer,
  },
})