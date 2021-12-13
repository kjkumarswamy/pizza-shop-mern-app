import axios from "../../helpers/axios";
import { userConstants } from "../constants";

//all user list
export const getUserAction = () => {
  return async (dispatch) => {
    dispatch({ type: userConstants.GET_USER_REQUEST });
    try {
      const res = await axios.get("/user/allusers");
      if (res.status === 200) {
        dispatch({
          type: userConstants.GET_USER_SUCCESS,
          payload: { users: res.data.users },
        });
      } else {
        dispatch({
          type: userConstants.GET_USER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//delete user
export const deleteUserAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.DELETE_USER_REQUEST });
    try {
      const res = await axios.delete(`/user/delete/${id}`);
      if (res.status === 200) {
        dispatch({
          type: userConstants.DELETE_USER_SUCCESS,
          payload: { message: res.data.message },
        });
        dispatch(getUserAction());
      } else {
        dispatch({
          type: userConstants.DELETE_USER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
