import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import css from './Statistic.module.css'

export default function Statistic() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
