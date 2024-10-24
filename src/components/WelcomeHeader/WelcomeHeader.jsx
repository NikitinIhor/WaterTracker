import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";
import css2 from "./WelcomeHeader.module.css";

import { useState } from "react";

export default function WelcomeHeader() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <header className="container">
      <div className={css.container}>
        <Link to="/"></Link>
        <div className={css.signin}>
          <div className={css2.userbar}>
            <p className={css2.userName}>username</p>
            <div className={css2.userImage}></div>
            <button
              onClick={handleOpen}
              className={css2.btn}
              type="button"
            ></button>
            <ul className={`${css2.list} ${open ? css2.open : ""}`}>
              <li className={css2.item}>
                <button onClick={openModal} type="button">
                  Setting
                </button>
              </li>
              <li className={css2.item}>
                <button type="button">Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </header>
  );
}
