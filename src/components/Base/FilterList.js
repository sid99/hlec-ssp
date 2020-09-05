import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";

import {FilterListHeaderContainer} from "./components";
import {useStyles, styles} from "./filterListStyles";

export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const filter = {
    header: "Payment Status",
    options: [
      "paid",
      "not paid",
    ],
  };

  return (
    <List style={styles.list} className={classes.root}>
      <FilterListHeaderContainer>{filter.header}</FilterListHeaderContainer>
      {filter.options.map(value => {
	const labelId = `checkbox-list-label-${value}`;
	return (
	  <ListItem
	    style={styles.listItem}
	    key={value} role={undefined} dense button onClick={handleToggle(value)}>
	    <ListItemIcon
	      style={styles.listItemIcon}>
	      <Checkbox
		edge="start"
		checked={checked.indexOf(value) !== -1}
		tabIndex={-1}
		disableRipple
		inputProps={{"aria-labelledby": labelId}}
	      />
	    </ListItemIcon>
	    <ListItemText
	      style={styles.listItemTextWrapper}
	      id={labelId} primary={value.toUpperCase()} />
	  </ListItem>
	);
      })}
    </List>
  );
}
