export const nameInput = {
  name: "name",
  label: "Community Name",
  id: "outlined-basic",
  rules: {required: true, minLength: 2, maxLength: 50},
  errorMessage: "Community name is required",
  maxLengthErrorMessage: "Max is 50 characters",
  minLengthErrorMessage: "Min is 2 characters",
  type: "string",
};

export const descriptionInput = {
  name: "description",
  label: "Community Description",
  id: "outlined-multiline-static",
  multiline: true,
  rules: {required: false, maxLength: 200},
  errorMessage: "Item description is required",
  maxLengthErrorMessage: "Max is 200 characters",
  type: "string",
};

export const locationInput = {
  name: "location",
  label: "Community location",
  id: "outlined-basic",
  rules: {required: true, minLength: 2, maxLength: 100},
  errorMessage: "Community location is required",
  maxLengthErrorMessage: "Max is 100 characters",
  minLengthErrorMessage: "Min is 2 characters",
  type: "string",
};
