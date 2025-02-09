import React, { useState } from "react";
import { db, auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Preferences = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [preferences, setPreferences] = useState({
    genres: [],
    moodEnhancement: "",
    favoriteArtists: [],
    language: "",
  });

  const handleSelection = (category, value) => {
    if (category === "genres" || category === "favoriteArtists") {
      setPreferences((prev) => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      }));
    } else {
      setPreferences((prev) => ({ ...prev, [category]: value }));
    }
  };

  const savePreferences = async () => {
    if (!user) {
      toast.error("User not logged in!");
      return;
    }

    try {
      await setDoc(doc(db, "users", user.uid), { preferences });
      toast.success("Preferences saved successfully!");
      navigate("/home"); // Redirect to Home Page
    } catch (error) {
      toast.error("Error saving preferences.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-dark text-white">
      <h2 className="text-3xl font-bold text-primary">
        MAKE YOUR PLAYLIST TRULY YOURS!
      </h2>
      <div className="mt-6 flex flex-col space-y-4 w-3/4">
        {/* Preferred Genres */}
        <div>
          <h3 className="text-lg">1. Preferred Genres</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Pop", "Rock", "Jazz", "Classical", "Hip Hop", "Other"].map(
              (genre) => (
                <button
                  key={genre}
                  onClick={() => handleSelection("genres", genre)}
                  className={`px-4 py-2 rounded-md border ${
                    preferences.genres.includes(genre)
                      ? "bg-primary"
                      : "border-primary"
                  }`}
                >
                  {genre}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mood Enhancement */}
        <div>
          <h3 className="text-lg">2. Mood Enhancement</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Match My Mood", "Uplift Me", "Calm Me Down", "Energize Me"].map(
              (mood) => (
                <button
                  key={mood}
                  onClick={() => handleSelection("moodEnhancement", mood)}
                  className={`px-4 py-2 rounded-md border ${
                    preferences.moodEnhancement === mood
                      ? "bg-primary"
                      : "border-primary"
                  }`}
                >
                  {mood}
                </button>
              )
            )}
          </div>
        </div>

        {/* Favorite Artists */}
        <div>
          <h3 className="text-lg">3. Favorite Artists</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Taylor Swift",
              "Harry Styles",
              "Selena Gomez",
              "SZA",
              "Coldplay",
            ].map((artist) => (
              <button
                key={artist}
                onClick={() => handleSelection("favoriteArtists", artist)}
                className={`px-4 py-2 rounded-md border ${
                  preferences.favoriteArtists.includes(artist)
                    ? "bg-primary"
                    : "border-primary"
                }`}
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

        {/* Language Preferences */}
        <div>
          <h3 className="text-lg">4. Language Preferences</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["English", "Spanish", "French", "Hindi", "Korean"].map((lang) => (
              <button
                key={lang}
                onClick={() => handleSelection("language", lang)}
                className={`px-4 py-2 rounded-md border ${
                  preferences.language === lang
                    ? "bg-primary"
                    : "border-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={savePreferences}
          className="mt-6 bg-primary text-white px-6 py-2 rounded-md"
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Preferences;
