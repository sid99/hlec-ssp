import React, {useEffect} from "react";

import StoreForm from "./StoreForm";
import AppBarWithOnlyHeader from "../Base/AppBarWithOnlyHeader";
import {
  MobilePageOuterLongContainer} from "../Base/MobilePageContainers";
import firebase from "../../core/hooks/useFirebase";
import protectRoute from "../../core/protectRoute";

const CreateStorePage = () => {
  const headerTitle = "Create Store";
  const buttonName = "Create Store";

  useEffect(() => {
    firebase.analytics().logEvent("landed_csp");
  }, []);

  return (
    <>
      <AppBarWithOnlyHeader headerTitle={headerTitle} />
      <MobilePageOuterLongContainer>
	<StoreForm
	  type="create"
	  buttonName={buttonName}
	/>
      </MobilePageOuterLongContainer>
    </>
  );
};

export default protectRoute(CreateStorePage);
