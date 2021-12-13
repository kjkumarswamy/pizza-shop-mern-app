import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrderAction } from "../../redux/actions/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrderAction(token, subTotal));
  };

  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51Jz1vVSBVzTgryF8s20s5QpeCQ5yWIC5wZ5vPtteDBkX3N13LxnHxQ2J9mp1hv5bfurrCy8XamtWOZQcQh0ctAGG00YQvkEDFv"
      currency="INR"
    >
      <Button>Pay now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
