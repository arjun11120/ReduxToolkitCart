import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import { Card, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from "@fortawesome/free-solid-svg-icons"
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons"

import "./cards.css";

function ProductListing() {
  const [show, setShow] = useState(false);
  const [data, setId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };

  // const handleShow = () =>{
  //   setShow(true);
  // }
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(data);
    dispatch(getPost());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  console.log('post',posts);
  // const user = posts.filter((item) => item.id === data);
  const newPosts = posts;
  const user = newPosts.find((item) => item.id === data);
  console.log(user?.price);
  const [count,setCount] = useState(1);
  const [total, setTotal] = useState(user?.price);
  const addCount = () => {
    setCount(count => count + 1);
    console.log("count",count);
    setTotal(totalprice => count  * user?.price);
  };
  console.log('total',total);
  console.log("selected user data", user);
  return (
    <>
      <div className="card-items align-center">
        {posts.map((user) => (
          <div className="d-inline-flex" key={user.id}>
            <Card className="cardLay m-2 p-2">
              <Card.Img
                className="productImage"
                variant="top"
                src={user.image}
              />
              <Card.Body className="">
                <Card.Title>{user.title}</Card.Title>
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
                <Button
                  value={user.id}
                  className="position-absolute bottom-0 start-0 btpBtn "
                  onClick={() => {
                    handleShow(user.id);
                  }}
                >
                  Buy Your Product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
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
                    <button className='round-btn' onClick={addCount}><FontAwesomeIcon className='text-secondary text-13' icon={faMinusCircle}></FontAwesomeIcon></button>
                    {/* <button className='round-btn' onClick={addCount} ><FontAwesomeIcon className='text-secondary text-13' icon={faAdd}></FontAwesomeIcon></button> */}
                    </span>
                    <div className="off-sub">
                      <span className='count-text'>{count}</span>
                    </div>
                    </div>
                    <div className="off-counter d-flex">
                      <span className='count-text text-13'>Price</span>
                      <span className='count-text text-13'>${user?.price}</span>
                    </div>
                    <div className="off-counter d-flex">
                    <h6>Total</h6>
                    <h6>${total}</h6>
                    </div>
                  </div> 
                </div>
                <div className="off-btn">
                  <button>PROCEED TO CART</button>
                </div>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default ProductListing;
