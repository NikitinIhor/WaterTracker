import { useEffect, useState } from "react";
import Modal from "react-modal";
import sprites from "../../../images/sprite.svg";
import css from "./AddWaterModal.module.css";
Modal.setAppElement("#root");

export default function AddWaterModal({ isOpen, onRequestClose }) {
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

  const [waterValue, setWaterValue] = useState(50);

  const increase = () => setWaterValue((prev) => prev + 50);
  const decrease = () =>
    setWaterValue((prev) => (prev - 50 > 0 ? prev - 50 : 0));

  const handleInputChange = (e) => {
    setWaterValue(+e.target.value);
  };

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
          <div className={css.wrapper}>
            <div className={css.add}>
              <p>Add water</p>
              <svg onClick={onRequestClose} className={css.exit}>
                <use href={`${sprites}#icon-plus2`}></use>
              </svg>
            </div>
            <p className={css.choose}>Choose a value:</p>

            <div className={css.ammount}>
              <p>Amount of water:</p>
              <div className={css.water_calc}>
                <span onClick={decrease} className={css.correct_btn}>
                  -
                </span>
                <span className={css.water_value}>{waterValue}ml</span>
                <span onClick={increase} className={css.correct_btn}>
                  +
                </span>
              </div>
            </div>
            <div className={css.time}>
              <p>Recording time:</p>
              <span className={css.span}>7:00</span>
            </div>
            <div className={css.enter}>
              <label>Enter the value of the water used:</label>
              <input
                className={css.input}
                type="number"
                value={waterValue}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={css.btn}>
              <span className={css.result}>{waterValue}ml</span>
              <button className={css.save} type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
