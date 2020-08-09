import React from "react";
import "./FormCard.css";

function FormCrad(props) {
  return (
    <div className="card mt-5">
      <div className="card-body">
          {props.children}
      </div>
    </div>
  );
}
export default FormCrad;
