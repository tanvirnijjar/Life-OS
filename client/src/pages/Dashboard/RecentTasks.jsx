function RecentTasks({ tasks }) {
  const recentTasks = tasks
    .filter((task) => !task.completed)
    .slice(0, 5);

  return (
    <div className="section-card">
      <h2>🔥 Recent Tasks</h2>

      {recentTasks.length === 0 ? (
        <p>🎉 No pending tasks!</p>
      ) : (
        <ul>
          {recentTasks.map((task) => (
            <li key={task.id}>
              {task.priority === "High" && "🔴 "}
              {task.priority === "Medium" && "🟡 "}
              {task.priority === "Low" && "🟢 "}

              {task.text}

              {task.dueDate && (
                <small> (📅 {task.dueDate})</small>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentTasks;