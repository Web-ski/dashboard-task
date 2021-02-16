import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeUserAction } from "../../../api/actions";
import Button from "react-bootstrap/Button";

const ListRecord = ({ user, removeUser }) => {
  //console.log(user.address)
  const addCity = (address) => {
    let city = address.city;
    return city;
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{addCity(user.address)}</td>
      <td>
        <Button as={NavLink} to={`/user/${user.id}`} variant="warning">
          edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => removeUser(user.id)}>
          delete
        </Button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (data) => dispatch(removeUserAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(ListRecord);
