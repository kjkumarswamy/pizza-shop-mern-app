import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Policy from "../../pages/policy/Policy";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";
import Cart from "../../pages/cart/Cart";
import Admin from "../../pages/admin/Admin";
import Order from "../../pages/order/Order";
import PrivateRoute from "../hoc/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/policy" component={Policy} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/cart" component={Cart} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/order" component={Order} />
      <Route path="*" component={Home} />
    </Switch>
  );
};

export default Routes;
