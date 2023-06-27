import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// css
import "katex/dist/katex.min.css";
import "./NewPost.css";
import HighlightSyntax from "../HighlightSyntax/HighlightSyntax";

const NewPost = () => {
  const [text, setText] = useState();

  const handleSave = (event) => {
    event.preventDefault();
    const form = event.target;
    const textarea = form.textarea.value;
    const title = form.title.value;
    console.log("From textarea:");
    console.log(title);
    console.log(textarea);
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
      <div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default NewPost;
