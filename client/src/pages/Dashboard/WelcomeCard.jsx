import "./WelcomeCard.css";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 17) greeting = "Good Afternoon 🌤️";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="welcome-card">
      <div className="welcome-left">
        <div className="welcome-badge">
          🚀 Life OS 3.0
        </div>

        <h1>{greeting}</h1>

        <h2>Welcome back 👋</h2>

        <div className="welcome-date">
          📅 {today}
        </div>

        <div className="welcome-time">
          🕒 {time}
        </div>
      </div>

      <div className="welcome-right">
        <h3>Today's Focus</h3>

        <p>
          "Success is built one task at a time."
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;