import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { addUsersAction } from "../../../api/actions";
import MainTemplate from "../../templates/mainTemplate.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserList from "../../structures/UserList";

const styledHeader = {
  display: "flex",
  justifyContent: "space-between",
};

const Dashboard = (props) => {
  const [usersCollection, setUsersCollection] = useState();
  const url =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsersCollection(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    props.addUsers(usersCollection);
  }, [props, usersCollection]);

  return (
    <MainTemplate>
      <Container fluid>
        <h1>Dashboard</h1>
        <Card>
          <Card.Header style={styledHeader}>
            <Card.Title>User list</Card.Title>{" "}
            <Button variant="primary" as={NavLink} to="/user/new">Add new</Button>
          </Card.Header>
          <Card.Body>
            <UserList />
          </Card.Body>
        </Card>
      </Container>
    </MainTemplate>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (data) => dispatch(addUsersAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
