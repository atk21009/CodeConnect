import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./comps/Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
