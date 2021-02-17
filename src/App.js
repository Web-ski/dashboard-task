import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { connect } from "react-redux";
import { addUsersAction } from "./api/actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import User from "./components/pages/User";

const App = (props) => {
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
    <div className="App">
      <BrowserRouter basename="/dashboard-task"/>
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/user/new">
            <User />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (data) => dispatch(addUsersAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
