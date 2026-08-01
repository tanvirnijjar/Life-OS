function ProgressCard({
  completedTasks,
  totalTasks,
  productivity,
}) {
  return (
    <div className="section-card">
      <h2>📊 Today's Progress</h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${productivity}%`,
          }}
        ></div>
      </div>

      <h1>{productivity}%</h1>

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>
    </div>
  );
}

export default ProgressCard;