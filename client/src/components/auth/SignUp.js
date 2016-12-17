import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" placeholder={label} type={type} {...input} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let SignUp = (props) => {
  const registerUser = function (newUser) {
    props.signUpUser(newUser);
  }

  const { error, handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Field name="username" component={renderField} type="text" label="Username" />
      <Field name="email" component={renderField} type="email" label="Email" />
      <Field name="password" component={renderField} type="password" label="Password" />

      <button className="btn btn-primary" disabled={pristine || submitting} action="submit">Submit</button>
      <button className="btn btn-default" disabled={pristine || submitting} type="button" onClick={reset}>Clear</button>
    </form>
  );
};

SignUp = reduxForm({
  form: 'signupform'
})(SignUp);

SignUp = connect(
  null,
  actions
)(SignUp);

export default SignUp;