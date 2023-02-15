import { configureStore } from "@reduxjs/toolkit";
import postReducer from './features/postSlice';
import cartReducer from '../redux/features/selectSlice'

export default configureStore({
    reducer:{
        post:postReducer,
        cart:cartReducer,
    }
})