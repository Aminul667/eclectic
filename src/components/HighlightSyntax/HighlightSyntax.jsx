import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HighlightSyntax = ({ children, language }) => {
  return (
    <div>
      <SyntaxHighlighter
        language={language ?? null}
        style={atomOneDarkReasonable}
      >
        {children ?? ""}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighlightSyntax;
