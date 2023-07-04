import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = (props) => {
  const { node, inline, className, children, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      {...rest}
      children={String(children).replace(/\n$/, "")}
      style={a11yDark}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

export default Code;
