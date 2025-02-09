import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">
          WELCOME TO <span>MOODJOURNEY</span>!
        </h1>
        <p className="subtitle">Where Your Face Sets The Playlist.</p>
        <p className="description">
          Enter a distinct emotional journey where your emotions help us
          understand how you're feeling right now. With only a basic pick,
          MoodJourney's state-of-the-art algorithm determines your mood and
          creates the ideal movie, book, and soundtrack to fit it.
        </p>
        <div className="button-container">
          <button className="signup-btn" onClick={() => navigate("/register")}>
            Sign Up For Free
          </button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
