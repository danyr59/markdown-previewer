import "./App.css";
import React from "react";
import Toolbar from "./component/Toolbar.js";
import Editor from "./component/Editor.js";
import Preview from "./component/Preview.js";
import marked from "./services/marked.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editormaximized: false,
      previewermaximized: false,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerEditorMaximize = this.handlerEditorMaximize.bind(this);
    this.handlerPreviewerMaximize = this.handlerPreviewerMaximize.bind(this);
  }
  handlerChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }
  handlerEditorMaximize() {
    this.setState((state) => ({
      editormaximized: !state.editormaximized,
    }));
  }
  handlerPreviewerMaximize() {
    this.setState((state) => ({
      previewermaximized: !state.previewermaximized,
    }));
  }
  render() {
    let icons = this.state.editormaximized
      ? "bi bi-zoom-out"
      : this.state.previewermaximized
      ? "bi bi-zoom-out"
      : "bi bi-zoom-in";
    //handler two states for split
    //position 0 than handler the editor
    //position 1 than handler the preview
    let states = this.state.editormaximized
      ? ["editorwrap maximazed", "previewwrap d-none"]
      : this.state.previewermaximized
      ? ["editorwrap d-none", "previewwrap maximazed"]
      : ["editorwrap", "previewwrap"];
    return (
      <div className="mt-5 App App-header">
        <div className={"ambos" + " " + states[0]}>
          <Toolbar
            text={"Editor"}
            onClick={this.handlerEditorMaximize}
            clases={states[0] + " " + icons}
          />
          <Editor
            onChange={this.handlerChange}
            markdown={this.state.markdown}
          />
        </div>
        <div className={"ambos" + " " + states[1]}>
          <Toolbar
            text={"Previewer"}
            onClick={this.handlerPreviewerMaximize}
            clases={states[1] + " " + icons}
          />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
const placeholder = `# welcome to my react markdown previewer!

## this is a sub-heading...
### and here's some other cool stuff:

heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherexample(firstline, lastline) {
  if (firstline == '\`\`\`' && lastline == '\`\`\`') {
    return multilinecode;
  }
}
\`\`\`

you can also make text **bold**... whoa!
or _italic_.
or... wait for it... **_both!_**
and feel free to go crazy ~~crossing stuff out~~.

there's also [links](https://www.freecodecamp.org), and
> block quotes!

and if you want to get really crazy, even tables:

wild header | crazy header | another header?
------------ | ------------- | -------------
your content can | be here, and it | can be here....
and here. | okay. | i think we get it.

- and of course there are lists.
  - some are bulleted.
     - with different indentation levels.
        - that look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
