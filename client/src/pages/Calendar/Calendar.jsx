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

  const today = new Date();

  return (
    <div className="calendar-page">

      <div className="calendar-title">
        <h1>Calendar</h1>
        <p>
          Organize your schedule and keep track of important dates.
        </p>
      </div>

      <div className="calendar-summary">

        <div className="summary-card">
          <h2>{today.getDate()}</h2>
          <p>Today's Date</p>
        </div>

        <div className="summary-card">
          <h2>
            {today.toLocaleString("default", {
              month: "long",
            })}
          </h2>
          <p>Current Month</p>
        </div>

        <div className="summary-card">
          <h2>{today.getFullYear()}</h2>
          <p>Year</p>
        </div>

      </div>

      <div className="calendar-container">

        <CalendarHeader
          currentDate={currentDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />

        <CalendarGrid
          currentDate={currentDate}
        />

      </div>

    </div>
  );
}

export default Calendar;