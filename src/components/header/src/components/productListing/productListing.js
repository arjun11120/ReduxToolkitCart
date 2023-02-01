import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/features/postSlice";
import { Card, Button } from "react-bootstrap";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./cards.css";

function ProductListing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
    console.log(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="card-items align-center">
      {posts.map((user) => (
        <div className="d-inline-flex" key={user.id}>
          <Card className="cardLay m-2 p-2">
            <Card.Img className="productImage" variant="top" src={user.image} />
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
                className="position-absolute bottom-0 start-0"
                variant="secondary"
                onClick={handleShow}
              >
                Buy Your Product
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{user.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card.Img className='productImage' variant="top" src={user.image}/>
                {user.description}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Add to Cart</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
