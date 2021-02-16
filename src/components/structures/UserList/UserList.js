import React from "react";
import Table from "react-bootstrap/Table";

const UserList = () => {
  return (
  <Table bordered hover>
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>City</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>);
};

export default UserList;