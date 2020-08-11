import React from "react";
import "./StepBasic.css";

import Field from "../Field/Field";
import RadioButton from "../RadioButton/RadioButton";
import ValidationError from "../ValidationError/ValidationError";

function StepBasic(props) {
  const {
    firstname,
    lastname,
    password,
    repeatPassword,
    gender,
    onChange,
    errors,
  } = props;

  return (
    <>
      <Field
        id="firsname"
        labelText="Firstname"
        type="text"
        name="firstname"
        placeHolder="Enter firstname"
        onChange={onChange}
        value={firstname}
        error={errors.firstname}
      />
      <ValidationError error={errors.firstname} />

      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        name="lastname"
        placeHolder="Enter lastname"
        onChange={onChange}
        value={lastname}
        error={errors.lastname}
      />
      <ValidationError error={errors.lastname} />

      <Field
        id="password"
        labelText="Password"
        type="password"
        name="password"
        placeHolder="Enter password"
        onChange={onChange}
        value={password}
        error={errors.password}
      />
      <ValidationError error={errors.password} />

      <Field
        id="repeatPassword"
        labelText="Repeat password"
        type="password"
        name="repeatPassword"
        placeHolder="Repeat password"
        onChange={onChange}
        value={repeatPassword}
        error={errors.repeatPassword}
      />
      <ValidationError error={errors.repeatPassword} />

      <div>Gender</div>
      <RadioButton
        type="radio"
        id="male"
        name="gender"
        value="Male"
        labelText="Male"
        checked={gender === "Male"}
        onChange={onChange}
      />

      <RadioButton
        type="radio"
        id="female"
        name="gender"
        value="Female"
        labelText="Female"
        checked={gender === "Female"}
        onChange={onChange}
      />
    </>
  );
}
export default StepBasic;
