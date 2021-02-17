/* eslint-disable no-undef */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeUserAction } from "../../../api/actions";
import Button from "react-bootstrap/Button";

const ListRecord = ({ user, removeUser }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const styledPopover = {
    position: "absolute",
    top: "0",
    right: "-10px",
    minWidth: "max-content",
    backgroundColor: "white",
    transition: ".3s",
    display: `${popoverOpen ? "flex" : "none"}`,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    zIndex: "99",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    border: "solid 2px rgba(0,0,0,.9)",
    borderRadius: "5px"
  };

  const styledButtonsPopover = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    minWidth: "max-content",
    margin: "15px",
  };

  const styledTitlePopover = {
    padding: "15px 20px 10px",
    backgroundColor: "black",
    color: "white"
  }

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
      <td style={{ position: "relative" }}>
        <Button variant="danger" onClick={toggle}>
          delete
        </Button>
        <section style={styledPopover}>
          <div style={styledTitlePopover}>
            <h6>Are you sure you want to delete the user?</h6>
          </div>
          <div style={styledButtonsPopover}>
            <Button variant="danger" onClick={() => removeUser(user.id)}>
              Yes. Delete
            </Button>
            <Button variant="dark" onClick={toggle}>
              No! Exit
            </Button>
          </div>
        </section>
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
