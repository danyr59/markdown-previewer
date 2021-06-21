import "../style/Editor.scss"
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
};
export default Editor;
