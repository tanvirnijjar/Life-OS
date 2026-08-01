import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          🌼 <span>Life OS</span>
        </div>

        <p className="footer-text">
          Organize your life, achieve your goals, and stay productive every day.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Life OS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;