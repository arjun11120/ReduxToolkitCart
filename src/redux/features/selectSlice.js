import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const INITIAL_STATE = {

  cartList:[],
  cartCount: 0,
  count:0 ,
};

const cartSlice = createSlice({
  name:"cart",
  initialState: INITIAL_STATE,
  reducers: {
      addToCart: (state, action)=>{
        const itemExist = state.cartList.find((item) => item.id === action.payload.id);
        if(itemExist){
            state.cartList.forEach((item) => {
                // if(item?.id === action.payload.id){
                    state.count += 1;
                // };
                toast.info("Increased product quantity", {
                    position: "bottom-left",
                  });
            });
        }else{
            state.cartList.push({
            ...action.payload,
            count:1,
            
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
    increment(state,action){
      console.log("state.cartList in cartlist",action.payload.id)
      const itemExist = state.cartList.find((item) => item.id === action.payload.id);
        console.log(itemExist);

      // if (state.cartList[itemIndex].cartCount > 0 ){
      //   console.log('looping working');
      // }

      //   state.cartList[itemIndex].cartCount += 1;
      // }else if(state.cartList[itemIndex].cartCount === 1){
      //   const nextCartItem = state.cartList.filter(
      //     (item) => item.id !== action.payload.id);
      //     state.cartList = nextCartItem;
      }
  },
}
)
export const { addToCart , removeCart ,increment } = cartSlice.actions;

export default cartSlice.reducer;