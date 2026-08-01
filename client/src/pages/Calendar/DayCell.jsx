function DayCell({
  day,
  isCurrentMonth,
  isToday,
  onClick,
}) {
  return (
    <div
      className={`day-cell ${
        isCurrentMonth ? "" : "inactive-day"
      } ${isToday ? "today" : ""}`}
      onClick={onClick}
    >
      <span>{day}</span>
    </div>
  );
}

export default DayCell;