import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const INITIAL_STATE = {
  cartList:[],
  cartCount: 0,
};

const cartSlice = createSlice({
  name:"cart",
  count : 0,
  initialState: INITIAL_STATE,
  reducers: {
      addToCart: (state, action)=>{
        const itemExist = state.cartList.find((item) => item.id === action.payload.id);
        if(itemExist){
            state.cartList.forEach((item) => {
                if(item?.id === action.payload.id){
                    item.count += 1;
                };
                toast.info("Increased product quantity", {
                    position: "bottom-left",
                  });
            });
        }else{
            state.cartList.push({
            ...action.payload,
            count:1,
            
            });
            toast.success("Product added to cart", {
                position: "bottom-left",
              });
        }
    },
}
})
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;