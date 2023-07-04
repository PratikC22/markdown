import React from "react";

const Checkbox = (props) => {
  const { checked } = props;
  return <input checked={checked} type="checkbox" />;
};

export default Checkbox;
