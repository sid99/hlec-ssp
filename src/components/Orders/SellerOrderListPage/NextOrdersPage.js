import React, {useEffect} from "react";

import CheckboxList from "./CheckboxList";
// import DownloadButton from "./DownloadButton";
import {
  ItemsContainer,
} from "../components";
import Spinner from "../../Base/Spinner";
import AppBar from "../../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import firebase from "../../../core/hooks/useFirebase";

const headerTitle = "Next Orders";

const FooListPage = ({store, orders}) => {
  useEffect(() => {
    firebase.analytics().logEvent("landed_scolp");
  });

  if (!orders || !store) return <Spinner />;

  return (
    <>
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <AppBar headerTitle={headerTitle} />
	  <ItemsContainer>
	    <CheckboxList
	      items={orders}
	      onlyDisplay
	    />
	  </ItemsContainer>
	  <div style={{height: 150}} />
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default FooListPage;
