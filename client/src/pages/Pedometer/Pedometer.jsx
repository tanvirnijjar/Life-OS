import { useEffect, useState } from "react";
import "./Pedometer.css";

function Pedometer() {
  const [steps, setSteps] = useState(() => {
    const saved = localStorage.getItem("lifeos_steps");
    return saved ? Number(saved) : 0;
  });

  const goal = 10000;

  useEffect(() => {
    localStorage.setItem("lifeos_steps", steps);
  }, [steps]);

  const progress = Math.min(
    Math.round((steps / goal) * 100),
    100
  );

  const calories = (steps * 0.04).toFixed(0);

  const distance = (steps * 0.0008).toFixed(2);

  return (
    <div className="pedometer-page">
      <h1>👣 Pedometer</h1>

      <div className="pedometer-card">

        <h2>{steps.toLocaleString()}</h2>

        <p>Today's Steps</p>

        <div className="progress-container">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <h3>{progress}% of Daily Goal</h3>

        <div className="stats">

          <div className="stat-box">
            <h4>🎯 Goal</h4>
            <p>{goal.toLocaleString()}</p>
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