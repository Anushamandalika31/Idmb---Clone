import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "31210f05"; // ✅ Your OMDb API key

const Home = ({ favorites, addFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nenu local");

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []);

  const fetchMovies = async (title) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
    }
  };

  return (
    <div className="home-container">
      <h1>IMDb Clone</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => fetchMovies(searchTerm)}>Search</button>
      </div>

      {/* Movie List */}
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie}
              isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
              addFavorite={addFavorite} // ✅ Now properly passed
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
