import "./App.css";
import React from "react";
import Toolbar from "./component/Toolbar.js";
import Editor from "./component/Editor.js";
import Preview from "./component/Preview.js";

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
      ? ["editorWrap maximazed", "previewWrap d-none"]
      : this.state.previewermaximized
      ? ["editorWrap d-none", "previewWrap maximazed"]
      : ["editorWrap", "previewWrap"];
    return (
      <div className="App colorScheme">
        <div className={`containers ${states[0]}`}>
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
        <div className={`containers ${states[1]}`}>
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
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
