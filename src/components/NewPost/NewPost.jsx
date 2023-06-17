import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

// css
import "katex/dist/katex.min.css";
import HighlightSyntax from "../HighlightSyntax/HighlightSyntax";

const NewPost = () => {
  const [input, setInput] = useState();

  return (
    <div>
      <div>
        <textarea
          autoFocus
          value={input}
          cols="30"
          rows="10"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{ code: HighlightSyntax }}
      >
        {input}
      </ReactMarkdown>
    </div>
  );
};

export default NewPost;
