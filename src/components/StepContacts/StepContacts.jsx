import React from "react";
import "./StepContacts.css";

import Field from "../Field/Field";
import Select from "../Select/Select";
import ValidationError from "../ValidationError/ValidationError";

import countries from "../../data/countries";
import cities from "../../data/cities";

function StepContacts(props) {
  const { email, mobile, country, city, onChange, errors } = props;

  const citiesFilter = (citiesList) => {
    const cities = Object.values(citiesList);
    const filtered = cities.filter((el) => el.country === parseInt(country));
    return filtered;
  };

  return (
    <>
      <Field
        id="email"
        labelText="Email"
        type="text"
        placeHolder="Enter email"
        name="email"
        value={email}
        onChange={onChange}
        error={errors.email}
      />
      <ValidationError error={errors.email} />

      <Field
        id="mobile"
        labelText="Mobile"
        type="text"
        placeHolder="Enter mobile"
        name="mobile"
        value={mobile}
        onChange={onChange}
        error={errors.mobile}
      />
      <ValidationError error={errors.mobile} />

      <Select
        id="countries"
        labelText="Country"
        data={countries}
        onChange={onChange}
        name="country"
        value={country}
      />

      <Select
        id="cities"
        labelText="City"
        data={citiesFilter(cities)}
        onChange={onChange}
        name="city"
        value={city}
        error={errors.city}
      />
      <ValidationError error={errors.city}/>
    </>
  );
}
export default StepContacts;
