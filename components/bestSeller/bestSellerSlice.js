import { createSlice } from '@reduxjs/toolkit'

export const bestSellerSlice = createSlice({
  name: 'bestSeller',
  initialState: {
    bestSeller: [],
    isLoading: true,
  },
  reducers: {
    addAllBestSeller: (state, action) => {
        return { products : action.payload, isLoading : false }
    },
    onLoadingBestSeller: (state)=>{state.isLoading = true},
  }
})

// Action creators are generated for each case reducer function
export const { addAllBestSeller, onLoadingBestSeller } = bestSellerSlice.actions
export const selectBestSeller = state => state.bestSeller.bestSeller;
export const selectIsLoadingBestSeller = state => state.bestSeller.isLoading;
export default bestSellerSlice.reducer