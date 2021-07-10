import React from "react";

const InputField = ({
  divStyle,
  label,
  type,
  name,
  className,
  placeholder,
  onChange,
  value,
  span,
}) => {
  return (
    <div className={`form-group ${divStyle}`}>
      {span && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        className={`form-control ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      {/* {error && <p className="text-danger">{error}</p> } */}
    </div>
  );
};

export default InputField;
