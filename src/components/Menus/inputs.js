import {
  MENU_SHIPPING_TYPE_DELIVERY,
  MENU_SHIPPING_TYPE_PICKUP,
} from "../consts";

export const nameInput = {
  name: "name",
  label: "Menu Name",
  id: "outlined-multiline-static",
  multiline: true,
  rules: {required: true, minLength: 2, maxLength: 50},
  errorMessage: "Menu name is required",
  maxLengthErrorMessage: "Max is 50 characters",
  minLengthErrorMessage: "Min is 2 characters",
  type: "string",
};

export const descriptionInput = {
  name: "description",
  label: "Menu Description",
  id: "outlined-multiline-static",
  multiline: true,
  rules: {required: true, minLength: 10, maxLength: 200},
  errorMessage: "Menu description is required",
  maxLengthErrorMessage: "Max is 200 characters",
  minLengthErrorMessage: "Min is 10 characters",
  type: "string",
};

export const discountInput = {
  name: "discount",
  label: "Discount",
  options: [
    {
      label: "None",
      value: "None",
    },
    {
      label: "10%",
      value: "10%",
    },
    {
      label: "20%",
      value: "20%",
    },
    {
      label: "30%",
      value: "30%",
    },
    {
      label: "40%",
      value: "40%",
    },
    {
      label: "50%",
      value: "50%",
    },
  ],
};

export const shippingTypeInput = {
  name: "shippingType",
  label: "Shipping Type",
  options: [
    {
      label: "Delivery",
      value: MENU_SHIPPING_TYPE_DELIVERY,
    },
    {
      label: "Pickup",
      value: MENU_SHIPPING_TYPE_PICKUP,
    },
  ],
  rules: {required: true},
  errorMessage: "Shipping type is required",
};
