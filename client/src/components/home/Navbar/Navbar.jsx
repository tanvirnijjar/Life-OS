import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          🌼 <span>Life OS</span>
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
        </ul>

        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;