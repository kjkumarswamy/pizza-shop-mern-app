import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authAction";

const Navigationbar = () => {
  const dispatch = useDispatch();
  const { authenticate, user } = useSelector((state) => state.loginState);
  const cartState = useSelector((state) => state.cart);
  const renderLoggedinLinks = () => {
    return (
      <>
        <NavDropdown title={user.username} id="basic-nav-dropdown">
          <NavLink to="/order" className="dropdown-item">
            Order
          </NavLink>
          <NavLink to="/admin" className="dropdown-item">
            Admin
          </NavLink>
          <NavDropdown.Item onClick={() => dispatch(logoutAction())}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/cart" className="nav-link">
          Cart
          <Badge bg="warning" text="dark">
            {cartState.cartItems.length}
          </Badge>
          <Badge bg="warning" text="dark"></Badge>
        </NavLink>
      </>
    );
  };

  const renderLoggedoutLinks = () => {
    return (
      <>
        <NavLink to="/signin" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          Register
        </NavLink>
      </>
    );
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <NavLink to="/" className="navbar-brand">
            <Image src="images/logo.jpg" alt="" width="100" />
          </NavLink>
          <Nav className="ms-right">
            {authenticate ? renderLoggedinLinks() : renderLoggedoutLinks()}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
