import React from "react";

const ListRecord = ({user}) => {
  console.log(user.address)
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
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  );
};

export default ListRecord;
