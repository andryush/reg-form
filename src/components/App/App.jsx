import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "../hoc/FormCard/FormCard";
import FormCrad from "../hoc/FormCard/FormCard";
import Field from "../Field/Field";
import RadioButton from "../RadioButton/RadioButton";

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormCrad>
          <form>
            <Field
              id="firsname"
              labelText="Firstname"
              type="text"
              name="firstname"
              placeHolder="Enter firstname"
            />

            <Field
              id="lastname"
              labelText="Lastname"
              type="text"
              name="lastname"
              placeHolder="Enter lastname"
            />

            <Field
              id="password"
              labelText="Password"
              type="password"
              name="password"
              placeHolder="Enter password"
            />

            <Field
              id="repeatPassword"
              labelText="Repeat password"
              type="password"
              name="repeatPassword"
              placeHolder="Repeat password"
            />

            <div>Gender</div>
            <RadioButton
              type="radio"
              id="male"
              name="radio"
              value="male"
              labelText="Male"
            />

            <RadioButton
              type="radio"
              id="female"
              name="radio"
              value="female"
              labelText="Female"
            />
          </form>
        </FormCrad>
      </div>
    );
  }
}
export default App;
