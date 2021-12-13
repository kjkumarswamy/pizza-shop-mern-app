import axios from "../../helpers/axios";
import { pizzaConstants } from "../constants";

//add pizza
export const addPizzaAction = (pizza) => {
  return async (dispatch) => {
    try {
      dispatch({ type: pizzaConstants.ADD_PIZZA_REQUEST });
      const res = await axios.post("/pizzas/addpizzas", { pizza });
      if (res.status === 201) {
        dispatch({
          type: pizzaConstants.ADD_PIZZA_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        dispatch(getAllPizzaAction());
      } else {
        dispatch({
          type: pizzaConstants.ADD_PIZZA_FAILURE,
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

//get all pizzas
export const getAllPizzaAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: pizzaConstants.GET_ALL_PIZZA_REQUEST });
      const res = await axios.get("/pizzas/getpizzas");
      if (res.status === 200) {
        dispatch({
          type: pizzaConstants.GET_ALL_PIZZA_SUCCESS,
          payload: {
            pizzas: res.data.pizzas,
          },
        });
      } else {
        dispatch({
          type: pizzaConstants.GET_ALL_PIZZA_FAILURE,
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

//get pizza by id
export const getPizzaByIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: pizzaConstants.GET_PIZZABYID_REQUEST });
      const res = await axios.get(`/pizzas/getpizzabyid/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pizzaConstants.GET_PIZZABYID_SUCCESS,
          payload: {
            pizza: res.data.pizza,
          },
        });
      } else {
        dispatch({
          type: pizzaConstants.GET_PIZZABYID_FAILURE,
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

//update pizza
export const updatePizzaAction = (pizza) => {
  return async (dispatch) => {
    try {
      dispatch({ type: pizzaConstants.UPDATE_PIZZA_REQUEST });

      const res = await axios.put("/pizza/update", { ...pizza });
      if (res.status === 200) {
        dispatch({
          type: pizzaConstants.UPDATE_PIZZA_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        dispatch(getAllPizzaAction());
        dispatch(getPizzaByIdAction(pizza.id));
      } else {
        dispatch({
          type: pizzaConstants.UPDATE_PIZZA_FAILURE,
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

//delete pizza
export const deletePizzaAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: pizzaConstants.DELETE_PIZZA_REQUEST });
      const res = await axios.delete(`/pizza/delete/${id}`);
      if (res.status === 200) {
        dispatch({
          type: pizzaConstants.DELETE_PIZZA_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        dispatch(getAllPizzaAction());
      } else {
        dispatch({
          type: pizzaConstants.DELETE_PIZZA_FAILURE,
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
