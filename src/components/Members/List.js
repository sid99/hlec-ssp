import React from "react";

import Item from "./Item";

const List = ({
  items,
  store,
  updateCatalogItem,
}) => {
  const renderItems = () => {
    return (
      <div>
	{items.map(item => (
	  <Item
	    key={item.id}
	    item={item}
	    store={store}
	    updateCatalogItem={updateCatalogItem}
	  />
	))}
      </div>
    );
  };

  return (
    <>
      {renderItems()}
    </>
  );
};

export default List;
