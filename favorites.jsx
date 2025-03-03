import React from "react";
import MovieCard from "../components/MovieCard";

const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>My Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
