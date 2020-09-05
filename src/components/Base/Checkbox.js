import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxWrapper = ({defaultValue, label, handleChange}) => (
  <div style={{width: "100%", paddingBottom: 20, paddingTop: 0}}>
    <FormControlLabel
      style={{width: "100%", border: "0px solid black"}}
      control={<Checkbox
	checked={defaultValue}
	style={{border: "0px solid black"}}
	onChange={handleChange}
	name={label}
      />}
      label={label}
    />
  </div>
);

export default CheckboxWrapper;
