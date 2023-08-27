import { format } from "date-fns";
import "./Modals.css";
import axios from "axios";
import Swal from "sweetalert2";

const Modals = ({ open, onClose, modalArticle }) => {
  const handleUpdate = () => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const textarea = form.textarea.value;
    const editedDate = new Date();
    const formattedEditedDate = format(editedDate, "MMMM do, yyyy H:mma");

    const updatedPost = {
      title: title,
      category: category,
      lastUpdated: formattedEditedDate,
      post: textarea,
    };

    axios
      .patch(
        `https://myblog-server.vercel.app/users/posts/${modalArticle._id}`,
        updatedPost
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Article has been updated",
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            color: "#e5e5e5",
            background: "#3f4156",
            grow: true,
            timerProgressBar: true,
          });
          onClose();
        }
      })
      .catch((error) => console.log(error));
    // onClose();
    // alert("Updated Successfully");
  };

  if (!open) return null;
  return (
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose} className="btn-close">
          X
        </button>
        <div>
          <form onSubmit={handleUpdate}>
            {/* form title */}
            <div className="">
              <input
                defaultValue={modalArticle.title}
                type="text"
                name="title"
                required
                placeholder="Title of the post"
                className="input-section"
              />
            </div>
            <div>
              <select
                name="category"
                className="select-section"
                defaultValue={modalArticle.category}
              >
                <option value="select-category" className="option">
                  --Please select an category--
                </option>
                <option value="art" className="option">
                  Art
                </option>
                <option value="mathematics" className="option">
                  Mathematics
                </option>
                <option value="science" className="option">
                  Science
                </option>
                <option value="technology" className="option">
                  Technology
                </option>
                <option value="coding" className="option">
                  Coding
                </option>
                <option value="algorithm" className="option">
                  Algorithm
                </option>
                <option value="data-structure" className="option">
                  Data Structure
                </option>
                <option value="other" className="option">
                  Other
                </option>
              </select>
            </div>
            <textarea
              className="modal-text-area modal-content-styles"
              autoFocus
              name="textarea"
              defaultValue={modalArticle.post}
              cols="30"
              rows="10"
              required
            ></textarea>
            <input type="submit" value="Update" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modals;
