import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels({
  outOfStock,
  handleChange,
}) {
  // const [outOfStock, setOutOfStock] = React.useState(false);

  /*
  const handleChange = event => {
    // setOutOfStock(!outOfStock);
  };
  */

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={outOfStock}
            onChange={handleChange}
            name="OutOfStock"
	    color="secondary"
          />
        }
        label="Out Of Stock"
      />
    </FormGroup>
  );
}
