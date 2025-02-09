import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const moods = [
  "HAPPY",
  "SAD",
  "ANGRY",
  "MOTIVATED",
  "RELAXED",
  "ANXIETY",
  "SURPRISE",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">MOODJOURNEY</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Describe your current mood"
      />

      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="mood-btn"
            onClick={() =>
              navigate(`/recommendation?mood=${mood.toLowerCase()}`)
            }
          >
            {mood}
          </button>
        ))}
      </div>

      <button className="capture-btn">CAPTURE MY MOOD</button>

      <h2 className="playlist-title">DISCOVER OUR LATEST PLAYLISTS</h2>
      <div className="playlists">
        <div className="playlist-card">HAPPY PLAYLIST</div>
        <div className="playlist-card">SAD PLAYLIST</div>
        <div className="playlist-card">ENERGY POP PLAYLIST</div>
        <div className="playlist-card">ROMANTIC PLAYLIST</div>
      </div>
    </div>
  );
};

export default Home;
