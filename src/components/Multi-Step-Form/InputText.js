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
    <div className={`form-group ${divStyle}`}>
      {span && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        className={
          error
            ? "form-control input__field mt-2 mb-2 is-error"
            : "form-control input__field mt-2 mb-2"
        }
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <p className="text-danger mb-3">{error}</p> }
    </div>
  );
};

export default InputText;
