import React, {useState} from "react";

import List from "./List";
import CreateItemDialog from "./CreateItemDialog";
import AppBar from "../Base/AppBar";
import {
  BottomOneButtonContainer,
  SimpleMessageOne,
} from "../Base/components";
import FabButton from "../Base/FabButton";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import Spinner from "../Base/Spinner";
import useStoreQuery from "../../hooks/useStoreQuery";
import useCommunitiesQuery from "../../hooks/useCommunitiesQuery";
import protectRoute from "../../core/protectRoute";

const ListPage = () => {
  const store = useStoreQuery();
  const communities = useCommunitiesQuery("list");

  const [
    createCommunityDialogOpen, setCreateCommunityDialogOpen] = useState(false);

  // STRING CONSTANTS
  const headerTitle = "Communities";
  const addItemButtonName = "Add Community";
  const NoListItemsMessage = "Select Communities by clicking the below add button";

  const handleCreateCommunityDialogOpen = () => {
    setCreateCommunityDialogOpen(true);
  };

  const handleCreateCommunityDialogClose = () => {
    setCreateCommunityDialogOpen(false);
  };

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  if (!store || !communities) return <Spinner />;

  console.log(communities);
  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  {(communities.length === 0) ? (
	    <SimpleMessageOne>{NoListItemsMessage}</SimpleMessageOne>
	  ): <List items={communities} />}
	  <CreateItemDialog
	    open={createCommunityDialogOpen}
	    handleClose={handleCreateCommunityDialogClose}
	    buttonName={addItemButtonName}
	    type="create"
	    store={store}
	    refreshPage={refreshPage}
	  />
	  <div style={{height: 150}} />
	  <BottomOneButtonContainer>
	    <FabButton
	      onClick={handleCreateCommunityDialogOpen}
	      buttonName={addItemButtonName}
	    />
	  </BottomOneButtonContainer>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default protectRoute(ListPage);
