import React from "react";

const MovieCard = ({ movie, isFavorite, addFavorite, removeFavorite }) => {
  console.log("MovieCard Props:", { movie, isFavorite, addFavorite, removeFavorite });

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {isFavorite ? (
        <button onClick={() => removeFavorite(movie.imdbID)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default MovieCard;
