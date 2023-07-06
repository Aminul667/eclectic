import "./Home.css";
import Post from "../Post/Post";
import {  useLoaderData, useParams } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";

const Home = () => {
  const { id } = useParams();
  const posts = useLoaderData();

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

  console.log("from Home",id)
  console.log('home',posts)

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

  return (
    <div className="home-container">
      <LeftNav></LeftNav>
      <div>
        <h1>All Posts: {posts.length}</h1>
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
