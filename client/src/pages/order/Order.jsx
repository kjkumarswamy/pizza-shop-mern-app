import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getUserOrderAction } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.getUserOrder);

  useEffect(() => {
    dispatch(getUserOrderAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        {order &&
          order.map((order, i) => (
            <Row className="mb-3" key={i}>
              <Col md={4}>
                <h4>Orders</h4>
                {order.orderItems.map((item, i) => (
                  <h6 key={i}>
                    {i + 1} {item.name} [{item.varient}] * {item.quantity} =
                    {item.price}
                  </h6>
                ))}
                <h5>Staus : {order.isDelivered ? "Delivered" : "Pending"}</h5>
              </Col>
              <Col md={4}>
                <h4>Address</h4>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city} </h6>
                <h6>Country : {order.shippingAddress.country}</h6>
                <h6>Pincode : {order.shippingAddress.pincode}</h6>
              </Col>
              <Col md={4}>
                <h4>OrderInfo</h4>
                <h6>Order Amount : {order.orderAmount} /- Rs</h6>
                <h6>Transaction Id : {order.transactionId}</h6>
                <h6>Order Id : {order._id}</h6>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default Order;
