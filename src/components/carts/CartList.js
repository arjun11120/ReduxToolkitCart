import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./carts.css";

import {
  removeCart,
  increment,
  decrement
} from "../../redux/features/selectSlice";

import Header from "../header/header";
import "../header/header.css";
import { Link } from "react-router-dom";

function CartList() {
  const { cartList = [] } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveToCart = (user) => {
    dispatch(removeCart(user));
  };
  const handleIncrement = (id, count) => {
    dispatch(increment(id, count));
  };
  const handleDecrement = (id, count) => {
    dispatch(decrement(id, count));
  }
  const totalPrice = cartList?.map(item => item.price * item.count ).reduce((prev, next) => prev + next , 0 );
  return (
    <>
      <Header />
      <section className="h-100">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  <span>Check out</span>
                </MDBTypography>
              </div>
              <div className="d-block d-md-flex">
              <div>
              {cartList.map((products) => (
                <MDBCard className="" key={products?.id}>
                  <MDBCardBody className="">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={products?.image}
                          alt="Cotton T-shirt"
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{products?.title}</p>
                      </MDBCol>
                      <MDBCol
                        md="3"
                        lg="3"
                        xl="2"
                        className="d-flex align-items-center justify-content-around"
                      >
                        <Button
                          color="link"
                          onClick={() =>
                            handleDecrement(products?.id, products?.count)
                          }
                          className="inc-btn"
                        >
                          <FontAwesomeIcon
                            className="text-13"
                            icon={faMinus}
                          ></FontAwesomeIcon>
                        </Button>
                        {products?.count}
                        <Button
                          color="link"
                          onClick={() =>
                            handleIncrement(products?.id, products?.count)
                          }
                          className="inc-btn"
                        >
                          <FontAwesomeIcon
                            className="text-13"
                            icon={faAdd}
                          ></FontAwesomeIcon>
                          <MDBIcon fas icon="plus" />
                        </Button>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">  
                      <h6 className="text-secondary">Price ${products?.price}</h6>
                        <MDBTypography tag="h5" className="mb-0">
                          Total ${(products?.price * products?.count).toFixed(2)}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a
                          href="#!"
                          className="text-danger"
                          onClick={() => handleRemoveToCart(products)}
                        >
                          <i className="bi bi-trash">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
                          </i>
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
                
              ))}
              </div>
              <div>
              <MDBCard className="">
                <MDBCardBody>
                  <MDBRow className=" justify-content-between align-items-center ">
                    <MDBCol className="">
                      <div className="item-total">
                        <span className="">Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <Button 
                      className="ms-3 sub-btn border-none" 
                      color="warning" 
                      block size="lg"
                      >
                        Buy
                      </Button>
                      
                      <Link className="fw-normal" to="/">Continue to shopping</Link>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default CartList;
