import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import toast from "react-hot-toast";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("🎉 Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
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

      <button
        type="submit"
        className="login-btn"
      >
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