import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import MainTemplate from "../../templates/mainTemplate.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import UserForm from "../../structures/UserForm";

const User = ({ users }) => {
  let { id } = useParams();
  const [choosenUser, setChoosenUser] = useState();

  useEffect(() => {
    let choosen = users.filter((item) => item.id.toString() === id && item);
    setChoosenUser(choosen[0]);
  }, [users]);

  return (
    <MainTemplate>
      <Container fluid>
        <h1>Dashboard</h1>
        <Card>
          <Card.Header>
            <Card.Title style={{marginBottom: "0", lineHeight: "2"}}>Form</Card.Title>
          </Card.Header>
          <Card.Body>
            <UserForm user={choosenUser} />
          </Card.Body>
        </Card>
      </Container>
    </MainTemplate>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(User);
