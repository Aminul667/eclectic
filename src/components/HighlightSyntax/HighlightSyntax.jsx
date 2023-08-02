import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
// import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HighlightSyntax = ({ ...props }) => {
  const children = props.children;
  const language = props?.className?.split("-")[1];

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
