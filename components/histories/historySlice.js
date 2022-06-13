import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: [],
  },
  reducers: {
    addHistoryList: (state, action) => {
        return { value : state.value.concat(action.payload) }
      }
  },
})

// Action creators are generated for each case reducer function
export const { addHistoryList } = historySlice.actions
export const selectHistory = state => state.history.value;
export default historySlice.reducer