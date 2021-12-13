import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/authAction";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(
    (state) => state.registerState
  );
  const { authenticate } = useSelector((state) => state.loginState);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerhandler = (e) => {
    e.preventDefault();
    const user = { username, email, password, confirmPassword };
    if (password !== confirmPassword) {
      alert("Password and confirm password is not matching");
    } else {
      dispatch(registerAction(user));
    }
  };

  if (authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row>
        <div style={{ textAlign: "center", color: "tomato" }}>
          {loading ? (
            <h4>Loading... please wait...!</h4>
          ) : error ? (
            <h4>{error}</h4>
          ) : message ? (
            <h4>{message}</h4>
          ) : null}
        </div>
        <Col md="5">
          <h1>Registration</h1>
          <Form onSubmit={registerhandler}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
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

            <Form.Group className="mb-3" controlId="formBasicCPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
        <Col md="7">
          <Image
            src="https://www.soocial.com/wp-content/uploads/2021/04/Pizza-Restaurant-Names.jpg"
            width="650"
            height="300"
            alt=""
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
