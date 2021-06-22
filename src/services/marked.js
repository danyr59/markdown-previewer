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
    return `<h${level} class="h${level} border-${level}">${text}</h${level}>`;
  },
  image(href, title, text) {
    return `<img src="${href}"  class="img-fluid" alt="${text}" >`;
  },
};
console.log({ renderer });
marked.use({ renderer });
export default marked;
