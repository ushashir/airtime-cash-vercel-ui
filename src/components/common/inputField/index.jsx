import "./style.scss"

function Input(prop) {
    return (
        <input
            className="reusableInput"
            type={prop.type}
            name={prop.name}
            value={prop.value}
            placeholder={prop.placeholder}
            onChange={prop.onChange}
        />
    )
}

export default Input
