import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
export const cartSlice = createSlice({
name: "cart",
initialState,
reducers:{
    add:(state,action)=>{
        state.cart.push(action.payload)
    },
    remove:(state,action)=>{
        state.cart= state.cart.filter((item)=>item.id!==action.payload.id)
    }
}
})
export const {add,remove}= cartSlice.actions;
export default cartSlice.reducer;