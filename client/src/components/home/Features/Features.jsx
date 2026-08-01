import "./Features.css";
import {
  FaTasks,
  FaCalendarAlt,
  FaStickyNote,
  FaBullseye,
  FaChartLine,
  FaMoon,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTasks />,
      title: "Smart Tasks",
      description:
        "Organize, prioritize and complete your daily tasks with ease.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Calendar",
      description:
        "Plan your meetings, events and daily schedule in one place.",
    },
    {
      icon: <FaStickyNote />,
      title: "Notes",
      description:
        "Capture ideas instantly with beautiful and organized notes.",
    },
    {
      icon: <FaBullseye />,
      title: "Goals",
      description:
        "Track your goals and stay motivated every single day.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Understand your productivity with powerful insights.",
    },
    {
      icon: <FaMoon />,
      title: "Dark Mode",
      description:
        "Work comfortably anytime with elegant light and dark themes.",
    },
  ];

  return (
    <section className="features">

      <div className="features-heading">

        <span>Why Choose Life OS?</span>

        <h2>Everything You Need In One Place</h2>

        <p>
          Stay productive with powerful tools designed to organize your
          work and your personal life.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;