import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    searchResult: [],
  },
  reducers: {
    addAllProduct: (state, action) => {
        return { products : state.products.concat(action.payload) }
    },
    addSearchedProduct: (state, action) => {
        return { searchResult : action.payload }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addAllProduct } = productSlice.actions
export const selectAllProduct = state => state.product.products;
export const selectSearchProduct = state => state.product.searchResult;
export default productSlice.reducer