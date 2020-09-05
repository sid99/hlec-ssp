import React from "react";

import Item from "./CommunityCard";
import {
  CommunitiesContainer,
  CommunitiesPageContainer,
} from "./components";

const List = ({
  items,
  handleClick,
}) => {
  const renderItems = () => {
    return (
      <CommunitiesPageContainer>
	<CommunitiesContainer>
	  {items.map(item => (
	    <Item
	      key={item.id}
	      item={item}
	      handleClick={handleClick}
	    />
	  ))}
	</CommunitiesContainer>
      </CommunitiesPageContainer>
    );
  };

  return (
    <>
      {renderItems()}
    </>
  );
};

export default List;
