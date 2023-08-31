import { Link } from "react-router-dom";
import "./Post.css";
import { AiFillLike } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const style = {
    color: "#71c6dd",
  };

  const handleLike = () => {
    setLike(!like);
  }
  
  return (
    <div className="post-container">
      <div className="card-top">
        <div className="author-info">
          <img src={post.photo} className="img-author" />
          <div>
            <h2 className="author-name">{post.author}</h2>
            <p className="post-date">{post.date}</p>
          </div>
        </div>
        <div>
          <AiFillLike className="like-btn"></AiFillLike>
          <BsBookmarksFill className="bookmark-btn"></BsBookmarksFill>
        </div>
      </div>
      <Link
        to={`/article/${post._id}`}
        state={{ id: post._id }}
        className="post-link-title"
      >
        {post.title}
      </Link>
    </div>
  );
};

export default Post;
