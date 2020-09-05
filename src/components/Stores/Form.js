import React from "react";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

import inputs, {category} from "./inputs";
import Select from "../Base/Select";
import Input from "../Base/Input";
import {ButtonStyle, FormStyle} from "../Base/styles";
import {FormContainer} from "../Base/components";

export default function Form({
  buttonName,
  onSubmit,
  defaults={},
}) {
  const {control, errors, handleSubmit} = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
	{inputs.map(input => (
	  <Input
	    key={input.name}
	    config={input}
	    control={control}
	    defaultValue={defaults[input.name]}
	    errors={errors}
	  />
	))}
	<Select
	  control={control}
	  config={category}
	  defaults={defaults}
	  errors={errors}
	/>
	<Button style={ButtonStyle} type="submit" variant="contained" color="primary">
	  {buttonName}
	</Button>
      </FormContainer>
    </form>
  );
}
