import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import sprites from "../../../images/sprite.svg";
import Button from "../../Button/Button";
import css from "./SigninForm.module.css";

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
  const [showSigninPassword, setShowSigninPassword] = useState(false);
  const handleShowSigninPassword = () => {
    setShowSigninPassword((prev) => !prev);
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
              type={showSigninPassword ? "text" : "password"}
            />
            <svg onClick={handleShowSigninPassword} className={css.eye_icon}>
              <use
                href={`${sprites}#icon-${
                  showSigninPassword ? "eye" : "no-eye"
                }`}
              ></use>
            </svg>
          </div>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <Button>
          <Link to="/welcome">Sign In</Link>
        </Button>
      </Form>
    </Formik>
  );
}
