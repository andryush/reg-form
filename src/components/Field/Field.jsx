import React from "react";
import "./Field.css";

function Field(props) {
  const { id, labelText, type, placeHolder, name } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        className="form-control"
        placeholder={placeHolder}
        name={name}
      />
    </div>
  );
}
export default Field;
