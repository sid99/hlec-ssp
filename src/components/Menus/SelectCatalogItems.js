import React, {useState} from "react";
import List from "@material-ui/core/List";

import CatalogItem from "./CatalogItem";
import styles from "./styles";
import {HeaderContainer} from "../Base/components";

export default function SelectItems({
  catalogItemsByCategory,
  handleItemSelection,
  defaults,
  selectedCatalogItemsByCategory,
}) {
  const [categoryChecked, setCategoryChecked] = useState(
    selectedCatalogItemsByCategory);

  const handleToggle = (category, value) => () => {
    const currentIndex = categoryChecked[category].indexOf(value);
    const newChecked = [...categoryChecked[category]];
    const newCategoryChecked = {...categoryChecked};

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    newCategoryChecked[category] = newChecked;
    setCategoryChecked(newCategoryChecked);
    handleItemSelection(newCategoryChecked);
  };

  return (
    <div>
      {Object.keys(catalogItemsByCategory).map(category => (
	<div key={category}>
	  <HeaderContainer>{category}</HeaderContainer>
	  <List key={category} style={styles.selectCatalogItems.list}>
	    {catalogItemsByCategory[category].map((item, value) => (
	      <CatalogItem
		key={value}
		item={item}
		value={value}
		handleToggle={handleToggle}
		category={category}
		categoryChecked={categoryChecked}
	      />
	    ))}
	  </List>
	</div>
      ))}
    </div>
  );
}
