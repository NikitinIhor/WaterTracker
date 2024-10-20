import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import css from "./SigninForm.module.css";

import eye from "../../../images/icons/eye.svg";
import no_eye from "../../../images/icons/no-eye.svg";
import Button from "../../Button/Button";

const initialValues = {
  email: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const id = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`email-${id}`}>Enter your email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="E-mail"
            id={`email-${id}`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.container}>
          <label htmlFor={`password-${id}`}>Enter your password</label>
          <div className={css.password}>
            <Field
              className={css.field}
              name="password"
              placeholder="Password"
              id={`password-${id}`}
              type={showPassword ? "text" : "password"}
            />
            <div className={css.btn} type="button" onClick={handleShowPassword}>
              {showPassword ? (
                <img src={eye} alt="show password" />
              ) : (
                <img src={no_eye} alt="hide password" />
              )}
            </div>
          </div>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <Button type="submit">Sign In</Button>
      </Form>
    </Formik>
  );
}
