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
      {step > 1 && (
        <button
          type="button"
          className="btn me-4"
          onClick={() => onPrevStep(step - 1)}
        >
          Previous
        </button>
      )}
      {step < 2 && (
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

// {FormInputFieldData.map((data, index) => {
//   if (data.type === "text" || data.type === "number") {
//     return (
//       <InputText
//         key={index + 1}
//         type={data.type}
//         name={data.name}
//         placeholder={data.placeholder}
//         onChange={handleChange}
//         // value={key}
//         divStyle="input__field__inline"
//         label={data.label}
//         span
//       />
//     );
//   } else if (data.type === "select") {
//     return (
//       <SelectOption
//         key={index + 1}
//         name={data.name}
//         placeholder={data.placeholder}
//         onChange={handleChange}
//         // value={key}
//         label={data.label}
//         divStyle="input__field__inline"
//         options={data.options}
//       />
//     );
//   }
// })}