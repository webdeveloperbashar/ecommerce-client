import InputText from "./InputText";
import SelectOption from "./SelectOption";
const Step = ({
  data,
  onChange,
  onStepChange,
  error,
  stepKey,
  step,
  onPrevStep,
}) => {
  let inputValue = [];
  for (const [key, value] of Object.entries(data)) {
    if (value.type === "input") {
      inputValue.push(
        <InputText
          key={key}
          type={value.type}
          name={key}
          placeholder={value.placeholder}
          error={error[key]}
          onChange={(e) => onChange(stepKey, e)}
          value={value.value}
          divStyle="input__field__inline"
          label={value.label}
          span
        />
      );
    } else if (value.type === "select") {
      inputValue.push(
        <SelectOption
          key={key}
          name={key}
          placeholder={value.placeholder}
          error={error[key]}
          onChange={(e) => onChange(stepKey, e)}
          value={value.value}
          label={value.label}
          divStyle="input__field__inline"
          options={value.options}
        />
      );
    }
  }
  return (
    <>
      {inputValue}
      {step <= 3 && (
        <button
          type="button"
          className="btn"
          onClick={(e) => onStepChange(data, e)}
        >
          Next
        </button>
      )}
    </>
  );
};

export default Step;
