import { useEffect, useState } from "react";
import Modal from "react-modal";
import sprites from "../../../images/sprite.svg";
import UpdateForm from "../../Forms/UpdateForm/UpdateForm";
import css from "./SettingsModal.module.css";
Modal.setAppElement("#root");

export default function SettingsModal({ isOpen, onRequestClose }) {
  const [modalWidth, setModalWidth] = useState("280px");

  useEffect(() => {
    const updateModalWidth = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setModalWidth("280px");
      } else if (width < 1440) {
        setModalWidth("707px");
      } else {
        setModalWidth("1008px");
      }
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
          <div className={css.settings}>
            <p>Setting</p>
            <svg onClick={onRequestClose} className={css.exit}>
              <use href={`${sprites}#icon-plus2`}></use>
            </svg>
          </div>
          <div className={css.update_avatar}>
            <p>Your photo</p>
            <div className={css.photo}>
              <span className={css.avatar}></span>
              <button className={css.image} type="button">
                <svg className={css.arrow_icon}>
                  <use href={`${sprites}#icon-arrow-up`}></use>
                </svg>
                Upload a photo
              </button>
            </div>
          </div>
          <UpdateForm className={css.updateForm} />
        </div>
      </Modal>
    </div>
  );
}
