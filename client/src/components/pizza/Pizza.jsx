import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCartAction } from "../../redux/actions/cartAction";

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.loginState);
  const history = useHistory();
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = () => {
    if (!authenticate) {
      history.push("/signin");
    }
    dispatch(addToCartAction(pizza, quantity, varient));
  };

  return (
    <>
      <Container className="mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            height="180px"
            src={pizza.image}
            style={{ cursor: "pointer" }}
            onClick={handleShow}
          />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Row>
              <hr />
              <Col md={7}>
                <h6>Select Varients</h6>
                <select onChange={(e) => setVarient(e.target.value)}>
                  {pizza.varients.map((varient, i) => (
                    <option value={varient} key={i}>
                      {varient}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={5}>
                <h6>Quantity</h6>
                <select onChange={(e) => setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={v + 1} key={i}>
                      {v + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col md={7}>
                Price : &nbsp;
                {pizza.prices[0][varient] * quantity}
                /- Rs
              </Col>
              <Col md={5}>
                <Button
                  className="bg-warning btn-sm"
                  onClick={() => addToCartHandler()}
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Image src={pizza.image} height="200px" width="100%" />
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "flex-start" }}>
            <div>
              <h5>Description : </h5>
              <h6>{pizza.description}</h6>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Pizza;
