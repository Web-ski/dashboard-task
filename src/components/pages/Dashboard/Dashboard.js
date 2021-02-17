import React from "react";
import { NavLink } from "react-router-dom";
import MainTemplate from "../../templates/mainTemplate.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserList from "../../structures/UserList";

const styledHeader = {
  display: "flex",
  justifyContent: "space-between",
};

const Dashboard = () => (
  <MainTemplate>
    <Container fluid>
      <h1>Dashboard</h1>
      <Card>
        <Card.Header style={styledHeader}>
          <Card.Title style={{marginBottom: "0", lineHeight: "2"}}>User list</Card.Title>{" "}
          <Button variant="primary" as={NavLink} to="/user/new">
            Add new
          </Button>
        </Card.Header>
        <Card.Body>
          <UserList />
        </Card.Body>
      </Card>
    </Container>
  </MainTemplate>
);

export default Dashboard;
