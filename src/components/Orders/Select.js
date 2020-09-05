import React from "react";
import {Controller} from "react-hook-form";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const normalSelectBox = {
  width: "100%",
  // marginBottom: 15,
  height: "100%",
  border: "1px solid white",
};

export default function SelectWrap({
  config,
  control,
  errors,
  defaults,
  disabled,
}) {
  const defaultValue= (defaults[config.name] !== undefined) ?
    defaults[config.name] : "";

  const renderSelect = () => (
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      label={config.label}
      style={normalSelectBox}
      disabled={disabled}
    >
      {config.options.map(({value, label}) => (
	<MenuItem
	  style={{border: "1px solid white"}}
	  dense
	  key={value}
	  value={value}
	>{label}</MenuItem>
      ))}
    </Select>
  );

  const formControlStyle = {
    width: "100%",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <FormControl
      style={formControlStyle}
      error={Boolean(errors.wordlevel)}
      variant="outlined"
    >
      <div>
	<InputLabel id="demo-simple-select-outlined-label">
	  {config.label}
	</InputLabel>
	<Controller
	  as={renderSelect()}
	  name={config.name}
	  // rules={{required: "This is required"}}
	  control={control}
	  defaultValue={defaultValue}
	/>
      </div>
    </FormControl>
  );
}
