export const nameInput = {
  name: "name",
  label: "Full Name",
  id: "outlined-basic",
  rules: {required: true, minLength: 2, maxLength: 20},
  maxLengthErrorMessage: "Max is 2 characters",
  minLengthErrorMessage: "Min is 20 characters",
  errorMessage: "Name is required",
  type: "string",
};

export const phoneNumberInput = {
  name: "phoneNumber",
  label: "Phone Number",
  id: "outlined-basic",
  rules: {required: true, minLength: 10, maxLength: 10},
  maxLengthErrorMessage: "Max is 10 digits",
  minLengthErrorMessage: "Min is 10 digits",
  errorMessage: "Phone number is required",
  type: "number",
};

export const addressInput = {
  name: "deliveryAddress",
  label: "Delivery Address",
  id: "outlined-multiline-static",
  multiline: true,
  rules: {required: true, minLength: 5, maxLength: 75},
  errorMessage: "Delivery address is required",
  minLengthErrorMessage: "Min is 5 characters",
  maxLengthErrorMessage: "Max is 75 characters",
  type: "string",
};
