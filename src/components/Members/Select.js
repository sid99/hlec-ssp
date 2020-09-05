import React from "react";

import SelectItem from "./SelectItem";
import {BottomOneButtonContainer} from "../Base/components";
import FabButton from "../Base/FabButton";


const Select = ({
  unselectedCommunities,
  checked,
  handleToggle,
  handleSelect,
}) => {
  // console.log(unselectedCommunities);
  const buttonName = "Select";

  const renderItems = () => {
    return (
      <div>
	{unselectedCommunities.map(item => (
	  <SelectItem
	    key={item.id}
	    item={item}
	    checked={checked}
	    handleToggle={handleToggle}
	  />
	))}
      </div>
    );
  };

  // if (loading) return <Spinner />;

  return (
    <>
      {renderItems()}
      <div style={{height: 150}} />
      <BottomOneButtonContainer>
	<FabButton
	  onClick={handleSelect}
	  buttonName={buttonName}
	/>
      </BottomOneButtonContainer>
    </>
  );
};

export default Select;
