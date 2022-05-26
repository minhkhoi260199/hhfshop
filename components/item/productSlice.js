import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {
    addAllProduct: (state, action) => {
        //concat for lazy loading
        return { products : state.products.concat(action.payload), isLoading : false }
    },
    addSearchedProduct: (state, action) => {
        return { products : action.payload, isLoading : false }
    },
    onLoadingProduct: (state)=>{state.isLoading = true},
    offLoadingProduct: (state)=>{state.isLoading = false}
  }
})

// Action creators are generated for each case reducer function
export const { addAllProduct, addSearchedProduct, onLoadingProduct, offLoadingProduct } = productSlice.actions
export const selectAllProduct = state => state.product.products;
export const selectIsLoadingProduct = state => state.product.isLoading;
export default productSlice.reducer