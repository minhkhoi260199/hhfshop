import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    isLoading: true,
  },
  reducers: {
    addAllCategory: (state, action) => {
        return { categories : action.payload, isLoading : false }
    },
    onLoadingCategory: (state)=>{state.isLoading = true},
  }
})

// Action creators are generated for each case reducer function
export const { addAllCategory, onLoadingCategory } = categorySlice.actions
export const selectAllCategory = state => state.category.categories;
export const selectIsLoadingCate = state => state.category.isLoading;
export default categorySlice.reducer