import { useState } from "react";
import Modals from "../Modals/Modals";
import { Link } from "react-router-dom";
import axios from "axios";

const SinglePost = ({ count, article, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/post/${id}`)
      .then((res) => console.log(res.data))
      .then((error) => console.log(error));
    alert(`${id} deleted`);
    refetch();
  };

  return (
    <>
      <Modals
        open={isOpen}
        onClose={() => setIsOpen(false)}
        modalArticle={article}
      ></Modals>
      <div className="info-article">
        <div>
          <span>{count}.</span>
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
            onClick={() => setIsOpen(!isOpen)}
            className="btn-primary btn-margin"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(article._id)}
            className="btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
