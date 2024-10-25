import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import sprites from "../../../images/sprite.svg";
import css2 from "./UpdateForm.module.css";

const initialValues = {
  name: "",
  email: "",
  gender: "woman",
  password: "",
  new_password: "",
  repeat_password: "",
};

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  gender: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  new_password: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  repeat_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Required"),
});

export default function UpdateForm() {
  const [updatePassword, setUpdatePassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  const handleShowUpdatePassword = () => setUpdatePassword((prev) => !prev);
  const handleShowNewPassword = () => setNewPassword((prev) => !prev);
  const handleShowRepeatPassword = () => setRepeatPassword((prev) => !prev);

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
      <Form className={css2.form}>
        <div className={css2.wrapper}>
          <div className={css2.block_1}>
            <h2 className={css2.title}>Your gender identity</h2>

            <div className={css2.container}>
              <div className={css2.gender}>
                <label className={css2.gender_field}>
                  <Field
                    type="radio"
                    name="gender"
                    value="woman"
                    className={`${css2.field} ${css2.radio}`}
                  />
                  Woman
                </label>
                <label className={css2.gender_field}>
                  <Field
                    type="radio"
                    name="gender"
                    value="man"
                    className={`${css2.field} ${css2.radio}`}
                  />
                  Man
                </label>
              </div>
              <ErrorMessage
                className={css2.error}
                name="gender"
                component="span"
              />
            </div>

            <div className={css2.container}>
              <label htmlFor={`name-${id}`}>Your name</label>
              <Field
                className={css2.field}
                name="name"
                value="exapmle name"
                id={`name-${id}`}
              />
              <ErrorMessage
                className={css2.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css2.container}>
              <label htmlFor={`email-${id}`}>E-mail</label>
              <Field
                className={css2.field}
                type="email"
                name="email"
                value="exapmle email"
                id={`email-${id}`}
              />
              <ErrorMessage
                className={css2.error}
                name="email"
                component="span"
              />
            </div>
          </div>

          <div className={css2.block_2}>
            <h2 className={css2.title}>Password</h2>

            <div className={css2.container}>
              <label htmlFor={`password-${id}`}>Outdated password:</label>
              <div className={css2.password}>
                <Field
                  className={css2.field}
                  name="password"
                  placeholder="Password"
                  id={`password-${id}`}
                  type={updatePassword ? "text" : "password"}
                />
                <svg
                  onClick={handleShowUpdatePassword}
                  className={css2.eye_icon}
                >
                  <use
                    href={`${sprites}#icon-${
                      updatePassword ? "eye" : "no-eye"
                    }`}
                  ></use>
                </svg>
              </div>
              <ErrorMessage
                className={css2.error}
                name="password"
                component="span"
              />
            </div>

            <div className={css2.container}>
              <label htmlFor={`new_password-${id}`}>New Password:</label>
              <div className={css2.password}>
                <Field
                  className={css2.field}
                  name="new_password"
                  placeholder="Password"
                  id={`new_password-${id}`}
                  type={newPassword ? "text" : "password"}
                />
                <svg onClick={handleShowNewPassword} className={css2.eye_icon}>
                  <use
                    href={`${sprites}#icon-${newPassword ? "eye" : "no-eye"}`}
                  ></use>
                </svg>
              </div>
              <ErrorMessage
                className={css2.error}
                name="new_password"
                component="span"
              />
            </div>

            <div className={css2.container}>
              <label htmlFor={`repeat_password-${id}`}>
                Repeat new password:
              </label>
              <div className={css2.password}>
                <Field
                  className={css2.field}
                  name="repeat_password"
                  placeholder="Password"
                  id={`repeat_password-${id}`}
                  type={repeatPassword ? "text" : "password"}
                />
                <svg
                  onClick={handleShowRepeatPassword}
                  className={css2.eye_icon}
                >
                  <use
                    href={`${sprites}#icon-${
                      repeatPassword ? "eye" : "no-eye"
                    }`}
                  ></use>
                </svg>
              </div>
              <ErrorMessage
                className={css2.error}
                name="repeat_password"
                component="span"
              />
            </div>
          </div>
        </div>
        <button className={css2.button} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
}
