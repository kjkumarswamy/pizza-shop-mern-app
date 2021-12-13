import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersAction,
  orderDeliveredAction,
} from "../../redux/actions/orderAction";
import { Table, Button } from "react-bootstrap";
import moment from "moment";

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.allOrders);
  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [dispatch]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>SL No</td>
            <td>Order Id</td>
            <td>Email</td>
            <td>User Id</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item._id}</td>
                <td>{item.email}</td>
                <td>{item.userId}</td>
                <td>Rs {item.orderAmount} /- </td>
                <td>{moment(item.createdAt).format("ll")}</td>
                <td>
                  {item.isDelivered ? (
                    <h6 style={{ color: "green" }}>Delivered</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => dispatch(orderDeliveredAction(item._id))}
                      >
                        Deliver
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderList;
