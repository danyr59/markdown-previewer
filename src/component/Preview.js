import marked from "marked/marked.min.js";
import React from "react";
const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown),
      }}
    ></div>
  );
};
export default Preview;
