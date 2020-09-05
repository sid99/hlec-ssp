import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import styles from "./styles";
import {getFormattedCatalogItemUnit} from "../utils";

export default function CatalogItem({
  item,
  value,
  handleToggle,
  category,
  categoryChecked,
}) {
  const labelId = `checkbox-list-label-${value}`;
  const minQty = item.minimumPurchasableQuantity;
  const formattedUnit = getFormattedCatalogItemUnit(item.unit);
  const primaryTextOne = (item.outOfStock) ?
    `${item.name}(out of stock)`: `${item.name}`;
  const primaryTextTwo = `INR ${item.price}/${minQty} ${formattedUnit}`;

  return (
    <ListItem
      key={value}
      role={undefined}
      dense
      button
      onClick={handleToggle(category, value)}
      style={styles.selectCatalogItems.listItem}
      disabled={item.outOfStock}
    >
      <ListItemIcon style={styles.selectCatalogItems.listItemIcon}>
	<Checkbox
	  edge="start"
	  checked={categoryChecked[category].indexOf(value) !== -1}
	  tabIndex={-1}
	  // disableRipple
	  inputProps={{"aria-labelledby": labelId}}
	/>
      </ListItemIcon>
      <div style={styles.selectCatalogItems.listItemTextWrapper}>
	<ListItemText
	  style={styles.selectCatalogItems.listItemText}
	  id={labelId}
	  primary={primaryTextOne}
	/>
	<ListItemText
	  style={styles.selectCatalogItems.listItemRightTextWrapper}
	  align="right"
	  id={labelId}
	  primary={primaryTextTwo}
	/>
      </div>
      <ListItemSecondaryAction>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
