import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const INITIAL_STATE = {

  cartList:[],
  cartCount: 1,
  count:1 ,
  totalPrice:1,
};

const cartSlice = createSlice({ 
  name:"cart",
  initialState: INITIAL_STATE,
  reducers: {
      addToCart: (state, action)=>{
        const itemExist = state.cartList.find((item) => item.id === action.payload.id);
        if(itemExist){
            state.cartList.forEach((item) => {
                toast.info("Increased product quantity", {
                  position: "bottom-left",
                });
            })
        }else{
            state.cartList.push({
            id:action.payload.id,
            image:action.payload.image,
            title:action.payload.title,
            price:action.payload.price,
            count:state.count,
            });
            toast.success(`Product added to cart`, {
              position: "bottom-left",
            });
        }
    },
    removeCart: (state, action)=>{
      const itemExist = state.cartList.filter((item) => item.id !== action.payload.id);
      if(itemExist){
        state.cartList = itemExist;
      }
    },
    increment(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload);
      if(item.count < 10){
      item.count++
      }
    },
    decrement(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload);
      if(item.count>1){
      item.count--
      }
    },
    handleBuy(state,action){
      
      console.log(action.payload,"action.payload");
    }
  }})
export const { addToCart , removeCart ,increment ,decrement ,totalCount ,handleBuy} = cartSlice.actions;

export default cartSlice.reducer;