import { userConstants } from "../constants";

const userState = {
  loading: false,
  users: [],
  error: "",
};

export const getUserReducer = (state = userState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };
    case userConstants.GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//delete user
const deleteUserState = {
  loading: false,
  users: [],
  error: "",
};

export const deleteUserReducer = (state = deleteUserState, action) => {
  switch (action.type) {
    case userConstants.DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.DELETE_USER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case userConstants.DELETE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
