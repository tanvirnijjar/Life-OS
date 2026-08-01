import { Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="login-form">
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-options">
        <label className="remember">
          <input type="checkbox" />
          Remember Me
        </label>

        <a href="/">Forgot Password?</a>
      </div>

      <button type="submit" className="login-btn">
        Sign In
      </button>

      <p className="auth-switch">
        Don't have an account?{" "}
        <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

export default LoginForm;