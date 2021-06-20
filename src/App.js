import './App.css';
import React from 'react';
import marked from 'marked/marked.min.js';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
marked.setOptions({
  breaks: true,
  highlight: (code) =>{
    return Prism.highlight(
      code,
      Prism.languages.javascript,
      'javascript');

  },  
});

console.
const renderer = {
  link(href,title,text){
    return `<a target="_blank" href="${href}">${text}</a>`;
  },
  heading(text,level,raw, slugger){
    return `<h${level} className="hola">${text}</h${level}>`;
  }
};
console.log({renderer});
marked.use({renderer});

class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        markdown: placeholder,
        editorMaximized: false,
        previewerMaximized: false 
      }
      this.handlerChange = this.handlerChange.bind(this);
      this.handlerEditorMaximize = this.handlerEditorMaximize.bind(this);
      this.handlerPreviewerMaximize = this.handlerPreviewerMaximize.bind(this);
    }
    handlerChange(e){
      this.setState({
        markdown: e.target.value
      });
    }
    handlerEditorMaximize(){
      this.setState((state) => ({
        editorMaximized: !state.editorMaximized
      }));
    }
    handlerPreviewerMaximize(){
      this.setState((state) =>({
        previewerMaximized: !state.previewerMaximized
      }));
    }
    render(){
      let icons = this.state.editorMaximized 
        ? 'bi bi-zoom-out'
        : this.state.previewerMaximized
        ? 'bi bi-zoom-out'
        : 'bi bi-zoom-in';
      //handler two states for split
      //position 0 than handler the editor 
      //position 1 than handler the preview
      let states = this.state.editorMaximized
      ? ['editorWrap maximazed', 'previewWrap d-none']
      : this.state.previewerMaximized 
      ? ['editorWrap d-none', 'previewWrap maximazed']
      : ['editorwrap', 'previewWrap'];
      return (
      <div className="mt-5 App App-header" >
        <div className={"ambos" + ' ' + states[0]}>
          <Toolbar 
            text={"Editor"} 
            onClick={this.handlerEditorMaximize} 
            clases={states[0] + ' ' + icons }
          />
          <Editor
            onChange={this.handlerChange} 
            markdown={this.state.markdown}
          /> 
        </div>
        <div className={"ambos" + ' ' + states[1]}>
          <Toolbar 
            text={"Previewer"} 
            onClick={this.handlerPreviewerMaximize}
            clases={states[1] + ' ' + icons}
          />
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
      );

    }
 
}

export default App;

const Toolbar = (props) =>{
  console.log(props.clases)
  return (
    <div className="w-100 d-flex bd-highlight">
      <i className="bi bi-droplet-half me-auto p-2 bd-highlight">{props.text}</i>
      
      <i 
        className={props.clases + ' ' + 'p-2 bd-highlight '}
        onClick={props.onClick}
      ></i>
    </div>
  );
}
const Editor = (props) => {
  return (
    <div className="w-100 p-3">
      <textarea
        className="w-100 "
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.markdown}
      />

    </div>
  );
}
const Preview = (props) => {
  return (
    <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)
      }}
    ></div>
  );
}
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

