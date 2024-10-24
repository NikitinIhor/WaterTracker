import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo.png";
import userIcon from "../../images/sprite.svg";
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
          <svg className={css.user_icon}>
            <use href={`${userIcon}#icon-user`}></use>
          </svg>
        </div>
      </div>
    </header>
  );
}
