import { useEffect, useState } from "react";
import Modal from "react-modal";
import water from "../../../images/icons/gluss.png";
import sprites from "../../../images/sprite.svg";
import css from "./EdditWaterModal.module.css";
Modal.setAppElement("#root");

export default function EdditWaterModal({ isOpen, onRequestClose }) {
  const [modalWidth, setModalWidth] = useState("280px");

  useEffect(() => {
    const updateModalWidth = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setModalWidth("280px");
      } else if (width < 1440) {
        setModalWidth("704px");
      } else {
        setModalWidth("592px");
      }
    };

    updateModalWidth();
    window.addEventListener("resize", updateModalWidth);

    return () => window.removeEventListener("resize", updateModalWidth);
  }, []);

  const [waterValue, setWaterValue] = useState(250);
  const [timeValue, setTimeValue] = useState(7);

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
          <div className={css.add}>
            <p>Edit the entered amount of water</p>
            <svg onClick={onRequestClose} className={css.exit}>
              <use href={`${sprites}#icon-plus2`}></use>
            </svg>
          </div>
          <div className={css.wrapper}>
            <div className={css.header}>
              <div className={css.water}>
                <img src={water} alt="water" /> <span>{waterValue}ml</span>
              </div>
              <div className={css.time}>
                <span>{timeValue}AM</span>
              </div>
            </div>
            <div className={css.correct}>
              <h2>Correct entered data:</h2>
              <div className={css.correct_body}>
                <p>Amount of water:</p>
                <div className={css.water_calc}>
                  <span className={css.correct_btn}>-</span>
                  <span className={css.water_value}>{waterValue}ml</span>
                  <span className={css.correct_btn}>+</span>
                </div>
              </div>
            </div>
          </div>

          <div className={css.btn}>
            <button onClick={onRequestClose} className={css.save} type="button">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
