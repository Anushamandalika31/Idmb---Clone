import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addFavorite={addFavorite} favorites={favorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} removeFavorite={removeFavorite} />} />
      </Routes>
    </Router>
  );
};

export default App;
