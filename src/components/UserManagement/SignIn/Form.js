import React from "react";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";

import inputs from "./inputs";
import {FormButtonContainer, FormContainer} from "../../Base/components";
import Input from "../../Base/Input";
import {BottomButtonStyle, FormStyle} from "../../Base/styles";

export default function Form({buttonName, onSubmit}) {
  const {control, errors, handleSubmit} = useForm();

  return (
    <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
	{inputs.map(input => (
	  <Input
	    key={input.name}
	    config={input}
	    control={control}
	    errors={errors}
	    defaultValue=""
	  />
	))}
	<FormButtonContainer>
	  <Button
	    style={BottomButtonStyle}
	    type="submit"
	    variant="contained"
	    color="primary"
	  >
	    {buttonName}
	  </Button>
	</FormButtonContainer>
      </FormContainer>
    </form>
  );
}
