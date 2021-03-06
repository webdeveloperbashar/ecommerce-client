export const FormInputFieldData = {
  stepOne: {
    address: {
      value: "",
      required: true,
      type: "input",
      label: "Address",
      placeholder: "Enter your address",
    },
    mobile: {
      value: "",
      required: true,
      type: "input",
      label: "Mobile",
      placeholder: "Enter your mobile no",
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
  },
  stepTwo: {
    cardNumber: {
      value: "",
      required: true,
      type: "input",
      label: "Card Number",
      placeholder: "1234 1234 1234 1234",
    },
    expiration: {
      value: "",
      required: true,
      type: "input",
      label: "Expiration Date",
      placeholder: "MM / YY",
    },
    cvc: {
      value: "",
      required: true,
      type: "input",
      label: "CVC",
      placeholder: "CVC",
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
