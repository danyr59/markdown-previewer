import "../style/Toolbar.scss";
const Toolbar = (props) => {
  console.log(props.clases);
  return (
    <div className="w-100 toolbar">
      <i className="bi bi-droplet-half me-auto p-2 bd-highlight">
        {props.text}
      </i>

      <i className={`${props.clases} p-2 icono`} onClick={props.onClick}></i>
    </div>
  );
};
export default Toolbar;
