import React from "react";

const InputField = ({
  divStyle,
  label,
  type,
  name,
  className,
  placeholder,
  onChange,
  span,
}) => {
  return (
    <div className={`form-group ${divStyle}`}>
      {span && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        name={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
