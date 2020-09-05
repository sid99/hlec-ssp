import React, {useEffect, useState} from "react";
import _ from "lodash";
import Checkbox from "@material-ui/core/Checkbox";
import moment from "moment-timezone";

import {
  SelectAllContainer,
} from "./components";
import
CancelConfirmationDialog from "./CancelConfirmationDialog";
import CheckboxList from "./CheckboxList";
import DownloadButton from "./DownloadButton";
import Stats from "./Stats";
import StatusButtons from "./StatusButtons";
import {
  ItemsContainer,
} from "../components";
import {
  ORDER_CANCELLED_STATUS_CANCELLED,
} from "../../consts";
import Spinner from "../../Base/Spinner";
import protectRoute from "../../../core/protectRoute";
import AppBarWithSearchAndFilter from "../../Base/AppBarWithSearchAndFilter";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import {config} from "../../../config";
import firebase, {useAuth} from "../../../core/hooks/useFirebase";

const headerTitle = "Upcoming Orders";

const OrdersListPage = ({
  catalogItemsLookUp,
  menusLookup,
  orders,
  ordersLookup,
}) => {
  const {db} = useAuth();

  const [orderIdToCancel, setOrderIdToCancel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [
    cancelConfirmationDialogOpen, setCancelConfirmationDialogOpen,
  ] = useState(false);

  useEffect(() => {
    firebase.analytics().logEvent("landed_solp");
  });

  const handleOrderCancel = orderId => {
    setOrderIdToCancel(orderId);
    setCancelConfirmationDialogOpen(true);
  };

  const handleCancelConfirmationDialogClose = () => {
    setCancelConfirmationDialogOpen(false);
  };

  const handleCancelConfirmation = async () => {
    handleCancelConfirmationDialogClose();
    const order = ordersLookup[orderIdToCancel];
    const ordersRef = db.collection("orders");
    const orderRef = ordersRef.doc(orderIdToCancel);
    const createdAt = moment().unix();
    const {buyerCheckoutBaseUrl} = config;
    const orderIdShort = orderIdToCancel.slice(0, 5).toUpperCase();
    const message = `Your Order #${orderIdShort} is cancelled by ${order.storeName}. We are sorry for any inconvenience caused. Contact ${order.storePhoneNumber} in case of any issue.\nPlease place new order at the link if you wish to place one: ${buyerCheckoutBaseUrl}${order.menuid}`;
    await orderRef.update({
      cancelStatus: ORDER_CANCELLED_STATUS_CANCELLED,
      cancelStatusUpdatedAt: createdAt,
      sendMessage: true,
      message,
    });
    // sendMessage to buyer
    // sendMessageToBuyer("Order Cancelled");
    setOrderIdToCancel(null);
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

  const filteredOrders = orders.filter(order => {
    if (order.id.toLowerCase().match(searchQuery.toLowerCase()) ||
      order.buyerName.toLowerCase().match(searchQuery.toLowerCase()) ||
      order.buyerPhoneNumber.toLowerCase().match(searchQuery.toLowerCase())
    ) {
      return true;
    }
  });

  const filteredOrdersIds = filteredOrders.map(order => (order.id));

  const totalOrders = orders.length;
  let totalSales = 0;
  if (totalOrders > 0) {
    totalSales = _.sumBy(orders, "total");
  }

  const handleSelectAll = () => {
    if (!selectAll) {
      setChecked(filteredOrdersIds);
      setSelectAll(true);
    } else {
      setChecked([]);
      setSelectAll(false);
    }
  };

  const emptyChecked = () => (setChecked([]));
  const emptySelectedAll = () => (setSelectAll(false));
  const updateOrdersLoading = status => {
    // TODO: need to revisit this
    // setOrdersLoading(status);
    console.log("check this");
  };

  if (
    !menusLookup || !orders || !catalogItemsLookUp
  ) return <Spinner />;

  return (
    <>
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <AppBarWithSearchAndFilter
	    headerTitle={headerTitle}
	    handleChange={event => setSearchQuery(event.target.value)}
	    // paymentFilter={paymentFilter}
	  />
	  <Stats
	    totalSales={totalSales}
	    totalOrders={totalOrders}
	  />
	  <StatusButtons
	    checked={checked}
	    emptySelectedAll={emptySelectedAll}
	    emptyChecked={emptyChecked}
	    updateOrdersLoading={updateOrdersLoading}
	    menuLookup={menusLookup}
	    ordersLookup={ordersLookup}
	  />
	  <SelectAllContainer>
	    <Checkbox
	      size="small"
	      onClick={handleSelectAll}
	      edge="start"
	      checked={selectAll}
	      tabIndex={-1}
	      disableRipple
	    />
	    <div> Select All </div>
	  </SelectAllContainer>
	  <ItemsContainer>
	    <CheckboxList
	      items={filteredOrders}
	      checked={checked}
	      handleToggle={handleToggle}
	      handleOrderCancel={handleOrderCancel}
	    />
	  </ItemsContainer>
	  <div style={{height: 150}} />
	  <DownloadButton
	    orders={orders}
	    catalogItemsLookUp={catalogItemsLookUp}
	  />
	  <CancelConfirmationDialog
	    open={cancelConfirmationDialogOpen}
	    handleClose={handleCancelConfirmationDialogClose}
	    handleConfirm={handleCancelConfirmation}
	  />
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default OrdersListPage;
