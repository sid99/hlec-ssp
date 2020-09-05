import React from "react";

import {HeaderContainer} from "../CatalogItems/components";
import Item from "../CatalogItems/Item";
import {getDictionary} from "../CatalogItems/utils";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";

export default function MenuDetails({menu, catalogItemsLookUp}) {
  const itemList = menu.catalogItemIds.map(
    catalogItem => catalogItemsLookUp[catalogItem]);
  const itemsByCategory = getDictionary(itemList);

  const renderItemsByCategory = () => {
    return (
      <div>
	{Object.keys(itemsByCategory).map(category => (
	  <div key={category}>
	    {(itemsByCategory[category].length > 0) ?
	      <HeaderContainer>{category}</HeaderContainer> : null}
	    {itemsByCategory[category].map(
	    item => <Item key={item.name} item={item} parent="menu" />)}
	  </div>
	))}
      </div>
    );
  };

  return (
    <MobilePageOuterContainer>
      <MobilePageOuterContainerTwo>
	{renderItemsByCategory()}
      </MobilePageOuterContainerTwo>
    </MobilePageOuterContainer>
  );
}
