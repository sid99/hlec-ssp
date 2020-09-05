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
import useMembersQuery from "../../hooks/useMembersQuery";
import protectRoute from "../../core/protectRoute";

const ListPage = () => {
  const store = useStoreQuery();
  const members = useMembersQuery("list");

  const [
    createMemberDialogOpen, setCreateMemberDialogOpen] = useState(false);

  // STRING CONSTANTS
  const headerTitle = "Members";
  const addItemButtonName = "Add Member";
  const NoListItemsMessage = "Select Members by clicking the below add button";

  const handleCreateMemberDialogOpen = () => {
    setCreateMemberDialogOpen(true);
  };

  const handleCreateMemberDialogClose = () => {
    setCreateMemberDialogOpen(false);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  if (!store || !members) return <Spinner />;

  console.log(members);
  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  {(members.length === 0) ? (
	    <SimpleMessageOne>{NoListItemsMessage}</SimpleMessageOne>
	  ): <List items={members} />}
	  <CreateItemDialog
	    open={createMemberDialogOpen}
	    handleClose={handleCreateMemberDialogClose}
	    buttonName={addItemButtonName}
	    type="create"
	    store={store}
	    refreshPage={refreshPage}
	  />
	  <div style={{height: 150}} />
	  <BottomOneButtonContainer>
	    <FabButton
	      onClick={handleCreateMemberDialogOpen}
	      buttonName={addItemButtonName}
	    />
	  </BottomOneButtonContainer>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default protectRoute(ListPage);
