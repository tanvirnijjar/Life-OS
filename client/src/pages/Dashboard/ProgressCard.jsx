import "./ProgressCard.css";

function ProgressCard({
  completedTasks,
  totalTasks,
  productivity,
}) {
  const message =
    productivity >= 80
      ? "🔥 Amazing Work!"
      : productivity >= 50
      ? "💪 Keep Going!"
      : "🚀 Let's Get Started!";

  return (
    <div className="progress-card">

      <div className="progress-header">

        <h2>📊 Today's Progress</h2>

        <span>{productivity}%</span>

      </div>

      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(
            #3B82F6 ${productivity * 3.6}deg,
            rgba(255,255,255,.12) 0deg
          )`,
        }}
      >
        <div className="progress-value">

          <h1>{productivity}%</h1>

          <small>Completed</small>

        </div>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${productivity}%`,
          }}
        />

      </div>

      <p className="progress-text">
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <small className="progress-message">
        {message}
      </small>

    </div>
  );
}

export default ProgressCard;