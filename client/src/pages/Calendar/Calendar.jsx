import { useState } from "react";
import "./Calendar.css";

import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const previousMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  return (
    <div className="calendar-page">
      <CalendarHeader
        currentDate={currentDate}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <CalendarGrid currentDate={currentDate} />
    </div>
  );
}

export default Calendar;