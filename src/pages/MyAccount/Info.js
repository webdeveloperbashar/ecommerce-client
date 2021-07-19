import React, { useState } from "react";

const Info = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    dateofbirth: '',
    membersince: '',
  })
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div className="info__wrapper">
      <div className="account__heading d-flex align-items-center justify-content-between">
        <h2>Personal Information</h2>
      </div>
      <hr />
      <div className="info__details">
        <div className="info__container">
          <form onSubmit={handleSubmit}>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Name</span>
              <input
                type="text"
                name="name"
                value="MD Abul Bashar"
                className="form-control account__input__field input__field my-3 w-50"
                onChange={handleChange}
              />
            </div>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Mobile Number</span>
              <input
                type="text"
                name="phone"
                value="01723502330"
                className="form-control account__input__field input__field my-3 w-50"
                onChange={handleChange}
              />
            </div>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Gender</span>
              <select
                name="gender"
                className="form-control account__input__field input__field my-3 w-50"
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Date of birth</span>
              <input
                type="date"
                name="dateofbirth"
                className="form-control account__input__field input__field my-3 w-50"
                onChange={handleChange}
              />
            </div>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Member Since</span>
              <input
                type="text"
                name="membersince"
                className="form-control account__input__field input__field my-3 w-50"
                value="12 July, 2021"
                onChange={handleChange}
              />
            </div>
            <div className="signle__content d-flex align-items-center">
              <span className="label">Primary Email</span>
              <input
                type="email"
                name="email"
                value="webdeveloperbashar@gmail.com"
                className="form-control account__input__field input__field my-3 w-50"
                readOnly
              />
            </div>
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
