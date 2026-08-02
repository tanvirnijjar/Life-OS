import { useEffect, useState } from "react";
import "./Pedometer.css";

function Pedometer() {
  const [steps, setSteps] = useState(() => {
    const saved = localStorage.getItem("lifeos_steps");
    return saved ? Number(saved) : 0;
  });

  const dailyGoal = 10000;

  useEffect(() => {
    localStorage.setItem("lifeos_steps", steps);
  }, [steps]);

  const progress = Math.min(
    Math.round((steps / dailyGoal) * 100),
    100
  );

  const calories = (steps * 0.04).toFixed(0);

  const distance = (steps * 0.0008).toFixed(2);

  return (
    <div className="pedometer-page">

      {/* Header */}

      <div className="pedometer-header">
        <h1>Pedometer</h1>
        <p>
          Track your daily steps and stay active every day.
        </p>
      </div>

      {/* Summary */}

      <div className="pedometer-summary">

        <div className="summary-card">
          <h2>{steps.toLocaleString()}</h2>
          <p>Total Steps</p>
        </div>

        <div className="summary-card">
          <h2>{progress}%</h2>
          <p>Goal Completed</p>
        </div>

        <div className="summary-card">
          <h2>{calories}</h2>
          <p>Calories Burned</p>
        </div>

      </div>

      {/* Main Card */}

      <div className="pedometer-card">

        <h2>{steps.toLocaleString()} Steps</h2>

        <div className="progress-container">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <h3>{progress}% of {dailyGoal.toLocaleString()} Steps</h3>

        <div className="stats">

          <div className="stat-box">
            <h4>🎯 Daily Goal</h4>
            <p>{dailyGoal.toLocaleString()}</p>
          </div>

          <div className="stat-box">
            <h4>🔥 Calories</h4>
            <p>{calories} kcal</p>
          </div>

          <div className="stat-box">
            <h4>📏 Distance</h4>
            <p>{distance} km</p>
          </div>

        </div>

        <div className="buttons">

          <button onClick={() => setSteps(steps + 100)}>
            +100
          </button>

          <button onClick={() => setSteps(steps + 500)}>
            +500
          </button>

          <button onClick={() => setSteps(steps + 1000)}>
            +1000
          </button>

          <button
            className="reset"
            onClick={() => setSteps(0)}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Pedometer;