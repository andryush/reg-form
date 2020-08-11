import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "../hoc/FormCard/FormCard";
import FormCrad from "../hoc/FormCard/FormCard";
// import Field from "../Field/Field";
// import RadioButton from "../RadioButton/RadioButton";
import ControlButtons from "../ControlButtons/ControlButtons";
import StatusBar from "../StatusBar/StatusBar";
import StepBasic from "../StepBasic/StepBasic";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "Male",
      step: 1,
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
      },
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (this.state.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    }

    if (this.state.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    }

    if (this.state.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    if (this.state.repeatPassword !== this.state.password) {
      errors.repeatPassword = "Must be equal password";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      this.incrementStep();
    }
  };

  incrementStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  decrementStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      step,
    } = this.state;
    return (
      <div className="container">
        <FormCrad>
          <StatusBar step={step}/>
          <form>
            {step === 1 ? (
              <StepBasic
                firstname={firstname}
                lastname={lastname}
                password={password}
                repeatPassword={repeatPassword}
                gender={gender}
                step={step}
                onChange={this.onChange}
                errors={this.state.errors}
              />
            ) : null}

            <ControlButtons
              onSubmit={this.onSubmit}
              step={step}
              decrementStep={this.decrementStep}
            />
          </form>
        </FormCrad>
      </div>
    );
  }
}
export default App;
