import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import signupFields from "../../../constants/Fields/signupFields";
import Fields from "../../../constants/Fields";
import validateEmails from "../../../utils/validateEmails";
import { signup } from "../../../store/actions";

class SignupForm extends Component {
  renderFields() {
    return _.map(signupFields, ({ label, name }) => {
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
            <h2 className="animation a1">Register</h2>
            <h4 className="animation a2">
              Sign up for an account using email and password
            </h4>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {this.renderFields()}
            <p className="animation a5"></p>
            <button className="animation a6">LOGIN</button>
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

  _.each(signupFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "signForm",
  onSubmit: signup,
})(SignupForm);
