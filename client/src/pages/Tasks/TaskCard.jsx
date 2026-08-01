function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >
      <div
        className="task-text"
        onClick={() => toggleTask(task.id)}
      >
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
        />

        <div>
          <span>{task.text}</span>

          <div className="task-info">
            <span
              className={`priority ${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </span>

            {task.dueDate && (
              <span className="date">
                📅 {task.dueDate}
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        🗑
      </button>
    </div>
  );
}

export default TaskCard;