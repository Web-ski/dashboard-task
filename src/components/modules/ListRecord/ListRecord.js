import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ListRecord = ({user}) => {
  //console.log(user.address)
  const addCity = (address) => {
    let city = address.city;
    return city;
  }
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{addCity(user.address)}</td>
      <td><Button as={NavLink} to={`/user/${user.id}`} variant="warning">edit</Button></td>
      <td><Button variant="danger">delete</Button></td>
    </tr>
  );
};

export default ListRecord;
