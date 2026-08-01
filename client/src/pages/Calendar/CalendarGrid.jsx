import DayCell from "./DayCell";

function CalendarGrid({ currentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const prevMonthDays = new Date(
    year,
    month,
    0
  ).getDate();

  const cells = [];

  // Previous Month
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({
      day: prevMonthDays - i,
      current: false,
    });
  }

  // Current Month
  for (let day = 1; day <= daysInMonth; day++) {
    const today = new Date();

    cells.push({
      day,
      current: true,
      today:
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year,
    });
  }

  // Next Month
  while (cells.length < 42) {
    cells.push({
      day: cells.length - firstDay - daysInMonth + 1,
      current: false,
    });
  }

  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <>
      <div className="weekdays">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {cells.map((cell, index) => (
          <DayCell
            key={index}
            day={cell.day}
            isCurrentMonth={cell.current}
            isToday={cell.today}
            onClick={() =>
              console.log("Clicked", cell.day)
            }
          />
        ))}
      </div>
    </>
  );
}

export default CalendarGrid;