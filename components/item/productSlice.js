import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {
    addAllProduct: (state, action) => {
        return { products : state.products.concat(action.payload), isLoading : false }
    },
    addSearchedProduct: (state, action) => {
        return { products : action.payload, isLoading : false }
    },
    onLoading: (state)=>{state.isLoading = true},
    offLoading: (state)=>{state.isLoading = false}
  }
})

// Action creators are generated for each case reducer function
export const { addAllProduct, addSearchedProduct, onLoading, offLoading } = productSlice.actions
export const selectAllProduct = state => state.product.products;
export const selectIsLoading = state => state.product.isLoading;
export default productSlice.reducer