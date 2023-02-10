import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:1 ,
        total:0,
    },
    reducers:{
        increment(state){
            state.count = state.count < 10 ? state.count + 1 : state.count
        },
        decrement(state){
            state.count = state.count > 1 ? state.count - 1 : state.count;
        },
        // total(state){
        //     state.total = state.count * user?.price;
        // }
    },
    
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;