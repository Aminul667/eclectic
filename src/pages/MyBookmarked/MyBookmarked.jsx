import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import "./MyBookmarked.css";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookmarked = () => {
  const params = useLocation();
  const email = params.state.email;
//   console.log(params);

  const {
    data: myBookmarks = [],
    // isLoading,
    // isError,
    refetch,
  } = useQuery({
    queryKey: ["bookmark"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookmarks/${email}`);
      return res.json();
    },
  });

  const handleDelete = (id) => {
    console.log(id)
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
          .delete(`http://localhost:5000/bookmark/${id}`)
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
    <div className="bookmark-container">
      <h2>Bookmarked: {myBookmarks.length}</h2>
      <table className="bookmarked-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBookmarks.map((bookmark, count = 0) => (
            <tr key={bookmark._id}>
              <td>{count + 1}</td>
              <td>
                {/* {bookmark?.title} */}
                <Link
                  to={`/article/${bookmark.articleId}`}
                  state={{ id: bookmark.articleId }}
                  className="link-article"
                >
                  {bookmark?.title}
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(bookmark._id)}
                  className="btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookmarked;
