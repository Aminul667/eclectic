import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar-container">
        <div>
          <Link to="/">
            <span>Eclectic</span>
          </Link>
        </div>
        <div>
          <Link to="" className="group-link">Search</Link>
          <Link to="/" className="group-link">Home</Link>
          <Link to="/my-posts" className="group-link">My Posts</Link>
          <Link to="/new-post" className="group-link">New Post</Link>
        </div>
        <div className="profile-container">
          <img src="" className="profile-img"/>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
