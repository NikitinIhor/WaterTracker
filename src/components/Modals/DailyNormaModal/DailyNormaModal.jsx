import { useEffect, useState } from "react";
import Modal from "react-modal";
import sprites from "../../../images/sprite.svg";
import css from "./DailyNormaModal.module.css";
Modal.setAppElement("#root");

export default function DailyNormaModal({ isOpen, onRequestClose }) {
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
          <div className={css.edit}>
            <p>My daily norma</p>
            <svg onClick={onRequestClose} className={css.exit}>
              <use href={`${sprites}#icon-plus2`}></use>
            </svg>
          </div>
          <div className={css.formula}>
            <div className={css.calculate}>
              <p>For woman:</p>
              <span className={css.info}>V=(M*0,03) + (T*0,4)</span>
            </div>
            <div className={css.calculate}>
              <p>For man:</p>
              <span className={css.info}>V=(M*0,04) + (T*0,6)</span>
            </div>
          </div>
          <p className={css.description}>
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0)
          </p>
          <h2 className={css.title}>Calculate your rate:</h2>
          <div className={css.gender}>
            <label className={css.gender_field}>
              <input type="radio" value="woman" className={css.field} />
              For woman
            </label>
            <label className={css.gender_field}>
              <input type="radio" value="man" className={css.field} />
              For man
            </label>
          </div>
          <label className={css.label}>
            Your weight in kilograms:
            <input className={css.killograms} type="number" placeholder="0" />
          </label>
          <label className={css.label}>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
            <input className={css.killograms} type="number" placeholder="0" />
          </label>
          <div className={css.amount}>
            <p>The required amount of water in liters per day:</p>{" "}
            <span>1.8 L</span>
          </div>
          <label className={`${css.label} ${css.label2}`}>
            Write down how much water you will drink:
            <input className={css.killograms} type="number" placeholder="0" />
          </label>
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
