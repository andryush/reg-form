import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import FormCrad from "../hoc/FormCard/FormCard";
import ControlButtons from "../ControlButtons/ControlButtons";
import StatusBar from "../StatusBar/StatusBar";
import StepBasic from "../StepBasic/StepBasic";
import StepContacts from "../StepContacts/StepContacts";
import StepAvatar from "../StepAvatar/StepAvatar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "Male",
      email: "",
      mobile: "",
      country: "6",
      city: "Yerevan",
      avatar: "",
      step: 1,
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        avatar: false,
      },
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event) => {
      this.setState({
        avatar: event.target.result,
        errors: {
            avatar: ''
        }
      });
    };
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

    if (this.state.step === 2) {
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
      ) {
        errors.email = "Invalid email address";
      }
    }

    if (this.state.step === 2) {
      if (!this.state.mobile.match(/^\d{9}$/)) {
        errors.mobile = "Invalid mobile. Must be 9 digits";
      }
    }

    if (this.state.step === 3) {
      if (!this.state.avatar) {
        errors.avatar = "Required";
      }
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
      email,
      mobile,
      country,
      city,
      avatar,
      step,
    } = this.state;
    return (
      <div className="container">
        <FormCrad>
          <StatusBar step={step} />
          <form>
            {step === 1 ? (
              <StepBasic
                firstname={firstname}
                lastname={lastname}
                password={password}
                repeatPassword={repeatPassword}
                gender={gender}
                onChange={this.onChange}
                errors={this.state.errors}
              />
            ) : null}
            {step === 2 ? (
              <StepContacts
                email={email}
                mobile={mobile}
                country={country}
                city={city}
                onChange={this.onChange}
                errors={this.state.errors}
              />
            ) : null}
            {step === 3 ?
            <StepAvatar
              avatar={avatar}
              id="avatar"
              labelText="Choose avatar"
              name="avatar"
              onChange={this.onChangeAvatar}
              errors={this.state.errors}
            /> : null
            }

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
