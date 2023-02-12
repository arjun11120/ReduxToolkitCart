import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
} from '../../redux/features/counterSlice';
import './carts.css'

import Header from '../header/header'
import '../header/header.css'

function CartList() {
  const { cartList } = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count.count)
  const dispatch = useDispatch();
  console.log(' cartlist page', cartList);
  return (
    <>
    <Header/>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Check out
                </MDBTypography>
              </div>
              
              {cartList.map((products) => ( 

              <MDBCard className="rounded-3 mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage className="rounded-3" fluid
                        src={products.image}
                        alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">{products.title}</p>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2"
                      className="d-flex align-items-center justify-content-around">
                      <MDBBtn color="link" onClick={() => dispatch(decrement())} className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>{count}
                      <MDBBtn color="link" onClick={() => dispatch(increment())} className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                      ${products.price}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                        <MDBIcon fas icon="trash text-danger" size="lg" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              
      ))}


              <MDBCard className="mb-4">
                <MDBCardBody className="p-4 d-flex flex-row">
                  <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
                  <MDBBtn className="ms-3" color="warning" outline size="lg">
                    Apply
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

              <MDBCard>
                <MDBCardBody>
                  <MDBBtn className="ms-3" color="warning" block size="lg">
                    Apply
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  )
}

export default CartList;
