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
            Eclectic
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
        </div>
        <div className="profile-container">
          <img src={user?.photoURL} className="profile-img" />
          {user ? (
            <button onClick={handleLogOut} className="btn-logout">
              Log Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
