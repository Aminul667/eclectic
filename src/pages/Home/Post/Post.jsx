import { Link } from "react-router-dom";
import "./Post.css";
import { AiFillLike } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const Post = ({ post }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const { user } = useContext(AuthContext);

  // console.log(post);
  console.log(user?.email);

  const handleBookmark = (bookmarkedPost) => {
    setBookmark(!bookmark);
    bookmarkedPost.bookmarkedBy = user.email;
    console.log(bookmarkedPost);

    axios
      .post("http://localhost:5000/bookmarks", bookmarkedPost)
      .then((data) => {
        console.log(data)
      });
  };

  return (
    <div className="post-container">
      <div className="card-top">
        <div className="author-info">
          {/* {post.photo && <img src={post.photo} className="img-author" />} */}
          {post.photo ? (
            <img src={post.photo} className="img-author" />
          ) : (
            <div className="img-avatar img-author">{post.author[0]}</div>
          )}
          <div>
            <h2 className="author-name">{post.author}</h2>
            <p className="post-date">{post.date}</p>
          </div>
        </div>
        <div>
          <AiFillLike
            onClick={() => setLike(!like)}
            className={`like-btn ${like ? "toggle" : ""}`}
          ></AiFillLike>
          <BsBookmarksFill
            onClick={() => handleBookmark(post)}
            className={`bookmark-btn ${bookmark ? "toggle" : ""}`}
          ></BsBookmarksFill>
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
