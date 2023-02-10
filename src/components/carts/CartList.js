import React from 'react'
import { useSelector } from "react-redux";

import Header from '../header/header'
import '../header/header.css'

function CartList() {
  const { cartList } = useSelector((state) => state.cart);
  // console.log(' cartlist page',cartList );
  return (
    <div>
      <Header/>
      <h1>{cartList.id}</h1>
    </div>
  )
}

export default CartList;
