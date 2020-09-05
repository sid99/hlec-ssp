import React from "react";

import {
  CatalogItemContainer,
  DescriptionContainer,
  NameContainer,
  NewNameContainer,
  DescContainer,
  CatalogImageContainer,
  CatalogImage,
  OutOfStockContainer,
  ItemNameTextContainer,
  PriceTextContainer,
  SelectionContainer,
} from "./CatalogItemComponents";
import CatalogItemForm from "./CatalogItemForm";
import {getFormattedCatalogItemUnit} from "../utils";

export default function CatalogItem({item, control, errors}) {
  const minQty = item.minimumPurchasableQuantity;
  const formattedUnit = getFormattedCatalogItemUnit(item.unit);

  return (
    <CatalogItemContainer>
      { (item.bannerUrl) ?
	  (<CatalogImageContainer>
	    <CatalogImage src={item.bannerUrl}/>
	  </CatalogImageContainer>) : null
      }
	<DescriptionContainer>
	  <NewNameContainer>
	    <ItemNameTextContainer>
	      {item.name}
	    </ItemNameTextContainer>
	    <PriceTextContainer>
	      INR {item.price}/{minQty} {formattedUnit}
	    </PriceTextContainer>
	  </NewNameContainer>
	  {(item.outOfStock) ?
	    <OutOfStockContainer>Out of stock</OutOfStockContainer> :
	      null
	  }
	  <DescContainer>{item.description.slice(0,80)}</DescContainer>
	</DescriptionContainer>
	<SelectionContainer>
	  <CatalogItemForm
	    id={item.id}
	    control={control}
	    errors={errors}
	    outOfStock={item.outOfStock}
	  />
	</SelectionContainer>
      </CatalogItemContainer>
  );
}
