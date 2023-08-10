import { useState } from "react";
import Modals from "../Modals/Modals";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SinglePost = ({ count, article, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#71c6dd",
      cancelButtonColor: "#fc4b0b",
      color: "#e5e5e5",
      background: "#3f4156",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://myblog-server.vercel.app/post/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Article has been deleted",
                showConfirmButton: false,
                timer: 2000,
                toast: true,
                color: "#e5e5e5",
                background: "#3f4156",
                grow: true,
                timerProgressBar: true,
              });
              refetch();
            }
          })
          .then((error) => console.log(error));
      }
    });
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
