import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserForm = ({ user }) => {
  console.log(user);
  const [newName, setName] = useState();
  const [newEmail, setEmail] = useState();

  const handleSubmit = (event) => {
    //event.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/";

    let order;

    if (user !== undefined) {
      order = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        address: user.address,
      }
    } else {
      order = {
        id: 99,
        name: newName,
        email: newEmail,
        username: "New",
        address: {city: "Sopot"},
      }
    }

    axios
      .post(url, order)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder={user ? user.name : "Name"}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formEmail">
        <Form.Label column sm="2">
          Email address
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            placeholder={user ? user.email : "Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
