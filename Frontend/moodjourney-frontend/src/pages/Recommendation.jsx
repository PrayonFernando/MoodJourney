import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/recommendation.css";

const Recommendation = () => {
  const location = useLocation();
  const mood = new URLSearchParams(location.search).get("mood");
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recommendations?mood=${mood}`)
      .then((res) => res.json())
      .then((data) => setRecommendations(data));
  }, [mood]);

  return (
    <div className="recommendation-container">
      <h2>{mood ? mood.toUpperCase() : "Your Recommendations"}</h2>

      <div className="recommendation-section">
        <h2>Songs</h2>
        <div className="grid">
          {recommendations.songs?.map((song, index) => (
            <div key={index} className="card">
              {song}
            </div>
          ))}
        </div>

        <h2>Movies</h2>
        <div className="grid">
          {recommendations.movies?.map((movie, index) => (
            <div key={index} className="card">
              {movie}
            </div>
          ))}
        </div>

        <h2>Books</h2>
        <div className="grid">
          {recommendations.books?.map((book, index) => (
            <div key={index} className="card">
              {book}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
