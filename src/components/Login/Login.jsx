import React from "react";
import "./Login.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { requeired } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCr } from "../../state/AuthReducer";
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <Field
        placeholder={"Email"}
        name={"email"}
        component={Input}
        validate={[requeired]}
      />
      <Field
        placeholder={"Password"}
        name={"password"}
        component={"input"}
        type={"password"}
      />
      <div className="rememberCheck">
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
        <p>remember me</p>
      </div>
      <button type="submit">Login</button>
      {error && <div className="loginFormError">{error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunkCr(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <section className="loginSection">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { loginThunkCr })(Login);
