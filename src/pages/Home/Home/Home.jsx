import "./Home.css";
import Post from "../Post/Post";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";

const Home = () => {
  const { id } = useParams();
  const posts = useLoaderData();
  const navigate = useNavigate();

  // const {
  //   data: posts = [],
  //   isLoading,
  //   isError,
  //   // refetch,
  // } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/posts");
  //     return res.json();
  //   },
  // });

  // const categories = ['all', 'art', 'mathematics', 'science', 'technology', 'coding', 'algorithm', 'data-structure', 'other']

  // const categoriesObject = {
  //   all: "All",
  //   art: "Art",
  //   mathematics: "Mathematics",
  //   science: "Science",
  //   technology: "Technology",
  //   coding: "Coding",
  //   algorithm: "Algorithm",
  //   "data-structure": "Data Structure",
  // };

  // const categories = Object.keys(categoriesObject);

  // console.log(categories);

  // categories.map((category) => console.log(categories.indexOf(category)));
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
