import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserForm = ({ user }) => {
  console.log(user);

  return (
    <Form>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder={user.name} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formEmail">
        <Form.Label column sm="2">
          Email address
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder={user.email} />
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
