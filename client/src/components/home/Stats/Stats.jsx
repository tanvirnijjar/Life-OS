import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Active Users",
    },
    {
      number: "50K+",
      title: "Tasks Completed",
    },
    {
      number: "99%",
      title: "Productivity Boost",
    },
    {
      number: "24/7",
      title: "Cloud Access",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stats-heading">
          <h2>Trusted By Productive People</h2>

          <p>
            Life OS helps thousands of users organize their work,
            goals, and daily routines efficiently.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;