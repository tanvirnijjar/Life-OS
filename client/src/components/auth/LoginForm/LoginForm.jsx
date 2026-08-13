import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser } from "../../../services/authService";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", data.token);

      // Optional: Save User Data
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      toast.success("🎉 Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-options">
        <label className="remember">
          <input type="checkbox" />
          Remember Me
        </label>

        <Link to="/forgot-password">
          Forgot Password?
        </Link>
      </div>

      <button type="submit" className="login-btn">
        Sign In
      </button>

      <p className="auth-switch">
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;