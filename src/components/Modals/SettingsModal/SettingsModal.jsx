import Modal from "react-modal";
import css from "./SettingsModal.module.css";
Modal.setAppElement("#root");

export default function SettingsModal({ isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      padding: "32px 12px",
      borderRadius: "10px",
      width: "280px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName={css.overlay}
    >
      <div className={css.modal}>
        <div className={css.settings}>
          <p>Setting</p>
          <button onClick={onRequestClose}></button>
        </div>
        <div className={css.content}>
          <p>Your photo</p>
          <div className={css.photo}>
            <span className={css.avatar}></span>
            <div className={css.image}>
              <button type="button">Upload a photo</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
