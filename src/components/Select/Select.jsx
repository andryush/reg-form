import React from "react";

function Select(props) {
  const { labelText, id, data, onChange, name, value, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={error ? 'form-control error-border' : 'form-control'}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
        {id === "cities" ? (
          <option value="Select city">Select city</option>
        ) : null}
        {data.map((el) => {
          return (
            <option key={el.name} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Select;
