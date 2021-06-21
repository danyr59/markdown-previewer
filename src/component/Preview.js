import "../style/Preview.scss";
import marked from "marked/marked.min.js";
import React from "react";
import "../services/marked.js";
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
