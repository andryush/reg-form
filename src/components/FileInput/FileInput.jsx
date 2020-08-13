import React from "react";
import "./FileInput.css";

function FileInput(props) {
  const { id, labelText, name, onChange, error } = props;
  return (
    <div className="custom-file mb-2">
      <input
        type="file"
        className="custom-file-input"
        id={id}
        name={name}
        onChange={onChange}
      />
      <label
        className={
          error ? "custom-file-label error-border" : "custom-file-label"
        }
        htmlFor={id}
      >
        {labelText}
      </label>
    </div>
  );
}
export default FileInput;
