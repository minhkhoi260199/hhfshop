import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {

      let flag = true
      state.value.map((item, key) => {
        //check for newCartItem or not
        if(item.idProduct == action.payload.idProduct){
          flag = false
          // state.value[key].quantity = Number(item.quantity)+Number(action.payload.quantity)
          state.value[key].quantity = Number(action.payload.quantity)
        }
      });
      // console.log("New state:"+JSON.stringify(state.value));
      
      if(flag){ 
        return { value : state.value.concat(action.payload) }
      }

    },
    removeCartItem: (state, action) => {
      state.value.some((item, index) => {
        if(item.idProduct == action.payload){
          state.value.splice(index,1);
        }
      })
    },
    increment: (state, action) => {
      state.value.forEach((item, index) => {
        if(item.idProduct == action.payload){
          if(state.value[index].quantity < 10){
            state.value[index].quantity++
          }
        }
      })
    },
    decrement: (state, action) => {
      state.value.forEach((item, index) => {
        if(item.idProduct == action.payload){
          if(state.value[index].quantity > 1){
            state.value[index].quantity--
          }
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, removeCartItem } = cartSlice.actions
export const selectCart = state => state.cart.value;
export default cartSlice.reducer