import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import Profile from "./Dashboard/sub/Profile";
import DirectMessage from "./Dashboard/sub/DirectMessage";
import Subscriptions from "./Dashboard/sub/Subscriptions";
import Explore from "./Dashboard/sub/Explore";
import Settings from "./Dashboard/sub/Settings";

import Navbar from "./comps/Header/Navbar";

import Lang from "./Lang";
import {
  CSharp,
  Css,
  Html,
  Java,
  Javascript,
  Php,
  Rust,
  Sql,
} from "./Lang/sub";

import Con from "./Concepts";
import {
  FileManagement,
  Libraries,
  Algorithms,
  Techniques,
} from "./Concepts/sub";

import Col from "./Connect";
import { Forms, Collaboration } from "./Connect/sub";

import Jobs from "./Jobs";
import { AvgSal, Employer, JobSearch } from "./Jobs/sub";

import News from "./News";

const InitNav = (props) => {
  const location = useLocation();
  return <Navbar location={location} {...props} />;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <InitNav />
        <Routes>
          {/* Main Routes */}
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/messages" element={<DirectMessage />} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/settings" element={<Settings />} />

          {/* Languages Routes */}
          <Route exact path="/languages" element={<Lang />} />
          <Route exact path="/languages/csharp" element={<CSharp />} />
          <Route exact path="/languages/css" element={<Css />} />
          <Route exact path="/languages/html" element={<Html />} />
          <Route exact path="/languages/java" element={<Java />} />
          <Route exact path="/languages/javascript" element={<Javascript />} />
          <Route exact path="/languages/php" element={<Php />} />
          <Route exact path="/languages/rust" element={<Rust />} />
          <Route exact path="/languages/sql" element={<Sql />} />

          {/* Concepts Routes */}
          <Route exact path="/concepts" element={<Con />} />
          <Route
            exact
            path="/concepts/filemanagement"
            element={<FileManagement />}
          />
          <Route exact path="/concepts/libraries" element={<Libraries />} />
          <Route exact path="/concepts/algorithms" element={<Algorithms />} />
          <Route exact path="/concepts/techniques" element={<Techniques />} />

          {/* Collaboration Routes */}
          <Route exact path="/connect" element={<Col />} />
          <Route exact path="/connect/forms" element={<Forms />} />
          <Route
            exact
            path="/connect/collaboration"
            element={<Collaboration />}
          />

          {/* Jobs Routes */}
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/jobs/averagesalary" element={<AvgSal />} />
          <Route exact path="/jobs/employer" element={<Employer />} />
          <Route exact path="/jobs/jobsearch" element={<JobSearch />} />

          {/* News Routes */}
          <Route exact path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
