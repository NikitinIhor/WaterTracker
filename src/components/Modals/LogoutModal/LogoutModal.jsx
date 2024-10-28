import { useEffect, useState } from "react";
import Modal from "react-modal";
import sprites from "../../../images/sprite.svg";
import css from "./LogoutModal.module.css";
Modal.setAppElement("#root");

export default function LogoutModal({ isOpen, onRequestClose }) {
  const [modalWidth, setModalWidth] = useState("280px");

  useEffect(() => {
    const updateModalWidth = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setModalWidth("280px");
      } else setModalWidth("592px");
    };

    updateModalWidth();
    window.addEventListener("resize", updateModalWidth);

    return () => window.removeEventListener("resize", updateModalWidth);
  }, []);

  const customStyles = {
    content: {
      width: modalWidth,
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "12px",
    },
  };

  return (
    <div className="container">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        overlayClassName={css.overlay}
      >
        <div className={css.modal}>
          <div className={css.logout}>
            <p>Log out</p>
            <svg onClick={onRequestClose} className={css.exit}>
              <use href={`${sprites}#icon-plus2`}></use>
            </svg>
          </div>
          <p className={css.text}>Do you really want to leave?</p>
          <div className={css.btns}>
            <button className={`${css.btn} ${css.delete}`} type="button">
              Log out
            </button>
            <button
              onClick={onRequestClose}
              className={`${css.btn} ${css.cancel}`}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
