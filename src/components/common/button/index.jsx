import "./style.scss";

function Button({ value, type, style, disabled }) {
  return (
    <input
      className="btn"
      value={value}
      type={type}
      style={style}
      disabled={disabled}
    />
  );
}

export default Button;
