import React from "react";

const SingleInputField = ({
  label,
  type,
  placeholder,
  name,
  handleChange,
  className,
  divClass,
  disabled,
  requiredSign,
  br,
  value,
}) => {
  return (
    <div className={`signle__content ${divClass}`}>
      <span className={`label`}>
        {label} {requiredSign && <span className="text-danger">*</span>}
      </span>
      {br && <br />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={`form-control ${className}`}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default SingleInputField;
