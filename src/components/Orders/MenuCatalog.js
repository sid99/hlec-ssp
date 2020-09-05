import React from "react";

import CatalogItem from "./CatalogItem";
import {
  HeaderContainer,
  TotalContainer,
} from "./components";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";

export default function MenuDetails({
  menu,
  catalogItemsByCategory,
  total,
  control,
  errors,
}) {
  const renderItemsByCategory = () => {
    return (
      <div>
	<TotalContainer>Total: INR {total}</TotalContainer>
	{Object.keys(catalogItemsByCategory).map(category => (
	  <div key={category}>
	    {(catalogItemsByCategory[category].length > 0) ?
	      <HeaderContainer>{category}</HeaderContainer> : null
	    }
	    {catalogItemsByCategory[category].map(
	      item => <CatalogItem
		key={item.name}
		item={item}
		parent="menu"
		control={control}
		errors={errors}
	      />)
	    }
	  </div>
	))}
	<div style={{height: 150}} />
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
