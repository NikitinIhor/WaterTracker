import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo.svg";
import user from "../../images/icons/user.svg";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className="container">
      <div className={css.container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={css.signin}>
          <Link to="/signin">
            <span>Sign in</span>
          </Link>
          <img src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}
