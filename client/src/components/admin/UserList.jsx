import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import {
  getUserAction,
  deleteUserAction,
} from "../../redux/actions/userAction";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.getUsers);
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const deleteHandler = (id) => {
    const yes = window.confirm("Do you want to delete");
    if (yes) {
      dispatch(deleteUserAction(id));
    }
  };

  return (
    <>
      <h2 className="text-center text-success">Users list</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    className="btn-danger"
                    onClick={() => deleteHandler(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
