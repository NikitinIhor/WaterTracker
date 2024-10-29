import water_icon from "../../../images/icons/gluss.png";
import sprites from "../../../images/sprite.svg";
import css from "./Statistic.module.css";

export default function Statistic() {
  return (
    <div className={css.wrapper}>
      <div className={css.today}>
        <h2>Today</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.water}>
              <img src={water_icon} alt="water_icon" />
              <span>200 ml</span>
            </div>
            <div className={css.time}>14:00 PM</div>
            <div className={css.btns}>
              <svg className={css.edit}>
                <use href={`${sprites}#icon-pen`}></use>
              </svg>
              <svg className={css.delete}>
                <use href={`${sprites}#icon-delete`}></use>
              </svg>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.water}>
              <img src={water_icon} alt="water_icon" />
              <span>200 ml</span>
            </div>
            <div className={css.time}>14:00 PM</div>
            <div className={css.btns}>
              <svg className={css.edit}>
                <use href={`${sprites}#icon-pen`}></use>
              </svg>
              <svg className={css.delete}>
                <use href={`${sprites}#icon-delete`}></use>
              </svg>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.water}>
              <img src={water_icon} alt="water_icon" />
              <span>200 ml</span>
            </div>
            <div className={css.time}>14:00 PM</div>
            <div className={css.btns}>
              <svg className={css.edit}>
                <use href={`${sprites}#icon-pen`}></use>
              </svg>
              <svg className={css.delete}>
                <use href={`${sprites}#icon-delete`}></use>
              </svg>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.water}>
              <img src={water_icon} alt="water_icon" />
              <span>200 ml</span>
            </div>
            <div className={css.time}>14:00 PM</div>
            <div className={css.btns}>
              <svg className={css.edit}>
                <use href={`${sprites}#icon-pen`}></use>
              </svg>
              <svg className={css.delete}>
                <use href={`${sprites}#icon-delete`}></use>
              </svg>
            </div>
          </li>
        </ul>
        <div className={css.button_add}>
          <svg className={css.icon_add}>
            <use href={`${sprites}#icon-plus2`}></use>
          </svg>
          <button type="button">Add water</button>
        </div>
      </div>
      <div className={css.month}></div>
    </div>
  );
}
