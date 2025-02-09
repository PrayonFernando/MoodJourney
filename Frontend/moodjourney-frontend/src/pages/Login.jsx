import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!");
      navigate("/home"); // Redirect to Recommendation Page
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email!");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password!");
      } else {
        toast.error("Invalid credentials!");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">LOGIN TO YOUR ACCOUNT</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </form>
      <p className="register-link">
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")} className="link-text">
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
