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
  const [input, setInput] = useState();

  const handleSave = (event) => {
    event.preventDefault();
    const form = event.target;
    const textarea = form.textarea.value;
    console.log("From textarea:");
    console.log(textarea);
  };

  return (
    <>
      <div className="container">
        <div className="new-post-form">
          <form onSubmit={handleSave}>
            <textarea
              className="text-area"
              autoFocus
              name="textarea"
              value={input}
              cols="30"
              rows="10"
              onChange={(e) => setInput(e.target.value)}
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
          {input}
        </ReactMarkdown>
      </div>
      <div>
        {input}
      </div>
    </>
  );
};

export default NewPost;
