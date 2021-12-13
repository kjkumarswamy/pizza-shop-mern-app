import axios from "../../helpers/axios";
import { authConstants } from "../constants";

//register
export const registerAction = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGNUP_REQUEST });
    try {
      const res = await axios.post("/user/signup", { ...user });
      console.log(res);
      if (res.status === 201) {
        dispatch({
          type: authConstants.SIGNUP_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.SIGNUP_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      const { data } = error.response;
      console.log(data.error);
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: {
          error: data.error,
        },
      });
    }
  };
};

//login
export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.SIGNIN_REQUEST });
      const res = await axios.post("/user/signin", { ...user });
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.SIGNIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        window.location.href = "/";
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.SIGNIN_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      dispatch({
        type: authConstants.SIGNIN_FAILURE,
        payload: {
          error: "Something went wrong",
        },
      });
    }
  };
};

//singout
export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGNOUT_REQUEST });
    try {
      const res = await axios.post("/user/signout");
      if (res.status === 200) {
        localStorage.clear();
        dispatch({
          type: authConstants.SIGNOUT_SUCCESS,
          payload: { message: res.data.message },
        });
      } else {
        dispatch({
          type: authConstants.SIGNOUT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.SIGNOUT_FAILURE,
        payload: { error: "Something went wrong" },
      });
    }
  };
};

//isuserloggedin
export const isUserloggedin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.SIGNIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.SIGNOUT_SUCCESS,
        payload: {
          error: "Something went wrong",
        },
      });
    }
  };
};
