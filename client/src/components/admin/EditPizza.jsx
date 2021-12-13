import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPizzaByIdAction,
  updatePizzaAction,
} from "../../redux/actions/pizzaAction";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const EditPizza = (props) => {
  const { pizzaid } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const { pizza } = useSelector((state) => state.getPizzaById);

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (pizza) {
      if (pizza._id === pizzaid) {
        setName(pizza.name);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setDesc(pizza.description);
        setImage(pizza.image);
        setCategory(pizza.category);
      } else {
        dispatch(getPizzaByIdAction(pizzaid));
      }
    }
  }, [dispatch, pizzaid, pizza]);

  const updatePizzaHanlder = (e) => {
    e.preventDefault();
    const pizza = {
      id: pizzaid,
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
    dispatch(updatePizzaAction(pizza));
    history.push("/admin/pizzalist");
  };

  return (
    <>
      <Form onSubmit={updatePizzaHanlder}>
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

export default EditPizza;
