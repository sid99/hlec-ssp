import React from "react";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment-timezone";

import {
  nameInput,
  descriptionInput,
  // discountInput,
  shippingTypeInput,
} from "./inputs";
import {FormContainer} from "../Base/components";
import Input from "../Base/Input";
import Select from "../Base/Select";
import {FormStyle} from "../Base/styles";

export default function Form({
  control,
  errors,
  defaults={},
  expiryDateTime,
  handleExpiryDateTimeChange,
}) {
  return (
    <form style={FormStyle}>
      <FormContainer>
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
	  config={shippingTypeInput}
	  defaults={defaults}
	  errors={errors}
	/>
      </FormContainer>
    </form>
  );
}

/*
	<MuiPickersUtilsProvider utils={MomentUtils} moment={moment} >
	  <DateTimePicker
	    style={{width: "100%", paddingBottom: 20}}
	    label="Expiry Date And Time"
	    value={expiryDateTime}
	    onChange={handleExpiryDateTimeChange}
	    disablePast
	  />
	</MuiPickersUtilsProvider>
*/
