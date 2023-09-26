import { createReducer } from "@reduxjs/toolkit";
const initialState = () => {
  let ls = localStorage.getItem("cartItems");
  let cartItems = ls ? JSON.parse(ls) : [];
  ls = localStorage.getItem("shippingInfo");
  let shippingInfo = ls ? JSON.parse(ls) : {};
  return { cartItems,shippingInfo};
};
export const cartReducer = createReducer(initialState, {
  ADD_TO_CART: (state, action) => {
    let arr=[]
    for(let i=0;i<state.cartItems.length;i++){
      if(state.cartItems[i].product!=action.payload.product){
        arr.push(state.cartItems[i])
      }
    }
    arr.push(action.payload)
    state.cartItems=arr
  },
  REMOVE_FROM_CART: (state, action) => {
    const id = action.payload;
    let arr=[]
    for(let i=0;i<state.cartItems.length;i++){
      if(state.cartItems[i].product!=id){
        arr.push(state.cartItems[i])
      }
    }
    state.cartItems=arr
  },
  SAVE_SHIPPING_INFO:(state,action)=>{
    state.shippingInfo=action.payload
  }
});
