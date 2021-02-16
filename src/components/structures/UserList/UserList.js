import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ListRecord from "../../modules/ListRecord";

const UserList = ({ users }) => {
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
        {users && users.map((item) => <ListRecord key={item.id} user={item}/>)}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserList);
