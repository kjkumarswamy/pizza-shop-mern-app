import { pizzaConstants } from "../constants";

//add pizza
const addPizzaState = {
  loading: false,
  message: "",
  error: null,
};

export const addPizzaReducer = (state = addPizzaState, action) => {
  switch (action.type) {
    case pizzaConstants.ADD_PIZZA_REQUEST:
      return { ...state, loading: true };
    case pizzaConstants.ADD_PIZZA_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case pizzaConstants.ADD_PIZZA_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//get all pizzas
const getAllPizzasState = {
  loading: false,
  pizzas: [],
  error: null,
};

export const getAllPizzaReducer = (state = getAllPizzasState, action) => {
  switch (action.type) {
    case pizzaConstants.GET_ALL_PIZZA_REQUEST:
      return { ...state, loading: true };
    case pizzaConstants.GET_ALL_PIZZA_SUCCESS:
      return { ...state, loading: false, pizzas: action.payload.pizzas };
    case pizzaConstants.GET_ALL_PIZZA_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//get pizza by id
const getPizzaByidState = {
  loading: false,
  pizza: {},
  error: null,
};

export const getPizzaByIdReducer = (state = getPizzaByidState, action) => {
  switch (action.type) {
    case pizzaConstants.GET_PIZZABYID_REQUEST:
      return { ...state, loading: true };
    case pizzaConstants.GET_PIZZABYID_SUCCESS:
      return { ...state, loading: false, pizza: action.payload.pizza };
    case pizzaConstants.GET_PIZZABYID_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//update pizza
const updatePizzaState = {
  loading: false,
  message: "",
  error: null,
};

export const updatePizzaReducer = (state = updatePizzaState, action) => {
  switch (action.type) {
    case pizzaConstants.UPDATE_PIZZA_REQUEST:
      return { ...state, loading: true };
    case pizzaConstants.UPDATE_PIZZA_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case pizzaConstants.UPDATE_PIZZA_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//delete pizza
const deletePizzaState = {
  loading: false,
  message: "",
  error: null,
};

export const deletePizzaReducer = (state = deletePizzaState, action) => {
  switch (action.type) {
    case pizzaConstants.DELETE_PIZZA_REQUEST:
      return { ...state, loading: true };
    case pizzaConstants.DELETE_PIZZA_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case pizzaConstants.DELETE_PIZZA_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
