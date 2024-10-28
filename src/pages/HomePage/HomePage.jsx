import DailyNorma from "../../components/HomePage/DailyNorma/DailyNorma";
import Statistic from "../../components/HomePage/Statistic/Statistic";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <DailyNorma />
        <Statistic />
      </div>
    </div>
  );
}
