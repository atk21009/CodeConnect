import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import loginFields from "../../../constants/Fields/loginFields";
import Fields from "../../../constants/Fields";
import validateEmails from "../../../utils/validateEmails";
import { login } from "../../../store/actions";

class LoginForm extends Component {
  renderFields() {
    return _.map(loginFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={Fields}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    let {
      handleSubmit,
      onSubmit, // <-- You need to reference this function passed from the wrapper component in order to pass it to redux-form's provided handleSubmit function
    } = this.props;
    return (
      <div className="AuthForm">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {this.renderFields()}
            <p className="animation a5">
              <a href="#/">Forgot Password</a>
            </p>
            <button className="animation a6">LOGIN</button>
            <div className="error"></div>
          </form>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || "");

  _.each(loginFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "loginForm",
  onSubmit: login,
})(LoginForm);
