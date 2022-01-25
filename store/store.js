import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/cart/cartSlice'

export default configureStore({
  reducer: {
    cart: counterReducer,
  },
})