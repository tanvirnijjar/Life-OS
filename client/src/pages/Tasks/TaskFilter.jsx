function TaskFilter({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="task-filter">
      {filters.map((item) => (
        <button
          key={item}
          className={filter === item ? "filter-btn active-filter" : "filter-btn"}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;