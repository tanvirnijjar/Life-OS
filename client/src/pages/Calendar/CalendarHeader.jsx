function CalendarHeader({
  currentDate,
  previousMonth,
  nextMonth,
}) {
  const month = currentDate.toLocaleString("default", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  return (
    <div className="calendar-header">
      <button onClick={previousMonth}>
        ← Previous
      </button>

      <h1>
        📅 {month} {year}
      </h1>

      <button onClick={nextMonth}>
        Next →
      </button>
    </div>
  );
}

export default CalendarHeader;