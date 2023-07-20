import "./Home.css";
import Post from "../Post/Post";
import { useNavigate, useParams } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Home = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://myblog-server.vercel.app/categories/${id}?search=${search}`)
      .then((res) => {
        setPosts(res.data);
      });
  }, [id, search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  const handleNavigate = () => {
    navigate("/article/create-article");
  };

  return (
    <div className="home-container">
      <LeftNav></LeftNav>
      <div>
        <div className="container-info">
          <h1>Articles: {posts.length}</h1>
          <div>
            <input type="text" ref={searchRef} placeholder="Search" />
            <button onClick={handleSearch} className="btn">
              Go
            </button>
          </div>
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
