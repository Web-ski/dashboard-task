import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ListRecord from "../../modules/ListRecord";

const UserList = ({ users }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr >
          <th style={{verticalAlign: "middle"}}>id</th>
          <th style={{verticalAlign: "middle"}}>Name</th>
          <th style={{verticalAlign: "middle"}}>Username
          </th>
          <th style={{verticalAlign: "middle"}}>Email</th>
          <th style={{verticalAlign: "middle"}}>City</th>
          <th style={{verticalAlign: "middle"}}>Edit</th>
          <th style={{verticalAlign: "middle"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((item) => <ListRecord key={item.id} user={item} />)}
      </tbody>
      {(!users || users.length === 0) && (
        <caption style={{ textAlign: "center" }}>
          The list of users is empty. Add new user.
        </caption>
      )}
    </Table>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserList);
