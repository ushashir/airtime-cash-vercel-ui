import "./style.scss"

function Button(prop) {
    return (
        <input className="btn" value={prop.value} type={prop.type} style={prop.style} />
    )
}

export default Button
