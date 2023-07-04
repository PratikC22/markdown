import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Code from "./code/Code";
import Checkbox from "./checkbox/Checkbox";
import Image from "./image/Image";

const Markdown = (props) => {
  const { children } = props;
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      escapeHtml={false}
      components={{ code: Code, input: Checkbox, img: Image }}
    />
  );
};

export default Markdown;
