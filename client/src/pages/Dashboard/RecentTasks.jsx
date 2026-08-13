import "./RecentTasks.css";

function RecentTasks({ tasks }) {
  const recentTasks = tasks
    .filter((task) => !task.completed)
    .slice(0, 5);

  return (
    <div className="recent-card">
      <div className="recent-header">
        <h2>🔥 Today's Tasks</h2>

        <span>{recentTasks.length} Pending</span>
      </div>

      {recentTasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎉</div>

          <h3>Awesome!</h3>

          <p>You have completed all your tasks.</p>
        </div>
      ) : (
        <div className="task-list">
          {recentTasks.map((task) => (
            <div
              className="task-item"
              key={task._id}
            >
              <div className="task-left">
                <div
                  className={`priority ${
                    task.priority?.toLowerCase() || "low"
                  }`}
                />

                <div>
                  <h4>{task.title}</h4>

                  {task.dueDate && (
                    <small>
                      📅{" "}
                      {new Date(
                        task.dueDate
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </small>
                  )}
                </div>
              </div>

              <span
                className={`priority-text ${
                  task.priority?.toLowerCase() || "low"
                }`}
              >
                {task.priority || "Low"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentTasks;