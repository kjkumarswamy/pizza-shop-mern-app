import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "../reducers/authReducer";
import { getUserReducer, deleteUserReducer } from "../reducers/userReducer";
import {
  addPizzaReducer,
  getAllPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaReducer,
  deletePizzaReducer,
} from "../reducers/pizzaReducer";
import { cartReducer } from "./cartReducer";
import {
  getUserOrderReducer,
  placeOrderReducer,
  AllOrderReducer,
} from "../reducers/orderAction";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const rootReducer = combineReducers({
  registerState: registerReducer,
  loginState: loginReducer,
  getUsers: getUserReducer,
  deleteUser: deleteUserReducer,

  addPizza: addPizzaReducer,
  getAllPizza: getAllPizzaReducer,
  getPizzaById: getPizzaByIdReducer,
  updatePizza: updatePizzaReducer,
  deletePizza: deletePizzaReducer,

  cart: cartReducer,

  orderPlace: placeOrderReducer,
  getUserOrder: getUserOrderReducer,
  allOrders: AllOrderReducer,
});

export const initialState = {
  cart: {
    cartItems: cartItems,
  },
};
