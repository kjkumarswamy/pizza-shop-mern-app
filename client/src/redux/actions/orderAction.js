import { orderConstants } from "../constants";
import axios from "../../helpers/axios";

//Add order
export const placeOrderAction = (token, subTotal) => {
  return async (dispatch, getState) => {
    dispatch({ type: orderConstants.PLACE_ORDER_REQUEST });
    const currentUser = getState().loginState.user;
    const cartItems = getState().cart.cartItems;
    try {
      const res = await axios.post("/orders/placeorder", {
        token,
        subTotal,
        currentUser,
        cartItems,
      });
      if (res.status === 200) {
        dispatch({
          type: orderConstants.PLACE_ORDER_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      } else {
        dispatch({
          type: orderConstants.PLACE_ORDER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//get user orders
export const getUserOrderAction = () => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.GET_USER_ORDER_REQUEST });
    try {
      const res = await axios.get("/orders/getuserorder");
      if (res.status === 200) {
        dispatch({
          type: orderConstants.GET_USER_ORDER_SUCCESS,
          payload: {
            order: res.data.order,
          },
        });
      } else {
        dispatch({
          type: orderConstants.GET_USER_ORDER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//get all orders
export const getAllOrdersAction = () => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.GET_ALL_ORDER_REQUEST });
    try {
      const res = await axios.get("/orders/getallorder");
      if (res.status === 200) {
        dispatch({
          type: orderConstants.GET_ALL_ORDER_SUCCESS,
          payload: {
            orders: res.data.orders,
          },
        });
      } else {
        dispatch({
          type: orderConstants.GET_ALL_ORDER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//deliver orders
export const orderDeliveredAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.DELIVER_ORDER_REQUEST });
    try {
      const res = await axios.post("/orders/delivered", { id });
      if (res.status === 200) {
        dispatch({
          type: orderConstants.DELIVER_ORDER_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        alert("Delivered success");
        dispatch(getAllOrdersAction());
      } else {
        dispatch({
          type: orderConstants.DELIVER_ORDER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
