import React from "react";
import SingleInputField from "../../components/Single-Input-Field";
import SingleSelectField from "./../../components/Single-Select-Field/index";

const Info = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="info__wrapper">
      <div className="account__heading d-flex align-items-center justify-content-between">
        <h2>Personal Information</h2>
      </div>
      <hr />
      <div className="info__details">
        <div className="info__container">
          <form onSubmit={handleSubmit}>
            <SingleInputField
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              handleChange={handleChange}
            />
            <SingleInputField
              label="Mobile Number"
              type="number"
              name="phone"
              value={formData.phone}
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              handleChange={handleChange}
            />
            <SingleSelectField
              label="Gender"
              name="gender"
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              value={formData.gender}
              handleChange={handleChange}
              options={["Select Gender", "Male", "Female", "Other"]}
            />
            <SingleInputField
              label="Date of Birth"
              type="date"
              name="dateofbirth"
              value={formData.dateofbirth}
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              handleChange={handleChange}
            />
            <SingleInputField
              label="Member Since"
              type="text"
              name="membersince"
              value={formData.membersince}
              disabled
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              handleChange={handleChange}
            />
            <SingleInputField
              label="Primary Email"
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="account__input__field input__field my-3 w-50"
              divClass="d-flex align-items-center"
              handleChange={handleChange}
            />
            <div className="signle__content d-flex align-items-center">
              <span className="label"></span>
              <input
                type="submit"
                value="Update"
                className="btn account__input__field my-3 py-3 px-5 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
