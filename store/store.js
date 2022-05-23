import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/cart/cartSlice'
import invoiceReducer from '../components/invoice/invoiceSlice'
import categoryReducer from '../components/categoryBar/categorySlice'
import productReducer from '../components/item/productSlice'
import bestSellerReducer from '../components/bestSeller/bestSellerSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    invoice: invoiceReducer,
    bestSeller: bestSellerReducer,
    category: categoryReducer
  },
})