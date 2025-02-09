import React, { useState, useEffect } from "react";
import axios from "axios";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating API Call
  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const response = await axios.get(
          "https://api.example.com/mood-playlist"
        ); // Replace with real API
        setPlaylist(response.data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
      setLoading(false);
    }
    fetchPlaylist();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-dark text-white">
      <h2 className="text-3xl font-bold text-primary mt-6">
        Your Mood Playlist
      </h2>

      {loading ? (
        <p className="mt-6 text-lightGray">
          Loading your personalized playlist...
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-6 mt-6">
          {playlist.map((song) => (
            <div key={song.id} className="flex flex-col items-center">
              <img
                src={song.albumCover}
                alt={song.title}
                className="w-32 h-32 rounded-lg"
              />
              <h3 className="mt-2 text-lg">{song.title}</h3>
              <p className="text-lightGray">{song.artist}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlist;
