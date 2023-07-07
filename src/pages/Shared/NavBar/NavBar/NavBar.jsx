import { Link } from "react-router-dom";
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

  // console.log(user?.email)

  return (
    <header className="header">
      <nav className="navbar-container">
        <div>
          <Link to="/">
            <span>Eclectic</span>
          </Link>
        </div>
        <div>
          <Link to="" className="group-link">
            Search
          </Link>
          <Link to="/category/all" className="group-link">
            Home
          </Link>
          <Link
            to="/article/my-articles"
            state={{ email: user?.email }}
            className="group-link"
          >
            My Articles
          </Link>
        </div>
        <div className="profile-container">
          <img src={user?.photoURL} className="profile-img" />
          {user ? (
            <button onClick={handleLogOut} className="">
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
