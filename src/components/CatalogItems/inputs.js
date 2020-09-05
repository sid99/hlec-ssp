export const nameInput = {
  name: "name",
  label: "Item Name",
  id: "outlined-basic",
  rules: {required: true, minLength: 2, maxLength: 50},
  errorMessage: "Item name is required",
  maxLengthErrorMessage: "Max is 50 characters",
  minLengthErrorMessage: "Min is 2 characters",
  type: "string",
};

export const descriptionInput = {
  name: "description",
  label: "Item Description",
  id: "outlined-multiline-static",
  multiline: true,
  rules: {required: false, maxLength: 200},
  errorMessage: "Item description is required",
  maxLengthErrorMessage: "Max is 200 characters",
  type: "string",
};

export const priceInput = {
  name: "price",
  label: "Price for Minimum Purchasable Quantity",
  id: "outlined-basic",
  rules: {required: true, min: 0, max: 100000},
  errorMessage: "Item price is required",
  min: "Min value is 0",
  max: "Max value is 100000",
  type: "number",
};

export const categoryInput = {
  name: "category",
  label: "Category",
  options: [
    {
      value: "Fruits",
      label: "Fruits",
    },
    {
      value: "Vegetables",
      label: "Vegetables",
    },
  ],
  rules: {required: true},
  errorMessage: "Item category is required",
};

export const unitInput = {
  name: "unit",
  label: "Unit",
  options: [
    {
      label: "Numbers",
      value: "Numbers",
    },
    {
      label: "Kilograms",
      value: "Kilograms",
    },
    {
      label: "Grams",
      value: "Grams",
    },
  ],
  rules: {required: true},
  errorMessage: "Item unit is required",
};

export const getMinimumPurchasableQuantityInput = unit => {
  const name = "minimumPurchasableQuantity";
  const label = "Minimum Purchasable Quantity";
  let options = [];

  if (unit === "Numbers") {
    options = [
      {
	label: "1",
	value: "1",
      },
    ];
  }

  if (unit === "Kilograms") {
    options = [
      {
	label: "1",
	value: "1",
      },
    ];
  }

  if (unit === "Grams") {
    options = [
      {
	label: "10",
	value: "10",
      },
      {
	label: "20",
	value: "20",
      },
      {
	label: "50",
	value: "50",
      },
      {
	label: "100",
	value: "100",
      },
      {
	label: "250",
	value: "250",
      },
      {
	label: "500",
	value: "500",
      },
    ];
  }

  return {
    name,
    label,
    options,
    rules: {required: true},
    errorMessage: "Item min qty is required",
  };
};
