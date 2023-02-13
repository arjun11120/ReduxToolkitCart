import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import { Card, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faAdd} from "@fortawesome/free-solid-svg-icons"
// import {faMinus} from "@fortawesome/free-solid-svg-icons"
import Header from "../header/header"
import { useNavigate } from 'react-router-dom';
import{
  addToCart
}
from '../../redux/features/selectSlice';
// import {
//   increment,
//   decrement,
// } from '../../redux/features/counterSlice';

import "./cards.css";

function ProductListing() {
  
  const [show, setShow] = useState(false);
  const [data ,setData] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setData(id)
  };
    // const [show, setShow] = useState(false);
  // const [data, setId] = useState(1);
  // const handleClose = () => setShow(false);
  // const handleShow = (id) => {
  //   setShow(true);
  //   setId(id);
  // };
  // const count = useSelector((state) => state.count.count)
  const { posts } = useSelector((state) => state.post);
  const { cartList } = useSelector((state) => state.cart);
  console.log(' cartlist in product page',cartList );
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(data);
    dispatch(getPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddToCart = (user) => {
    dispatch(addToCart(user));
    
    navigate('/cart');
  };
  // console.log('post',posts);
  // const user = posts.filter((item) => item.id === data);
  const newPosts = posts;
  const user = newPosts.find((item) => item.id === data);
  // const priceTotal = user?.price * count;
//   const total = parseFloat(priceTotal.toFixed(2))  
//   const [buyData,setByData] = useState([]);
//   const handleBuy= () =>{
//   setByData(
//     buyData.push({
//       image:user?.image
//       })
//   )
// }
// const handleAddToCart = (product) => {
//   dispatch(addToCart(product));
// };
//   console.log(buyData);
  // console.log("user",user);
  // console.log("price :",user?.price,"count : ");
  // const [total, setTotal] = useState(0);
  // const [count,setCount] = useState(1);
  // const addCount = () => { 
  //   setCount(count => count + 1);
  //   console.log("count",count);
  //   setTotal(totalprice => ( count + 1 )  * user?.price);
  // };
  // const decCount = () => { 
  //   setCount(count => (count > 1 ? (count -  1):count ));
  //   setTotal(totalprice => ( count - 1 )  * user?.price);
  // };

  // console.log('total',total);
  // console.log("selected user data", user);]
  return (
    <>
    <Header/>
      <div className="card-items align-center" >
        {posts.map((user) => (
          <div className="d-inline-flex" 
           key={user.id}>
            <Card className="cardLay m-2 p-2">
              <Card.Img
                className="productImage"
                variant="top"
                src={user.image}
                onClick={() => {
                  handleShow(user.id);
                }}
              />
              <Card.Body className="">
                <Card.Title>{user.title}</Card.Title>
                <div className="d-inline-flex">
                <div
                  className="user-rating"
                  style={
                    user.rating.rate <= 2.5
                      ? { background: "orange" }
                      : { background: "green" }
                  }
                >
                  {user.rating.rate}
                </div>
                <div className="product-pricing">
                  ${user.price}
                  <Card.Text>{user.category}</Card.Text>
                </div>
                </div>
                <div className="position-relative m-0">
                <Button
                  value={user.id}
                  className=" bottom-0 start-0 btpBtn "
                  onClick={() => handleAddToCart(user)}
                >
                  Add To Cart
                </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <Offcanvas key={user?.id} show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{user?.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <div>
                <div className="off-item">
                  <img src={user?.image} alt=" " />
                </div>
                <div className="off-body">
                  <span>{user?.description}</span>
                </div>
                <div className="off-order">
                  <div className="counterItem">
                    <h6>Order Details</h6>
                    <div className="off-counter d-flex">
                    <span className='count-text text-13'>Number of Items
                    {/* <button className='round-btn' onClick={() => dispatch(decrement())}><FontAwesomeIcon className='text-secondary text-13' icon={faMinus}></FontAwesomeIcon></button> */}
                    {/* <button className='round-btn' onClick={() => dispatch(increment())}><FontAwesomeIcon className='text-secondary text-13' icon={faAdd}></FontAwesomeIcon></button> */}
                    {/* <button className='round-btn' onClick={addCount}><FontAwesomeIcon className='text-secondary text-13' icon={faAdd}></FontAwesomeIcon></button> */}
                    {/* <button className='round-btn' onClick={addCount} ><FontAwesomeIcon className='text-secondary text-13' icon={faAdd}></FontAwesomeIcon></button> */}
                    </span>
                    <div className="off-sub">  
                      {/* <span className='count-text text-13'>{count}</span> */}
                    </div>
                    </div>
                    <div className="off-counter d-flex">
                      <span className='count-text text-13'>Price</span>
                      <span className='count-text text-13'>${user?.price}</span>
                    </div>
                    <div className="off-counter d-flex">
                    <h6>Total</h6>
                    {/* <h6>${total}</h6> */}
                    {/* <h6>${Math.round(total * 100)/100}</h6> */}
                    </div>
                  </div> 
                </div>  
              </div>
              <div className="off-btn">
                <button 
                // onClick={handleBuy}
                >
                  PROCEED TO CART</button>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default ProductListing;
