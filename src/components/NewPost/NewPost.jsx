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
import rehypeRaw from "rehype-raw";

import Swal from "sweetalert2";

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
      background: "#2d2d39",
    };

    axios
      .post("https://myblog-server.vercel.app/posts", savedPost)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Article has been posted",
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            color: "#e5e5e5",
            background: "#3f4156",
            grow: true,
            timerProgressBar: true,
          });
        }
        navigate("/article/my-articles", { state: { email: user.email } });
      });
  };

  const defaultText = `
  # Important Properties

  ### Markdown
  This application accepts Markdown Syntax. To know the syntax please visit the link below.

  https://www.markdownguide.org/cheat-sheet/

  ### Latex for Mathematics
  This application also supports Latex syntax for writing mathematical formulas. You can write any mathematical formulas and equations using Latex syntax.

  For the inline equation, you have to write latex syntax within two dollar signs. For example $ax^2 + bx + c = 0$

  For the block equation, you have to write latex syntax within double dollar signs. For example
  $$
  ax^2 + bx + c = 0
  $$
  $$
  A_{m,n} = 
  \\begin{pmatrix}
    a_{1,1} & a_{1,2} & \\cdots & a_{1,n} \\\\
    a_{2,1} & a_{2,2} & \\cdots & a_{2,n} \\\\
    \\vdots  & \\vdots  & \\ddots & \\vdots  \\\\
    a_{m,1} & a_{m,2} & \\cdots & a_{m,n} 
  \\end{pmatrix}
  $$

  $$
  \\begin{align*}
  y &= (x + 1)(x - 2)\\\\
  &= x^2 -2x + x - 2\\\\
  &= x^2 - x - 2
  \\end{align*}
  $$

  $$
  \\frac{\\mathrm d}{\\mathrm d x} \\left( k g(x) \\right)
  $$

  To know the latex syntax, please visit the link below.

  https://katex.org/docs/supported.html

  Also, you can google to find out more about latex equations.
  `;

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
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
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
