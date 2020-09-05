import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import styles from "./styles";
import {getFormattedCatalogItemUnit} from "../utils";

// TODO: merge this with other CatalogItem
export default function CatalogItem({
  item,
  ref,
}) {
  const minQty = item.minimumPurchasableQuantity;
  const formattedUnit = getFormattedCatalogItemUnit(item.unit);
  const primaryTextOne = (item.outOfStock) ?
    `${item.name}(out of stock)`: `${item.name}`;
  const primaryTextTwo = `INR ${item.price}/${minQty} ${formattedUnit}`;

  return (
    <ListItem
      role={undefined}
      dense
      style={styles.selectCatalogItems.listItem}
      disabled={item.outOfStock}
    >
      <div style={styles.selectCatalogItems.listItemTextWrapper}>
	<ListItemText
	  style={styles.selectCatalogItems.listItemText}
	  primary={primaryTextOne}
	/>
	<ListItemText
	  style={styles.selectCatalogItems.listItemRightTextWrapper}
	  align="right"
	  primary={primaryTextTwo}
	/>
      </div>
    </ListItem>
  );
}
