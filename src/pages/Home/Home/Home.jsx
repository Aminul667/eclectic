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

  console.log(posts);
  console.log(isLoading);
  console.log(isError);
  return (
    <div className="home-container">
      <h1>All Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post 
          key={post._id}
          post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
