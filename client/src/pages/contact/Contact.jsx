import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { ImMobile } from "react-icons/im";

const Contact = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <h1>Pizza Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quis minima dolores eaque maiores et ipsa voluptatibus, officiis
            consequatur reprehenderit eveniet corporis quasi sapiente, earum
            asperiores enim! Officiis dicta sequi dolorem enim, laboriosam quo
            minima consequuntur, alias eveniet mollitia soluta pariatur esse
            suscipit expedita aliquid sapiente nisi libero ut ullam totam!
            Consequuntur facilis natus non. Mollitia facilis ratione odit
            inventore natus, pariatur tempore distinctio, illum rerum laborum,{" "}
          </p>

          <p>
            Reiciendis possimus aspernatur praesentium. Officiis, cumque a unde
            dolores pariatur nam velit! Corrupti facilis sint soluta quasi et
            optio fuga aperiam hic minima dolorum mollitia reprehenderit
            reiciendis, rem dolore officia quidem quas. Consectetur
            reprehenderit dolores velit minus placeat sapiente, dicta pariatur
            voluptas aspernatur non voluptatem esse hic enim, fugit eaque.quasi
            blanditiis iste amet nostrum quo provident. Beatae eaque repudiandae
            voluptatem distinctio tenetur eos totam natus explicabo vitae quam
            magni dignissimos, voluptatibus sed molestias quo reprehenderit?
          </p>
          <Table>
            <thead>
              <tr>
                <th className="bg-warning text-center" colSpan={3}>
                  --- Contact Details ---
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FiPhoneCall />
                </td>
                <td>Phone</td>
                <td>012-23232121</td>
              </tr>
              <tr>
                <td>
                  <ImMobile />
                </td>
                <td>Call</td>
                <td>123456789</td>
              </tr>
              <tr>
                <td>
                  <FiMail />
                </td>
                <td>Email</td>
                <td>pizza@gmail.com</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Image src="https://image.shutterstock.com/image-photo/banquet-lunch-break-conference-meeting-600w-260538944.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
