import { useQuery } from "@tanstack/react-query";
import "./Home.css";
import Post from "../Post/Post";

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

  return (
    <div className="home-container">
      <div className="category-container">
        <h2>Category</h2>
        <p>All</p>
        <p>Mathematics</p>
      </div>
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
