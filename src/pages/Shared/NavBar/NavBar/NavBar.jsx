import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/my-posts">My Posts</Link>
      <Link to="/new-post">New Post</Link>
    </div>
  );
};

export default NavBar;
