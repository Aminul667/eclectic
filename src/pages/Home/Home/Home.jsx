import "./Home.css";
import Post from "../Post/Post";
import { useLoaderData, useNavigate } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";

const Home = () => {
  // const { id } = useParams();
  const posts = useLoaderData();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/article/create-article");
  };

  return (
    <div className="home-container">
      <LeftNav></LeftNav>
      <div>
        <div className="container-info">
          <h1>Articles: {posts.length}</h1>
          <button className="btn-article" onClick={handleNavigate}>
            Write a new article
          </button>
        </div>
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
