import React from "react";
import Info from "../Info/Info";

import ResetButton from "../ResetButton/ResetButton";

function StepFinish(props) {
    const {avatar, firstname, lastname, email, mobile, country, city} = props;
  return (
    <>
      <Info
        avatar={avatar}
        firstname={firstname}
        lastname={lastname}
        email={email}
        mobile={mobile}
        country={country}
        city={city}
      />
      <ResetButton />
    </>
  );
}
export default StepFinish;
