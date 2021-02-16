import React from "react";
import Table from "react-bootstrap/Table";
import ListRecord from "../../modules/ListRecord";

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
        <ListRecord />
      </tbody>
    </Table>
  );
};

export default UserList;
