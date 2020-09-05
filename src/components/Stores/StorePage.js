import React, {useEffect} from "react";

import Details from "./Details";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import firebase from "../../core/hooks/useFirebase";
import protectRoute from "../../core/protectRoute";

const StorePage = () => {
  const headerTitle = "My Store";

  useEffect(() => {
    firebase.analytics().logEvent("landed_sp");
  }, []);

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <Details />
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default protectRoute(StorePage);
