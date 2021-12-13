import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Checkout from "../../components/checkout/Checkout";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartAction,
  deleteCartAction,
} from "../../redux/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>My Cart</h1>
          {cartItems.map((item, i) => (
            <Row key={i} className="mb-2">
              <Col md={6}>
                <h5>{item.name}</h5>
                <h6>Price : {item.price}</h6>
                <h6>
                  Quantity &nbsp;
                  <FaMinusCircle
                    className="text-danger"
                    onClick={() =>
                      dispatch(
                        addToCartAction(item, item.quantity - 1, item.varient)
                      )
                    }
                  />{" "}
                  &nbsp;
                  {item.quantity} &nbsp;
                  <FaPlusCircle
                    className="text-success"
                    onClick={() =>
                      dispatch(
                        addToCartAction(item, item.quantity + 1, item.varient)
                      )
                    }
                  />
                </h6>
              </Col>
              <Col md={4}>
                <img src={item.image} alt="" height="70" width="100" />
              </Col>
              <Col md={2}>
                <FaTrash
                  className="text-danger"
                  onClick={() => dispatch(deleteCartAction(item))}
                />
              </Col>
              <hr />
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <h1>Payment Info</h1>
          <h4>Sub total</h4>
          <h4>Rs {subTotal} /-</h4>
          <Checkout subTotal={subTotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
