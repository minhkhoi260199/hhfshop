import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addAllProduct: (state, action) => {
        return { products : state.products.concat(action.payload) }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addAllProduct } = productSlice.actions
export const selectAllProduct = state => state.product.products;
export default productSlice.reducer