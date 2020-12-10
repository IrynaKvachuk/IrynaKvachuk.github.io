import React from "react";
import { Field } from "redux-form";
import "./FormControls.css";

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
  return (
    <div className={`formControl ${touched && error && "error"}`}>
      <textarea {...input} {...props} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
export const Input = ({ input, meta: {touched, error}, ...props }) => {
  return (
    <div className={`formControl ${touched && error && "error"}`}>
      <input {...input} {...props} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export const CreateField = (
  placeholder,
  name,
  validators,
  component,
  props
) => {
  <Field
    placeholder={placeholder}
    name={name}
    component={component}
    validate={validators}
    {...props}
  />;
};
