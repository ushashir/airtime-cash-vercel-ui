import "./style.scss"

function Input(prop) {
    return (
        <input
            className="reusableInput"
            type={prop.type}
            name={prop.name}
            value={prop.value}
        />
    )
}

export default Input
