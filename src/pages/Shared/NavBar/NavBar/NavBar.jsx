import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const activeStyle = {
    color: "#71c6dd",
  };

  return (
    <header className="header">
      <nav className="navbar-container">
        <div>
          <NavLink to="/" className="eclectic-link">
            <span className="e-letter">E</span>clectic
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/category/all"
            className="group-link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/article/my-articles"
              state={{ email: user?.email }}
              className="group-link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              My Articles
            </NavLink>
          )}
          {user ? (
            <button onClick={handleLogOut} className="group-link btn-logout">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="group-link">
              Login
            </Link>
          )}
        </div>
        <img src={user?.photoURL} className="profile-img" />
      </nav>
    </header>
  );
};

export default NavBar;
