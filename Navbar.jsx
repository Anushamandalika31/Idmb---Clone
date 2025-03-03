import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">IMDb Clone</Link>
      <Link className="btn btn-warning" to="/favorites">My Favorites</Link>
    </nav>
  );
};

export default Navbar;
