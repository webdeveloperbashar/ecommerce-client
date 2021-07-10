export const FormInputFieldData = {
  stepOne: {
    name: {
      value: "",
      required: true,
      type: "input",
      label: "Name",
      placeholder: "Enter your name",
    },
    mobile: {
      value: "",
      required: true,
      type: "input",
      label: "Mobile",
      placeholder: "Enter your mobile no",
    },
    company: {
      value: "",
      required: true,
      type: "input",
      label: "Company",
      placeholder: "Enter your company",
    },
    state: {
      value: "",
      required: true,
      type: "input",
      label: "State",
      placeholder: "Enter your state",
    },
    city: {
      value: "",
      required: true,
      type: "input",
      label: "City",
      placeholder: "Enter your city",
    },
    zip: {
      value: "",
      required: true,
      type: "input",
      label: "Zip",
      placeholder: "Enter your zip",
    },
    country: {
      value: "",
      type: "select",
      required: true,
      label: "Country",
      options: [
        { value: "", label: "Choose Country" },
        { value: "bangladesh", label: "Bangladesh" },
        { value: "pakistan", label: "Pakistan" },
      ],
    },
    address: {
      value: "",
      required: true,
      type: "input",
      label: "Address",
      placeholder: "Enter your address",
    },
  },
  stepTwo: {
    address: {
      value: "",
      required: true,
      type: "input",
      label: "Address",
      placeholder: "Enter your address",
    },
  },
};

export const InputRadio = [
  {
    name: "payment",
    type: "radio",
    value: "cash on delivery",
    label: "Cash on delivery",
  },
  {
    name: "payment",
    type: "radio",
    value: "stripe",
    label: "Stripe",
  },
  {
    name: "payment",
    type: "radio",
    value: "paypal",
    label: "Paypal",
  },
];
