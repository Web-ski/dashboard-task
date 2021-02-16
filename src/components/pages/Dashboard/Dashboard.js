import React from "react";
import MainTemplate from "../../templates/mainTemplate.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserList from "../../structures/UserList";

const styledHeader = {
  display: "flex",
  justifyContent: "space-between",
};

const Dashboard = () => {
  return (
    <MainTemplate>
      <Container fluid>
        <h1>Dashboard</h1>
        <Card>
          <Card.Header style={styledHeader}>
            <Card.Title>User list</Card.Title>{" "}
            <Button variant="primary">Add new</Button>
          </Card.Header>
          <Card.Body>
            <UserList />
          </Card.Body>
        </Card>
      </Container>
    </MainTemplate>
  );
};

export default Dashboard;
