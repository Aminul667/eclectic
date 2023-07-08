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
    // isLoading,
    // isError,
    // refetch,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await fetch(`https://myblog-server.vercel.app/posts/${id}`);
      return res.json();
    },
  });

  return (
    <div>
      <h1 className="post-title">{post.title}</h1>
      <div className="markdown-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{ code: HighlightSyntax }}
        >
          {post.post}
        </ReactMarkdown>
      </div>
      <div className="writer-info">
        <p>{post.author}</p>
        <p>{post.date}</p>
      </div>
    </div>
  );
};

export default ReadPost;
