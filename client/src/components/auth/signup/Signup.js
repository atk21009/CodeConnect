import React, { Component } from "react";

import SignupForm from "./SignupForm";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

class Signup extends Component {
  render() {
    return (
      <div className="AuthContainer">
        <SignupForm onSubmit={(formValues) => this.props.signup(formValues)} />
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
