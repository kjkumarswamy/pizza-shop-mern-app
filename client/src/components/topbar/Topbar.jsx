import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import jwt_decode from "jwt-decode";
import { logoutAction } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Topbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //logout if jwt expires
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const time = decodedToken.exp * 1000 < new Date().getTime();
        if (time) {
          alert("session time out");
          dispatch(logoutAction());
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <NavLink to="/" className="navbar-brand">
            <h6>
              <MdLocalOffer className="text-warning" />
              &nbsp; Free Home delivery on Order Above 500/- Rupees
            </h6>
          </NavLink>
          <Nav className="me-right">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/policy" className="nav-link">
              Terms and policy
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
