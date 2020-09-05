import React from "react";

import {HeaderContainer} from "./components";
import Item from "./Item";
import sampleItems from "./sampleItems";

const SampleItemList = () => (
  <>
    <HeaderContainer> Sample </HeaderContainer>
    {sampleItems.map(
      item => <Item
	key={item.name}
	item={item}
	parent="sample"
      />)
    }
  </>
);

export default SampleItemList;
