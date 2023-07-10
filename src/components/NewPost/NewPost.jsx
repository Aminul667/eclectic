import { useContext, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// css
import "katex/dist/katex.min.css";
import "./NewPost.css";
import HighlightSyntax from "../HighlightSyntax/HighlightSyntax";
import { format } from "date-fns";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState();
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const textarea = form.textarea.value;
    const date = new Date();
    const formattedDate = format(date, "MMMM do, yyyy H:mma");

    const savedPost = {
      author: user.displayName,
      email: user.email,
      photo: user.photoURL,
      title: title,
      category: category,
      date: formattedDate,
      post: textarea,
    };

    axios
      .post("https://myblog-server.vercel.app/posts", savedPost)
      .then((data) => {
        if (data.data.insertedId) {
          // reset();
          alert("Article has been posted");
        }
        navigate("/article/my-articles", { state: { email: user.email } });
      });
  };

  const defaultText = "This is a default text";

  return (
    <>
      <div className="new-post-container">
        <div className="new-post-form">
          <form onSubmit={handleSave}>
            {/* form title */}
            <div className="">
              <input
                type="text"
                name="title"
                required
                placeholder="Title of the post"
                className="input-section"
              />
            </div>
            <div>
              <select name="category" className="select-section">
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
              className="text-area content-styles"
              autoFocus
              name="textarea"
              value={text}
              defaultValue={defaultText}
              cols="30"
              rows="10"
              required
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input type="submit" value="Save" className="btn btn-primary" />
          </form>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{ code: HighlightSyntax }}
          className="mark-down content-styles"
        >
          {text || defaultText}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default NewPost;
