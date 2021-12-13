// import axios from "../../helpers/axios";
// import { cartConstatnts } from "../constants";

//add to cart
export const addToCartAction = (pizza, quantity, varient) => {
  return (dispatch, getState) => {
    var cartItems = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varient: varient,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    };

    if (cartItems.quantity > 10) {
      alert("You can add only 10 pizzas");
    } else {
      if (cartItems.quantity < 1) {
        dispatch({ type: "DELETE_CART", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItems });
      }
    }
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

//delete to cart
export const deleteCartAction = (pizza) => {
  return (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
