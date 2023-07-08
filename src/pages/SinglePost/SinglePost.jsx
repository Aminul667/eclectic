import { useState } from "react";
import Modals from "../Modals/Modals";
import { Link } from "react-router-dom";

const SinglePost = ({ count, article }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log("Delete is working");
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
            onClick={() => setIsOpen(!isOpen)}
            className="btn-primary btn-margin"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn-primary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
