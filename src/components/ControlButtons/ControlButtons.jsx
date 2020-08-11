import React from "react";
import "./ControlButtons.css";

function ControlButtons(props) {
  const { onSubmit, step, decrementStep } = props;
  return (
    <div className="d-flex justify-content-center mt-3">
      <button
        type="button"
        className="btn btn-light mr-2"
        disabled={step === 1}
        onClick={decrementStep}
      >
        Previous
      </button>
      <button type="submit" className="btn btn-secondary" onClick={onSubmit}>
        Next
      </button>
    </div>
  );
}
export default ControlButtons;
