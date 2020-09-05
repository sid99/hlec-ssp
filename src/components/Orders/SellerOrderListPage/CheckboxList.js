import React from "react";
import List from "@material-ui/core/List";

import Item from "./NewItem";
import styles from "./styles";

export default function CheckboxList({
  checked,
  handleToggle,
  items,
  handleOrderCancel,
  onlyDisplay,
}) {
  return (
    <List style={styles.list} >
      {items.map(item => (
	<Item
	  key={item.id}
	  item={item}
	  handleToggle={handleToggle}
	  checked={checked}
	  handleOrderCancel={handleOrderCancel}
	  onlyDisplay={onlyDisplay}
	/>)
      )}
    </List>
  );
}
