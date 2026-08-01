import "./Hero.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCalendarAlt,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Left Section */}

        <div className="hero-left">

          <span className="hero-badge">
            🚀 Life OS 3.0 • Your Personal Productivity System
          </span>

          <h1>
            Build Better
            <br />
            <span>Habits.</span>
            <br />
            Achieve Bigger Goals.
          </h1>

          <p>
            Life OS helps you manage tasks, goals, notes, routines,
            habits, calendars and productivity analytics in one
            beautiful dashboard designed to keep your life organized.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Live Demo
            </button>

          </div>

        </div>

        {/* Right Section */}

        <div className="hero-right">

          <div className="dashboard-card">

            <h3>Today's Dashboard</h3>

            <div className="task completed">
              <span>
                <FaCheckCircle />
                Complete React Project
              </span>

              <strong>100%</strong>
            </div>

            <div className="task">
              <span>
                <FaCalendarAlt />
                Team Meeting
              </span>

              <strong>2:00 PM</strong>
            </div>

            <div className="task">
              <span>
                <FaBullseye />
                Workout Goal
              </span>

              <strong>80%</strong>
            </div>

            <div className="task">
              <span>
                <FaChartLine />
                Weekly Progress
              </span>

              <strong>+18%</strong>
            </div>

            <div className="stats-row">

              <div className="stat-box">
                <h2>24</h2>
                <p>Tasks</p>
              </div>

              <div className="stat-box">
                <h2>8</h2>
                <p>Goals</p>
              </div>

              <div className="stat-box">
                <h2>92%</h2>
                <p>Focus</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;