import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import AddPizza from "../../components/admin/AddPizza";
import OrderList from "../../components/admin/OrderList";
import PizzaList from "../../components/admin/PizzaList";
import UserList from "../../components/admin/UserList";
import EditPizza from "../../components/admin/EditPizza";

const Admin = ({ history }) => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="text-center bg-primary text-light p-2">Admin Page</h2>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "300px" }}>
              <Button
                className="btn-warning"
                onClick={() => history.push("/admin/userlist")}
              >
                All Users
              </Button>
              <br />
              <Button
                onClick={() => history.push("/admin/pizzalist")}
                className="btn-warning"
              >
                All Pizzas
              </Button>
              <br />
              <Button
                className="btn-warning"
                onClick={() => history.push("/admin/addpizza")}
              >
                Add Pizza
              </Button>
              <br />
              <Button
                className="btn-warning"
                onClick={() => history.push("/admin/orderlist")}
              >
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/userlist" component={UserList} />
              <Route path="/admin/pizzalist" component={PizzaList} />
              <Route path="/admin/addpizza" component={AddPizza} />
              <Route path="/admin/editpizza/:pizzaid" component={EditPizza} />
              <Route path="/admin/orderlist" component={OrderList} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
