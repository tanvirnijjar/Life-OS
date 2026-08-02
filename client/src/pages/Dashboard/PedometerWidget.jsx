import "./PedometerWidget.css";

function PedometerWidget() {
  const steps = Number(
    localStorage.getItem("lifeos_steps") || 0
  );

  const goal = 10000;

  const progress = Math.min(
    Math.round((steps / goal) * 100),
    100
  );

  return (
    <div className="pedometer-card">
      <div className="pedometer-header">
        <h2>👣 Today's Steps</h2>
        <span>{progress}%</span>
      </div>

      <div className="steps-number">
        {steps.toLocaleString()}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="goal-info">
        <span>Goal: {goal.toLocaleString()}</span>
        <span>{goal - steps > 0 ? `${goal - steps} left` : "Goal Achieved 🎉"}</span>
      </div>
    </div>
  );
}

export default PedometerWidget;