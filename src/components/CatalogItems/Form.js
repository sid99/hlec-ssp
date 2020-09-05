import React from "react";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

import {
  nameInput,
  descriptionInput,
  priceInput,
  unitInput,
  categoryInput,
  getMinimumPurchasableQuantityInput,
} from "./inputs";
import Select from "../Base/Select";
import Input from "../Base/Input";
import {BottomButtonStyle, FormStyle} from "../Base/styles";
import {FormContainer} from "../Base/components";

// Units
// Minimum Purchasable Quantity
// Price for Minimum P
export default function Form({
  buttonName,
  onSubmit,
  defaults,
}) {
  const {control, errors, handleSubmit, watch} = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const watchUnit = watch("unit", defaults["unit"]);

  return (
    <>
      <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
	<FormContainer>
	  <Select
	    control={control}
	    config={categoryInput}
	    defaults={defaults}
	    errors={errors}
	  />
	  <Input
	    config={nameInput}
	    control={control}
	    defaultValue={defaults[nameInput.name]}
	    errors={errors}
	  />
	  <Input
	    config={descriptionInput}
	    control={control}
	    defaultValue={defaults[descriptionInput.name]}
	    errors={errors}
	  />
	  <Select
	    control={control}
	    config={unitInput}
	    defaults={defaults}
	    errors={errors}
	  />
	  <Select
	    control={control}
	    config={getMinimumPurchasableQuantityInput(watchUnit)}
	    defaults={defaults}
	    errors={errors}
	  />
	  <Input
	    config={priceInput}
	    control={control}
	    defaultValue={defaults[priceInput.name]}
	    errors={errors}
	  />
	  <Button
	    style={BottomButtonStyle}
	    type="submit"
	    variant="contained"
	    color="primary"
	  >
	    {buttonName}
	  </Button>
	</FormContainer>
      </form>
    </>
  );
}
