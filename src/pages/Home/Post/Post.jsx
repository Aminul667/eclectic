import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="author-info">
        <img src={post.photo} className="img-author" />
        <div>
          <h2 className="author-name">{post.author}</h2>
          <p>{post.date}</p>
        </div>
      </div>
      <Link className="post-title">{post.title}</Link>
      {/* <h2 className="post-title">{post.title}</h2> */}
    </div>
  );
};

export default Post;
