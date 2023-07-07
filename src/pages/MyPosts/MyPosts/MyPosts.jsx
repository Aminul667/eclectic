import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import "./MyPosts.css";

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

  const handleEdit = () => {
    console.log("Edit Is working");
  };

  const handleDelete = () => {
    console.log("Delete is working");
  };

  console.log(isError);

  return (
    <div>
      <h2>Articles: {myArticles.length}</h2>
      {isLoading ? <h1>Loading</h1> : ""}
      <div className="container-articles">
        {myArticles.map((article, count = 0) => (
          <div key={article._id} className="info-article">
            <div>
              <span>{count + 1}.</span>
              <Link
                to={`/article/${article._id}`}
                state={{ id: article._id }}
                className="link-article"
              >
                {article.title}
              </Link>
            </div>
            <div>
              <button onClick={handleEdit} className="btn-primary btn-margin">
                Edit
              </button>
              <button onClick={handleDelete} className="btn-primary">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
