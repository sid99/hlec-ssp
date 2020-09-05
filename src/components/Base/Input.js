import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

const renderTextField = (defaultValue, label, id, multiline, type) => (
  <div style={{width: "100%", paddingBottom: 0, paddingTop: 0}}>
    <TextField
      defaultValue={defaultValue}
      style={{width: "100%"}}
      id={id}
      multiline={multiline}
      label={label}
      variant="outlined"
      type={type}
    />
  </div>
);

const Input = ({
  errors,
  control,
  defaultValue,
  config,
}) => {
  return (
    <>
      <Controller
	as={renderTextField(
	      defaultValue, config.label, config.id, config.multiline, config.type)}
	name={config.name}
	control={control}
	defaultValue={defaultValue}
	rules={config.rules}
	type={config.type}
      />
      <FormHelperText style={{color: "red", paddingBottom: 20}}>
	{errors[config.name] &&
	  errors[config.name].type == "required" && config.errorMessage}
	{errors[config.name] && errors[config.name].message}
	{errors[config.name] &&
	  errors[config.name].type == "maxLength" && config.maxLengthErrorMessage}
	{errors[config.name] &&
	  errors[config.name].type == "minLength" && config.minLengthErrorMessage}
	{errors[config.name] &&
	  errors[config.name].type == "max" && config.maxErrorMessage}
	{errors[config.name] &&
	  errors[config.name].type == "min" && config.minErrorMessage}
      </FormHelperText>
    </>
  );
};

// {errors[config.name] && errors[config.name].message && config.errorMessage}
// {errors[config.name] && config.errorMessage}
export default Input;
