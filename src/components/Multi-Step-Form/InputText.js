const InputText = ({
  type = "text",
  name,
  placeholder,
  error,
  onChange,
  value,
  divStyle,
  span,
  label,
}) => {
  return (
    <div className={`form-group ${divStyle} my-2`}>
      {span && <label htmlFor={label} className="mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        className="form-control py-1"
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <p className="text-danger">{error}</p> }
    </div>
  );
};

export default InputText;
