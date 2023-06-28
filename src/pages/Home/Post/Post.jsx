import "./Post.css";

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div className="author-info">
          <img src={post.photo} className="img-author" />
          <div>
            <h2 className="author-name">{post.author}</h2>
            <p>{post.date}</p>
          </div>
        </div>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
};

export default Post;
