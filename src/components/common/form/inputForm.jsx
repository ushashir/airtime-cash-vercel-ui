import "./style.scss"
import { useState } from 'react';

function FormInput(props) {
  const { label, type } = props;

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        type={type} 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput;