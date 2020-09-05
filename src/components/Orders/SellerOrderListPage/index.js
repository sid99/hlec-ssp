import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import _ from "lodash";

import Stats from "./Stats";
import UpcomingOrdersPage from "./UpcomingOrdersPage"
import NextOrdersPage from "./NextOrdersPage";
import Communities from "./Communities";
import AppBar from "../../Base/AppBar";
import Spinner from "../../Base/Spinner";
import {getLookUp} from "../../CatalogItems/utils";
import protectRoute from "../../../core/protectRoute";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import firebase, {useAuth} from "../../../core/hooks/useFirebase";
import useCatalogItemsQuery from "../../../hooks/useCatalogItemsQuery";
import useCommunitiesQuery from "../../../hooks/useCommunitiesQuery";
import useMenusQuery from "../../../hooks/useMenusQuery";
import useOrdersQuery from "../../../hooks/useOrdersQuery";
import useStoreQuery from "../../../hooks/useStoreQuery";
import {
  ORDER_CANCELLED_STATUS_CANCELLED,
  ORDER_CANCELLED_STATUS_NOT_CANCELLED,
  ORDER_PAYMENT_STATUS_NOT_PAID,
  ORDER_PAYMENT_STATUS_PAID,
} from "../../consts";

const headerTitle = "Orders By Community";

const OrdersListPage = () => {
  const router = useRouter();
  const {querytype, commuinityid} = router.query;
  const {db} = useAuth();

  const store = useStoreQuery();
  const catalogItemsLookUp = useCatalogItemsQuery("lookup");
  const communities = useCommunitiesQuery("list");
  const menusLookup = useMenusQuery("lookup");
  const orders = useOrdersQuery("live");
  const ordersLookup = getLookUp(orders);

  useEffect(() => {
    firebase.analytics().logEvent("landed_solp");
  }, [router.query.counter]);

  const totalOrders = orders.length;
  let totalSales = 0;
  if (totalOrders > 0) {
    totalSales = _.sumBy(orders, "total");
  }

  if (
    !menusLookup || !orders || !catalogItemsLookUp || orders.length === 0
  ) return <Spinner />;

  const upComingOrders = orders.filter(order => (
    order.orderStatusFour === false));
  const nextOrders = orders.filter(order => (
    order.orderStatusFour === false &
    order.paymentStatus === ORDER_PAYMENT_STATUS_NOT_PAID &
    order.orderStatusThree === false &
    order.orderStatusTwo === false
  ));

  const handleClick = querytype => {
    router.push(
      `/orders?querytype=${querytype}&commuinityid=1231`,
      undefined,
      {shallow: true},
    );
  };

  if (!querytype) {
    return (
      <>
	<MobilePageOuterContainer>
	  <MobilePageOuterContainerTwo>
	    <AppBar headerTitle={headerTitle} />
	    <Stats
	      totalSales={totalSales}
	      totalOrders={totalOrders}
	    />
	    <Communities
	      items={communities}
	      handleClick={handleClick}
	    />
	  </MobilePageOuterContainerTwo>
	</MobilePageOuterContainer>
      </>
    );
  }

  if (querytype === "upcoming") {
    return <UpcomingOrdersPage
      orders={upComingOrders}
      ordersLookup={ordersLookup}
      menusLookup={menusLookup}
      catalogItemsLookUp={catalogItemsLookUp}
    />;
  }

  if (querytype === "next") {
    return <NextOrdersPage orders={nextOrders} store={store} />;
  }
};

export default protectRoute(OrdersListPage);
