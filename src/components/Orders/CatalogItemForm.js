import React from "react";

import categories from "./categories";
import Select from "./Select";
import {FormContainer} from "./CatalogItemComponents";

const FormStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
  alignContent: "center",
  margin: 0,
  // paddingTop: 20,
  // paddingBottom: 80,
  // marginTop: 20,
  // marginBottom: 20,
  height: "100%",
  // border: "1px solid black",
  // borderColor: "rgba(0, 0, 0, 0.87)",
  // borderColor: "#fafafa",
};

export default function Form({
  control,
  errors,
  id,
  outOfStock,
}) {
  const defaults = {
    [id]: 0,
  };

  categories.name = id;

  return (
    <form style={FormStyle}>
      <FormContainer>
	<Select
	  control={control}
	  config={categories}
	  errors={errors}
	  defaults={defaults}
	  disabled={outOfStock}
	/>
      </FormContainer>
    </form>
  );
}
