import React, { Component } from "react";
import LoginForm from "./LoginForm";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

import "../authScreens.css";

class Login extends Component {
  render() {
    return (
      <div className="AuthContainer">
        <LoginForm onSubmit={(formValues) => this.props.login(formValues)} />
      </div>
    );
  }
}

export default connect(null, actions)(Login);
