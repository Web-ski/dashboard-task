import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserForm = ({ user }) => {
  const [newData, setNewData] = useState({ name: "", email: "" });
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  console.log(newData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/";

    let order;

    if (newData.name.length === 0) {
      setCheckName(true);
    } else if (newData.email.length === 0) {
      setCheckEmail(true);
    } else {
      console.log("Cool!");
    }

    // axios
    //   .post(url, order)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //console.log(order);
  };

  const changeHandler = (event) => {
    event.target.name === "name" &&
      setNewData({ name: event.target.value, email: newData.email });
    event.target.name === "email" &&
      setNewData({ name: newData.name, email: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="name"
            type="text"
            placeholder={user ? user.name : "Name"}
            onChange={changeHandler}
            minLength="3"
            maxLength="30"
          />
          <Form.Text muted>Your name must be 3-30 characters long.</Form.Text>
          {checkName && (
            <Form.Text style={{ color: "red" }}>
              Please fill in the field.
            </Form.Text>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formEmail">
        <Form.Label column sm="2">
          Email address
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="email"
            type="email"
            placeholder={user ? user.email : "Email"}
            onChange={changeHandler}
          />
          {checkName && (
            <Form.Text style={{ color: "red" }}>
              Please fill in the field.
            </Form.Text>
          )}{" "}
        </Col>
      </Form.Group>
      <Form.Group>
        <Button as={NavLink} to="/" variant="outline-secondary">
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default UserForm;
