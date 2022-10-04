import "./style.scss"


function Input({ readOnly, type, value, isDisabled, placeholder, name, register, errors }) {

    return (
        <>
            <input {...register(name)}
                disabled={isDisabled}
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
