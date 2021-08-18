const SingleSelectField = ({
  label,
  name,
  handleChange,
  options,
  className,
  divClass,
  isRequired,
  isValue,
  value,
}) => {
  return (
    <div className={`signle__content ${divClass}`}>
      <span className="label">
        {label} {isRequired && <span className="text-danger">*</span>}
      </span>
      <select
        name={name}
        value={value}
        className={`form-control ${className}`}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option value={isValue && index + 1} key={index + 1}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SingleSelectField;
