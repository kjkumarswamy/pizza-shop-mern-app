import { orderConstants } from "../constants";

//place order
export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderConstants.PLACE_ORDER_REQUEST:
      return { ...state, loading: true };
    case orderConstants.PLACE_ORDER_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case orderConstants.PLACE_ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const orderState = {
  loading: false,
  order: [],
  error: "",
};

//get user orders
export const getUserOrderReducer = (state = orderState, action) => {
  switch (action.type) {
    case orderConstants.GET_USER_ORDER_REQUEST:
      return { ...state, loading: true };
    case orderConstants.GET_USER_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload.order,
      };
    case orderConstants.GET_USER_ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

//get all orders
const allOrderState = {
  loading: false,
  orders: [],
  error: null,
};

export const AllOrderReducer = (state = allOrderState, action) => {
  switch (action.type) {
    case orderConstants.GET_ALL_ORDER_REQUEST:
      return { ...state, loading: true };
    case orderConstants.GET_ALL_ORDER_SUCCESS:
      return { ...state, loading: false, orders: action.payload.orders };
    case orderConstants.GET_ALL_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//deliver orders
const deliverStatus = {
  loading: false,
  message: "",
  error: null,
};

export const orderDeliverStatus = (state = deliverStatus, action) => {
  switch (action.type) {
    case orderConstants.DELIVER_ORDER_REQUEST:
      return { ...state, loading: true };
    case orderConstants.DELIVER_ORDER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case orderConstants.DELIVER_ORDER_FAILURE:
      return { ...state, loadin: false, error: action.payload.error };
    default:
      return state;
  }
};
