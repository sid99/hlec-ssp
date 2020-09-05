import React from "react";

import {BusinessInfoInnerContainer} from "./components";
import BusinessInfoItem from "./BusinessInfoItem";

export default function BusinessInfo({store}) {
  return (
    <BusinessInfoInnerContainer>
      <BusinessInfoItem
	type="name"
	text={store.name}
      />
      <BusinessInfoItem
	type="description"
	text={store.description}
      />
      <BusinessInfoItem
	type="address"
	text={store.address}
      />
      <BusinessInfoItem
	type="phoneNumber"
	text={store.phoneNumber}
      />
      <BusinessInfoItem
	type="category"
	text={store.category}
      />
    </BusinessInfoInnerContainer>
  );
}
