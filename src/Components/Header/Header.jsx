import React from "react";
import ExperienceInput from "./Options/ExperienceInput";
import CompanyName from "./Options/CompanyName";
import LocationInput from "./Options/LocationInput";
import RolesInput from "./Options/RolesInput";
import MinSalary from "./Options/MinSalary";

const Header = () => {
  return (
    <React.Fragment>
      <ExperienceInput />
      <CompanyName />
      <LocationInput />
      <RolesInput />
      <MinSalary />
    </React.Fragment>
  );
};

export default Header;
