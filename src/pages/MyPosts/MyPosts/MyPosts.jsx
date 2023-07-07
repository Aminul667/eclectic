import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import './MyPosts.css';

const MyPosts = () => {
  const params = useLocation();
  const email = params.state.email;

  const {
    data: myArticles = [],
    isLoading,
    isError,
    // refetch,
  } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${email}`);
      return res.json();
    },
  });

  console.log(isError);

  return (
    <div>
      <h2>Articles: {myArticles.length}</h2>
      {isLoading ? <h1>Loading</h1> : ""}
      {myArticles.map((article, count = 0) => (
        <div key={article._id} className="container-article">
          <span>{count + 1}</span>
          <Link to={`/article/${article._id}`} state={{ id: article._id }}>
            {article.title}
          </Link>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyPosts;
