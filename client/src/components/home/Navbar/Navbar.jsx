import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          🌼 <span>Life OS</span>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <button
          className="get-started-btn"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;