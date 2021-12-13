import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPizzaAction } from "../../redux/actions/pizzaAction";

const AddPizza = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const addPizzaHandler = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      desc,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizzaAction(pizza));
    history.push("/admin/pizzalist");
  };

  return (
    <>
      <Form onSubmit={addPizzaHandler}>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Pizza Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Small Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Small Pizza Price"
              onChange={(e) => setSmallPrice(e.target.value)}
              value={smallPrice}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Medium Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Medium Pizza Price"
              onChange={(e) => setMediumPrice(e.target.value)}
              value={mediumPrice}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Large Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Large Pizza price"
              onChange={(e) => setLargePrice(e.target.value)}
              value={largePrice}
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-2" controlId="formGridAddress1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pizza Description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" id="formGridCheckbox">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pizza Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddPizza;
