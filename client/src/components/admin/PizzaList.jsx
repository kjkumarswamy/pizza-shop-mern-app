import React from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deletePizzaAction } from "../../redux/actions/pizzaAction";
import { Link } from "react-router-dom";

const PizzaList = () => {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => state.getAllPizza);

  const deletePizzaHandler = (id) => {
    const confirm = window.confirm("Do you want to delete");

    if (confirm) {
      dispatch(deletePizzaAction(id));
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Pizza Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>
                  <img src={pizza.image} height="50" width="80" alt="" />
                </td>
                <td>{pizza.name}</td>
                <td>
                  Small : {pizza.prices[0]["small"]} | Medium :
                  {pizza.prices[0]["medium"]} | Large :
                  {pizza.prices[0]["large"]}
                </td>
                <td>{pizza.category}</td>
                <td>
                  <Link to={`/admin/editpizza/${pizza._id}`}>
                    <FaEdit
                      style={{ cursor: "pointer" }}
                      className="text-warning"
                    />
                  </Link>
                  &nbsp;
                  <FaTrash
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => deletePizzaHandler(pizza._id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default PizzaList;
