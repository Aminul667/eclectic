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

  return (
    <div className="container">
      <textarea
        className="text-area"
        autoFocus
        value={input}
        cols="30"
        rows="10"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{ code: HighlightSyntax }}
        className="mark-down"
      >
        {input}
      </ReactMarkdown>
    </div>
  );
};

export default NewPost;
