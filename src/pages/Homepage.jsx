import React, { useState } from "react";
import Markdown from "../components/markdown/Markdown";

const classes = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    width: "50vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: 8,
    background: "#333",
  },
  right: {
    width: "50vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: 8,
    background: "#333",
  },
  header: { color: "#fff" },
  textarea: {
    flex: 1,
    width: "100%",
    border: "none",
    overflow: "auto",
    outline: "none",
    resize: "none",
    WebkitBoxShadow: "none",
    MozBoxShadow: "none",
    boxShadow: "none",
  },
  markdownContainer: {
    flex: 1,
    background: "#fff",
    padding: 8,
  },
};

const Homepage = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={classes.container}>
      <div style={classes.left}>
        <h3 style={classes.header}>Input</h3>
        <textarea
          style={classes.textarea}
          onChange={handleChange}
          placeholder="Add your content here!"
        />
      </div>
      <div style={classes.right}>
        <h3 style={classes.header}>Preview</h3>
        <div style={classes.markdownContainer}>
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
