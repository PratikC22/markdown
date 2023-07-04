import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

/**
<details><summary>Click to expand</summary>
<p>

<img src='https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'>

#### Codeblock!
```js
console.log("hello world!")
```

</p>
</details>
*/

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
