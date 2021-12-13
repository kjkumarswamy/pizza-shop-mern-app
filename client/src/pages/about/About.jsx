import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-3">
      <h1>Who we are</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius
        dolorem qui animi aspernatur laborum maiores totam, dolore dolor
        molestiae excepturi harum optio, illum alias, a nisi quis fuga!
        Reiciendis repellendus consectetur assumenda rerum velit nihil nostrum
        et quod sapiente laboriosam, blanditiis ea impedit autem excepturi,
        recusandae vero magnam veniam mollitia labore eum, nulla similique
        nesciunt ad. Assumenda saepe libero praesentium numquam quae ducimus
        doloremque neque veritatis non, aperiam expedita dolore fugiat
        exercitationem consectetur sit labore nostrum, in nesciunt alias ad
        ratione. Nesciunt beatae, atque doloremque aperiam reiciendis incidunt
        totam nobis? Pariatur eum libero facilis ducimus earum expedita!
        Nesciunt cupiditate numquam nemo sed odio laborum excepturi tempora eum
        quasi illum, recusandae velit blanditiis aspernatur necessitatibus
        dolorum quae natus dignissimos corporis deserunt, architecto et.
        Repudiandae doloribus autem debitis sequi? Impedit est repellendus
        molestias modi nihil qui, cumque nam vitae eaque doloremque iusto sunt
        iste eum rem natus? Et, necessitatibus. Aliquam tenetur libero quo!
        Perferendis itaque rem officia nulla ipsam officiis ad, commodi
        blanditiis modi odio iste velit, quae laboriosam dignissimos sit eveniet
        veniam ipsum consectetur impedit harum eos culpa. Reprehenderit quo,
        aperiam ipsum, inventore asperiores delectus minima fugit modi in
        blanditiis quidem distinctio expedita eveniet architecto commodi
        veritatis quod non. Quos.
      </p>
      <h1>Our Speciality</h1>
      <Row>
        <Col md={6}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe
            necessitatibus accusamus dolore pariatur. Odio deserunt magni
            tempore autem numquam illo nobis rem quasi reprehenderit modi quos
            quia cumque doloribus id nisi adipisci, facere nesciunt repudiandae
            nulla laboriosam facilis animi provident, voluptatum sint? Minima,
            rem quia molestias ex consequuntur, illum aliquid aspernatur non
            quas repellat debitis libero laborum commodi vero ad voluptates enim
            saepe impedit fugiat. Deleniti, perferendis vel voluptatum officia
            excepturi corrupti architecto incidunt reiciendis ex magnam numquam
            nemo harum dolore quis nostrum quia cupiditate ab error rerum
            impedit. Eaque iusto blanditiis quam minima asperiores reprehenderit
            voluptates ad fugiat.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://t3.ftcdn.net/jpg/01/91/29/14/240_F_191291499_M7dnv8VA0RkRvnX3GxVX9ZKAv8wJsNZ5.jpg"
            alt=""
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "20px" }}>
        <h1>Our Chef</h1>
        <Col md={3}>
          <img
            src="https://t3.ftcdn.net/jpg/03/35/63/86/240_F_335638623_SkUiPT8btwia2G437NGHZXxGJ294BJwU.jpg"
            width="200"
            alt=""
          />
        </Col>
        <Col md={3}>
          <img
            src="https://t4.ftcdn.net/jpg/02/75/08/67/240_F_275086757_IOm8iBG3AB0qFje2d0VsjhZo6U3mNXQW.jpg"
            width="200"
            alt=""
          />
        </Col>
        <Col md={3}>
          <img
            src="https://t3.ftcdn.net/jpg/01/06/20/40/240_F_106204059_lleqNc7r5xqH4g0Ksm8xSwUr5bh3NiJy.jpg"
            width="200"
            alt=""
          />
        </Col>
        <Col md={3}>
          <img
            src="https://t4.ftcdn.net/jpg/01/86/60/51/240_F_186605168_mNGYB4I4Ze9mn9q9kJr9jmobXfTjsFsU.jpg"
            width="200"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
