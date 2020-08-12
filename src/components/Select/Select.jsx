import React from "react";

function Select(props) {
  const { labelText, id, data, onChange, name, value } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select className="form-control" id={id} name={name} onChange={onChange} value={value}>
        {data.map((el) => {
          return <option key={el.name} value={el.id}>{el.name}</option>;
        })}
      </select>
    </div>
  );
}
export default Select;
