import "./WelcomeCard.css";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 17) greeting = "Good Afternoon 🌤";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="welcome-card">
      <div>
        <h1>{greeting}</h1>
        <h2>Welcome back 👋</h2>
        <p>{today}</p>
      </div>

      <div className="welcome-quote">
        <h3>Today's Focus</h3>
        <p>
          "Small progress every day leads to big results."
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;