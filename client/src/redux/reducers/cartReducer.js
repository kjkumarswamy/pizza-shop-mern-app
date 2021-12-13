//add cart and delete cart
const inititalState = {
  loading: false,
  cartItems: [],
  error: "",
};

export const cartReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExists) {
        return {
          ...state.cartItems,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state.cartItems,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
