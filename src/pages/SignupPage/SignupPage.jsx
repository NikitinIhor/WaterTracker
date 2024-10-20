import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm//SignupForm";
import css from "../SigninPage/SigninPage.module.css";

export default function SignupPage() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.inner_wrapper}>
          <div className={css.content}>
            <h2 className={css.title}>Sign Up</h2>
            <SignupForm />
            <Link to="/signin" type="button" className={css.signin}>
              Sign in
            </Link>
          </div>
          <div className={css.bottle}></div>
        </div>
      </div>
    </div>
  );
}
