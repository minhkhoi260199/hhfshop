import { createSlice } from '@reduxjs/toolkit'

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    value: [],
  },
  reducers: {
    addOrderList: (state, action) => {
        return { value : state.value.concat(action.payload) }
      }
  },
})

// Action creators are generated for each case reducer function
export const { addOrderList } = cartSlice.actions
export const selectOrders = state => state.orders.value;
export default ordersSlice.reducer