import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Old state:"+JSON.stringify(state.value));
      console.log("Payload :"+JSON.stringify(action.payload));
      
      let result = state.value.filter((item)=>{
          if(item.idProduct !== action.payload.idProduct){
            return item;
          }
      })
      return { value : result.concat(action.payload) }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions
export const selectCart = state => state.cart.value;
export default counterSlice.reducer