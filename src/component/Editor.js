import "../style/Editor.scss";
const Editor = (props) => {
  return (
    <div className="w-100 h-100">
      <textarea
        className="ajuste w-100 width-ajuste"
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.markdown}
      />
    </div>
  );
};
export default Editor;
