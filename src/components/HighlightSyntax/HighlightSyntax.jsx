import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
// import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HighlightSyntax = ({ ...props }) => {
  const children = props.children;
  const language = props?.className?.split("-")[1];

  return (
    <div className="code-container">
      <SyntaxHighlighter 
        language={language ?? null} 
        style={atomOneDarkReasonable}
        customStyle={{borderRadius: "8px"}}
        // lineProps={{style: {paddingBottom: 8}}}
        // wrapLines={true}
        // showLineNumbers={true}
      >
        {children ?? ""}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighlightSyntax;
