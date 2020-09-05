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
import protectRoute from "../../../core/protectRoute";
import firebase from "../../../core/hooks/useFirebase";
import useStoreQuery from "../../../hooks/useStoreQuery";
import useOrdersQuery from "../../../hooks/useOrdersQuery";

const headerTitle = "Cancelled Orders";

const OrdersListPage = () => {
  const store = useStoreQuery();
  const orders = useOrdersQuery("cancelled");

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

export default protectRoute(OrdersListPage);
