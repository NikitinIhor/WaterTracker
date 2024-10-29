import { useState } from "react";
import sprites from "../../../images/sprite.svg";
import AddWaterModal from "../../Modals/AddWaterModal/AddWaterModal";
import DailyNormaModal from "../../Modals/DailyNormaModal/DailyNormaModal";
import css from "./DailyNorma.module.css";

export default function DailyNorma() {
  const [value, setValue] = useState(50);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const handleInputChange = (e) => {
    setValue(+e.target.value);
    console.log(value);
  };

  const getStyles = (val) => {
    return {
      fontSize: val === value ? "16px" : "12px",
      fontWeight: val === value ? 400 : 500,
    };
  };

  const inputStyle = {
    background: `linear-gradient(
      to right,
      rgba(158, 187, 255, 1) ${value}%,
      rgba(215, 227, 255, 1) ${value}%
    )`,
  };

  return (
    <div className={css.dailyNorma}>
      <div className={css.norma}>
        <h2>My daily norma</h2>
        <div className={css.norma_wrapper}>
          <div className={css.value}>1.5 L</div>
          <button
            onClick={handleOpenEditModal}
            className={css.edit}
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className={css.today}>
        <h2>Today</h2>
        <input
          type="range"
          onChange={handleInputChange}
          value={value}
          min={0}
          max={100}
          step={50}
          style={inputStyle}
        />
        <div className={css.rule}>
          <span style={getStyles(0)}>0%</span>
          <span style={getStyles(50)}>50%</span>
          <span style={getStyles(100)}>100%</span>
        </div>
      </div>
      <button onClick={handleOpenAddModal} className={css.add} type="button">
        <svg className={css.icon}>
          <use href={`${sprites}#icon-plus`}></use>
        </svg>
        Add Water
      </button>
      <DailyNormaModal
        isOpen={openEditModal}
        onRequestClose={handleCloseEditModal}
      />
      <AddWaterModal
        isOpen={openAddModal}
        onRequestClose={handleCloseAddModal}
      />
    </div>
  );
}
