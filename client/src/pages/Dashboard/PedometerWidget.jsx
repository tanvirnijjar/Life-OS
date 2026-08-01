function PedometerWidget() {
  const steps = Number(
    localStorage.getItem("lifeos_steps") || 0
  );

  const goal = 10000;

  const progress = Math.round(
    (steps / goal) * 100
  );

  return (
    <div className="section-card">
      <h2>👣 Today's Steps</h2>

      <h1>{steps.toLocaleString()}</h1>

      <p>{progress}% of Goal</p>
    </div>
  );
}

export default PedometerWidget;