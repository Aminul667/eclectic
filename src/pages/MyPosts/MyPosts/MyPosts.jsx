import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import "./MyPosts.css";
import Modals from "../../Modals/Modals";
import { useState } from "react";

const MyPosts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalArticle, setModalArticle] = useState([])
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

  const handleEdit = (id) => {
    console.log("Edit", id);
    setIsOpen(!isOpen);
    const findArticle = myArticles.find((findArticle) => findArticle._id === id);
    setModalArticle(findArticle);
  };

  const handleDelete = () => {
    console.log("Delete is working");
  };

  // console.log(isError);
  console.log(modalArticle);

  return (
    <>
      {/* <div
        className="button_wrapper_styles"
        onClick={() => console.log("clicked")}
      >
        <Modals open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modals>
      </div> */}
      <Modals open={isOpen} onClose={() => setIsOpen(false)} modalArticle={modalArticle}>
        {/* Fancy Modal */}
      </Modals>
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
                <button
                  onClick={() => handleEdit(article._id)}
                  className="btn-primary btn-margin"
                >
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
    </>
  );
};

export default MyPosts;
