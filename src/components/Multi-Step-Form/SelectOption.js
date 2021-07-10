import React from "react";

const SelectOption = ({ name, value, options, onChange, divStyle, label }) => {
  return (
    <div className={`form-group ${divStyle}`}>
      {label && <label htmlFor={label}>{label}</label> }
      <select
        name={name}
        value={value}
        className= "form-control input__field mt-2 mb-2"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index + 1} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* {error && <p className="text-danger">{error}</p>} */}
    </div>
  );
};

export default SelectOption;
