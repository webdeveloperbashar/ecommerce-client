import React from "react";

const SelectOption = ({
  name,
  value,
  options,
  onChange,
  divStyle,
  error,
  label,
}) => {
  return (
    <div className={`form-group my-2 ${divStyle}`}>
      {label && (
        <label htmlFor={label} className="mb-2">
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        className="form-control py-1"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index + 1} value={option.value}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default SelectOption;
