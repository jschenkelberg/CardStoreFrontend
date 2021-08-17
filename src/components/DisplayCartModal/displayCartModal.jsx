import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import useFormRating from "../UseForm/useFormRating";

const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loadData, setLoadData] = useState(true);
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const jwt = localStorage.getItem("token");
    var res = await axios.get(`https://localhost:44394/api/shoppingcart`, {
      headers: { Authorization: "Bearer " + jwt },
    });
    setLoadData(false);
    console.log(res);
    setCart(res.data);
  };
  
  function callTwoThings() {
    handleShow();
    getCart();
  }

  useEffect(() => {
    getCart();
  }, [loadData]);

  return (
    <>
      <Button variant="primary" onClick={callTwoThings}>
        View Cart
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped">
            <thead>
              <th>Item Name</th>
              <th>Item Price</th>
            </thead>
            <tbody>
              {cart.map((cart) => {
                return (
                  <tr key={cart.merchName}>
                    <td>{cart.merchName}</td>
                    <td>${cart.merchPrice}</td>
                    <Button>Remove from cart</Button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button>Checkout</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingCart;
