import React, {useEffect} from "react";

import CheckboxList from "./CheckboxList";
// import DownloadButton from "./DownloadButton";
import {
  ItemsContainer,
} from "../components";
import Spinner from "../../Base/Spinner";
import protectRoute from "../../../core/protectRoute";
import AppBar from "../../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import useStoreQuery from "../../../hooks/useStoreQuery";
import useOrdersQuery from "../../../hooks/useOrdersQuery";
import firebase from "../../../core/hooks/useFirebase";

const headerTitle = "Settled Orders";

const OrdersListPage = () => {
  const store = useStoreQuery();
  const orders = useOrdersQuery("settled");

  useEffect(() => {
    firebase.analytics().logEvent("landed_scolp");
  });

  if (!orders || !store) return <Spinner />;

  return (
    <>
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <AppBar
	    headerTitle={headerTitle}
	  />
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

