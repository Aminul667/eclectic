import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import "./MyPosts.css";
import SinglePost from "../../SinglePost/SinglePost";

const MyPosts = () => {
  const params = useLocation();
  const email = params.state.email;

  const {
    data: myArticles = [],
    isLoading,
    // isError,
    refetch,
  } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await fetch(
        `https://myblog-server.vercel.app/users/${email}`
      );
      return res.json();
    },
  });

  return (
    <>
      <div className="container-all-article">
        <h2>Articles: {myArticles.length}</h2>
        {isLoading ? <h1>Loading</h1> : ""}
        <div className="container-articles">
          {myArticles.map((article, count = 0) => (
            <SinglePost
              key={article._id}
              count={count + 1}
              article={article}
              refetch={refetch}
            ></SinglePost>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
