import Tracker from "../../components/WelcomePage/Tracker/Tracker";
import Why from "../../components/WelcomePage/Why/Why";
import css from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={css.big_wrapper}>
      <main className={css.main}>
        <div className="container">
          <div className={css.wrapper}>
            <Tracker />
            <Why />
          </div>
        </div>
      </main>
    </div>
  );
}
