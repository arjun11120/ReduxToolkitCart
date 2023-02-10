import { configureStore } from "@reduxjs/toolkit";
import postReducer from './features/postSlice';
import countReducer from '../redux/features/counterSlice'
import cartReducer from '../redux/features/selectSlice'

export default configureStore({
    reducer:{
        post:postReducer,
        count:countReducer,
        cart:cartReducer,
    }
})