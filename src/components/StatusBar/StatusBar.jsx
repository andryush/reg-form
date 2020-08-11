import React from "react";
import "./StatusBar.css";

function StatusBar(props) {

  return (
    <div className="steps-container mb-4">
        <div className="step">
            <div className={props.step === 1 ? 'step-number active' : 'step-number' && props.step > 1 ? 'step-number completed' : 'step-number'}>1</div>
            <div className="step-title">Basic</div>
        </div>
        <div className="step">
            <div className={props.step === 2 ? 'step-number active' : 'step-number' && props.step > 2 ? 'step-number completed' : 'step-number'}>2</div>
            <div className="step-title">Contacts</div>
        </div>
        <div className="step">
            <div className={props.step === 3 ? 'step-number active' : 'step-number' && props.step > 3 ? 'step-number completed' : 'step-number'}>3</div>
            <div className="step-title">Avatar</div>
        </div>
        <div className="step">
            <div className={props.step === 4 ? 'step-number active' : 'step-number' && props.step > 4 ? 'step-number completed' : 'step-number'}>4</div>
            <div className="step-title">Finish</div>
        </div>
    </div>
  );
}
export default StatusBar;
