import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import { Card, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Rating from '@mui/material/Rating';
import Header from "../header/header"
import { useNavigate } from 'react-router-dom';
import{
  addToCart
}
from '../../redux/features/selectSlice';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddToCart = (user) => {
    dispatch(addToCart(user));
    
    navigate('/cart');
  };
  const newPosts = posts;
  const user = newPosts.find((item) => item.id === data);

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
                    user?.rating.rate <= 2? { background: "red" }
                    : user?.rating.rate <= 3?  { background: "orange" }
                    : user?.rating.rate > 3?  {background : "green" }
                    :null
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
                    
                  <div>
                    <Rating name="read-only" style={
                    user?.rating.rate <= 2? { color: "red" }
                    : user?.rating.rate <= 3?  { color: "orange" }
                    : user?.rating.rate > 3?  { color: "green" }
                    :null
                  } defaultValue={2.5} value={user?.rating.rate} readOnly />
                    </div>
                    <div className="off-counter d-flex">
                      <span className='count-text text-13'>Price</span>
                      <span className='count-text text-13'>${user?.price}</span>
                    </div>
                  </div> 
                </div>  
              </div>
              <div className="off-btn">
                <button 
                value={user?.id}
                onClick={() => handleAddToCart(user)}
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
