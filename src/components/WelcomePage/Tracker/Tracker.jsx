import date from "../../../images/icons/date.svg";
import pot from "../../../images/icons/pot.svg";
import settings from "../../../images/icons/settings.svg";
import Button from "../../Button/Button";
import css from "./Tracker.module.css";

export default function Tracker() {
  return (
    <div className={css.tracker}>
      <h1 className={css.title}>Water consumption tracker</h1>
      <p className={css.text}>Record daily water intake and track</p>
      <div className={css.benefits}>
        <h3>Tracker Benefits</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <img src={date} alt="date" />
            <p>Habit drive</p>
          </li>
          <li className={css.item}>
            <img src={pot} alt="pot" />
            <p>View statistics</p>
          </li>
          <li className={css.item}>
            <img src={settings} alt="settings" />
            <p>Personal rate setting</p>
          </li>
        </ul>
      </div>
      <Button typr="button">Try tracker</Button>
    </div>
  );
}