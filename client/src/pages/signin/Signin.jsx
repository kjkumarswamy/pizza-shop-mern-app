import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/authAction";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const { authenticating, authenticate, error } = useSelector(
    (state) => state.loginState
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginAction(user));
  };

  if (authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row>
        <Col md="5">
          <div>
            {authenticating ? (
              <h5>Please wait... Loading...!</h5>
            ) : error ? (
              <h5>{error.message}</h5>
            ) : null}
          </div>
          <h1>Login</h1>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md="7">
          <Image
            src="https://i.ytimg.com/vi/YmHE55G82gg/maxresdefault.jpg"
            height="400"
            alt=""
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
