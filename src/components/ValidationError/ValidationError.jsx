import React from "react";

function ValidationError(props) {
  return (
    <>
      {props.error ? (
        <div class="alert alert-danger" role="alert">
          {props.error}
        </div>
      ) : null}
    </>
  );
}
export default ValidationError;
