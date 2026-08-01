import { useEffect, useState } from "react";

function WelcomeCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();

  let greeting = "Good Evening 🌙";
  let message = "Finish today stronger than yesterday.";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
    message = "A fresh day. Build something amazing.";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
    message = "Keep the momentum going. You're doing great!";
  }

  const today = time.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="welcome-card">

      <div className="welcome-left">
        <span className="welcome-badge">
          🌼 Welcome Back
        </span>

        <h1>{greeting}, Tanvir 👋</h1>

        <p className="welcome-date">{today}</p>

        <p className="welcome-message">
          {message}
        </p>
      </div>

      <div className="welcome-right">
        <div className="time-card">
          <span>⏰ Current Time</span>
          <h2>{currentTime}</h2>
        </div>
      </div>

    </div>
  );
}

export default WelcomeCard;