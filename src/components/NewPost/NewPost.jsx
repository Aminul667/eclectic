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
    const textarea = form.textarea.value;
    const date = new Date();
    const formattedDate = format(date, "MMMM do, yyyy H:mma");

    const savedPost = {
      author: user.displayName,
      email: user.email,
      photo: user.photoURL,
      title: title,
      date: formattedDate,
      post: textarea,
    };
    
    axios.post("http://localhost:5000/posts", savedPost).then((data) => {
            if (data.data.insertedId) {
              // reset();
              alert("Blog has been posted");
            }
            navigate("/");
          });
  };

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
            <textarea
              className="text-area"
              autoFocus
              name="textarea"
              value={text}
              cols="30"
              rows="10"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input type="submit" value="Save" />
          </form>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{ code: HighlightSyntax }}
          className="mark-down"
        >
          {text}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default NewPost;
