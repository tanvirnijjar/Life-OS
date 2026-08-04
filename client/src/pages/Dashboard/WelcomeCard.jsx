import "./WelcomeCard.css";

function WelcomeCard() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 17) greeting = "Good Afternoon 🌤️";

  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const quotes = [
    "Small progress every day leads to big results.",
    "Discipline beats motivation.",
    "Stay consistent. Your future self will thank you.",
    "Dream big. Start small. Act now.",
    "Success is built one task at a time."
  ];

  const quote =
    quotes[now.getDate() % quotes.length];

  return (
    <div className="welcome-card">

      <div className="welcome-left">

        <span className="welcome-badge">
          🚀 Life OS 3.0
        </span>

        <h1>{greeting}</h1>

        <h2>Welcome back 👋</h2>

        <p className="welcome-date">
          📅 {today}
        </p>

        <p className="welcome-time">
          🕒 {time}
        </p>

      </div>

      <div className="welcome-right">

        <h3>Today's Focus</h3>

        <p>"{quote}"</p>

      </div>

    </div>
  );
}

export default WelcomeCard;