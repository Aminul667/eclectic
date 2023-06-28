import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import "./ReadPost.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import HighlightSyntax from "../../components/HighlightSyntax/HighlightSyntax";

const ReadPost = () => {
  const { id } = useParams();

  const {
    data: post = [],
    isLoading,
    isError,
    // refetch,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      return res.json();
    },
  });

  return (
    <div className="read-container">
      <h2>Read the post here</h2>
      <div className="markdown-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{ code: HighlightSyntax }}
        >
          {post.post}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ReadPost;
