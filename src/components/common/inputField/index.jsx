import "./style.scss"


function Input({ isReadOnly, isDisabled, type, value, placeholder, name, register, errors }) {

    return (
        <>
            <input {...register(name)}
                disabled={isDisabled}
                readOnly = {isReadOnly}
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
