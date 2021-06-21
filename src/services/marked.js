import marked from "marked/marked.min.js";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

marked.setOptions({
  breaks: true,
  highlight: (code) => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = {
  link(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  },
  heading(text, level, raw, slugger) {
    return `<h${level} class="hola">${text}</h${level}>`;
  },
};
console.log({ renderer });
marked.use({ renderer });
export default marked;
