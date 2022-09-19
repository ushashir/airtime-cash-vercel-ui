import "./style.scss";

function ButtonShort(prop) {
  return <input className="btn" value={prop.value} type={prop.type} />;
}

export default ButtonShort;
