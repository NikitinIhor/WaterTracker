import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/Logo.png";
import sprites from "../../images/sprite.svg";
import css from "../Header/Header.module.css";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";
import SettingsModal from "../Modals/SettingsModal/SettingsModal";
import css2 from "./WelcomeHeader.module.css";

export default function WelcomeHeader() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  const openSettingsModal = () => {
    setSettingsModalIsOpen(true);
    setOpen(false);
  };
  const closeSettingsModal = () => setSettingsModalIsOpen(false);

  const openLogoutModal = () => {
    setLogoutModalIsOpen(true);
    setOpen(false);
  };
  const closeLogoutModal = () => setLogoutModalIsOpen(false);

  return (
    <header className="container">
      <div className={css.container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={css.signin}>
          <div className={css2.userbar}>
            <p className={css2.userName}>username</p>
            <div className={css2.userImage}></div>
            <svg
              onClick={handleOpen}
              className={`${css2.arrow} ${open ? css2.rotate : ""}`}
            >
              <use href={`${sprites}#icon-arrow-down`}></use>
            </svg>
            <ul className={`${css2.list} ${open ? css2.open : ""}`}>
              <li className={css2.item}>
                <button onClick={openSettingsModal} type="button">
                  <svg className={css2.icon}>
                    <use href={`${sprites}#icon-settings`}></use>
                  </svg>
                  Setting
                </button>
              </li>
              <li className={css2.item}>
                <button onClick={openLogoutModal} type="button">
                  <svg className={css2.icon}>
                    <use href={`${sprites}#icon-exit`}></use>
                  </svg>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LogoutModal
        isOpen={logoutModalIsOpen}
        onRequestClose={closeLogoutModal}
      />
      <SettingsModal
        isOpen={settingsModalIsOpen}
        onRequestClose={closeSettingsModal}
      />
    </header>
  );
}
