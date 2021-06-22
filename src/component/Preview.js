import "../style/Preview.scss";
import marked from "marked/marked.min.js";
import React from "react";
import "../services/marked.js";
//import "prismjs/themes/prism.css";
const Preview = (props) => {
  return (
    <div
      className=" container-fluid negro p-3 ajustes"
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown),
      }}
    ></div>
  );
};
export default Preview;
