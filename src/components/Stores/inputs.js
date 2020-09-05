export default [
  {
    name: "name",
    label: "Store Name",
    id: "outlined-basic",
    rules: {required: true, minLength: 2, maxLength: 50},
    errorMessage: "Store name is required",
    maxLengthErrorMessage: "Max is 50 characters",
    minLengthErrorMessage: "Min is 2 characters",
    type: "string",
  },
  {
    name: "description",
    label: "Store Description",
    id: "outlined-multiline-static",
    multiline: true,
    rules: {required: true, minLength: 8, maxLength: 200},
    errorMessage: "Store description is required",
    maxLengthErrorMessage: "Max is 200 characters",
    minLengthErrorMessage: "Min is 8 characters",
    type: "string",
  },
  {
    name: "address",
    label: "Address",
    id: "outlined-basic",
    multiline: true,
    rules: {required: true, minLength: 5, maxLength: 75},
    errorMessage: "Store address is required",
    maxLengthErrorMessage: "Max is 75 characters",
    minLengthErrorMessage: "Min is 5 characters",
    type: "string",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    id: "outlined-basic",
    rules: {required: true, minLength: 10, maxLength: 10},
    maxLengthErrorMessage: "Max is 10 digits",
    minLengthErrorMessage: "Min is 10 digits",
    errorMessage: "Store phone number is required",
    type: "number",
  },
];

export const category = {
  name: "category",
  label: "Category",
  options: [
    {
      value: "Fruits And Vegetables",
      label: "Fruits And Vegetables",
    },
    {
      value: "Books",
      label: "Books",
    },
  ],
  rules: {required: true},
  errorMessage: "Store category is required",
};
