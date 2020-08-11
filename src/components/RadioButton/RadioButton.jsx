import React from 'react';
import './RadioButton.css';

function RadioButton(props) {
    const {type, id, name, value, labelText, checked, onChange} = props;
    return(
        <div className="form-check">
            <input type={type} className="form-check-input" id={id} name={name} value={value} checked={checked} onChange={onChange}/>
            <label htmlFor={id} className="form-check-label">{labelText}</label>
        </div>
    )
}
export default RadioButton;