import React from "react";
import "./Field.css";

function Field(props) {
  const { id, labelText, type, placeHolder, name, onChange, value, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        className={error ? 'form-control error-border' : 'form-control'}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Field;
