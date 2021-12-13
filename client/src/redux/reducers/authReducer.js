import { authConstants } from "../constants";

//regiser reducer
const signupState = {
  loading: false,
  message: "",
  error: null,
};

export const registerReducer = (state = signupState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case authConstants.SIGNUP_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case authConstants.SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//login & logout reducer
const signinState = {
  token: null,
  user: {
    username: "",
    email: "",
  },
  authenticating: false,
  authenticate: false,
  error: null,
  loading: false,
  message: "",
};

export const loginReducer = (state = signinState, action) => {
  switch (action.type) {
    case authConstants.SIGNIN_REQUEST:
      return { ...state, authenticating: true };
    case authConstants.SIGNIN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticate: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case authConstants.SIGNIN_FAILURE:
      return {
        ...state,
        authenticating: false,
        authenticate: false,
        error: action.payload.error,
      };
    case authConstants.SIGNOUT_REQUEST:
      return { ...state, loading: true };
    case authConstants.SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticate: false,
        message: action.payload.message,
      };
    case authConstants.SIGNOUT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
