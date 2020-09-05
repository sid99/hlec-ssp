import React from "react";
import {Controller} from "react-hook-form";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

const normalSelectBox = {
  width: "100%",
  // marginBottom: 15,
  height: "100%",
  border: "1px solid white",
};

export default function SelectWrap({config, control, errors, defaults}) {
  const defaultValue= (defaults[config.name] !== undefined) ?
    defaults[config.name] : "";

  const renderSelect = () => (
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      label={config.label}
      style={normalSelectBox}
    >
      {config.options.map(({value, label}) => (
	<MenuItem style={{border: "1px solid white"}} dense key={value} value={value}>{label}</MenuItem>
      ))
      }
    </Select>
  );

  return (
    <FormControl
      style={{width: "100%", alignItems: "center"}}
      error={Boolean(errors.wordlevel)}
      variant="outlined"
    >
      <InputLabel id="demo-simple-select-outlined-label">
	{config.label}
      </InputLabel>
      <Controller
	as={renderSelect()}
	name={config.name}
	// rules={{required: "This is required"}}
	control={control}
	rules={config.rules}
	defaultValue={defaultValue}
      />
      <FormHelperText style={{color: "red", paddingBottom: 20}}>
	{errors[config.name] && config.errorMessage}
	{errors[config.name] && errors[config.name].message}
      </FormHelperText>
    </FormControl>
  );
}
