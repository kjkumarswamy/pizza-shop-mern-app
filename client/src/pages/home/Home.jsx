import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../../components/pizza/Pizza";

const Home = () => {
  const { pizzas, loading, error } = useSelector((state) => state.getAllPizza);
  return (
    <Container>
      {loading ? <h4>Loading...!</h4> : error ? <h4>{error}</h4> : null}
      <Row>
        {pizzas
          ? pizzas.map((pizza, i) => (
              <Col md="4" key={i}>
                <Pizza pizza={pizza} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default Home;
