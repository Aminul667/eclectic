import { useQuery } from "@tanstack/react-query";
import "./Home.css";
import Post from "../Post/Post";
import { Link } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";

const Home = () => {
  const {
    data: posts = [],
    isLoading,
    isError,
    // refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      return res.json();
    },
  });

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
      {/* <div className="category-container">
        <h2>Category</h2>
        {categories.map((category) => (
          <p key={categories.indexOf(category)}>
            <Link>{categoriesObject[category]}</Link>
          </p>
        ))}
      </div> */}
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
