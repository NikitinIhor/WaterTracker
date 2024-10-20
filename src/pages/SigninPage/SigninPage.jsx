import { Link } from "react-router-dom";
import SigninForm from "../../components/Forms/SigninForm/SigninForm";
import css from "./SigninPage.module.css";

export default function SigninPage() {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.inner_wrapper}>
          <div className={css.content}>
            <h2 className={css.title}>Sign In</h2>
            <SigninForm />
            <Link to="/signup" className={css.signin}>
              Sign up
            </Link>
          </div>
          <div className={css.bottle}></div>
        </div>
      </div>
    </div>
  );
}
