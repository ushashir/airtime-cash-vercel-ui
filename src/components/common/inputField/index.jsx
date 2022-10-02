import "./style.scss"


function Input({ readOnly, type, value, placeholder, name, register, errors, }) {

    return (
        <>
            <input {...register(name)}
                readOnly={readOnly}
                className="reusableInput"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
            />
            <span className="form-error">{errors[name]?.message}</span>
        </>
    )
}

export default Input
