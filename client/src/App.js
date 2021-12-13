import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbar/Topbar";
import Routes from "./components/routes/Routes";
import Navbar from "./components/navigationbar/Navigationbar";
import { useSelector, useDispatch } from "react-redux";
import { isUserloggedin } from "./redux/actions/authAction";
import { getAllPizzaAction } from "./redux/actions/pizzaAction";

const App = () => {
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.loginState);

  useEffect(() => {
    if (!authenticate) {
      dispatch(isUserloggedin());
    }
  }, [dispatch, authenticate]);

  useEffect(() => {
    dispatch(getAllPizzaAction());
  }, [dispatch]);

  return (
    <>
      <Topbar />
      <Navbar />
      <Routes />
    </>
  );
};

export default App;
