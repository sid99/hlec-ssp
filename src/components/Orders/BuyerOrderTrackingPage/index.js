import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import moment from "moment-timezone";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

import StatusTimeline from "./StatusTimeline";
import CartDetails from "./CartDetails";
import getPaymentOptions from "./getPaymentOptions";
import {
  DisclaimerContainer,
  ActionsContainerTwo,
  StatusText,
  RegularText,
} from "../components";
import
CancelConfirmationDialog from "../SellerOrderListPage/CancelConfirmationDialog";
import {statusButtonsStyles} from "../styles";
import {HeaderContainerTwo} from "../components";
import Spinner from "../../Base/Spinner";
import {
  ORDER_CANCELLED_STATUS_CANCELLED,
  ORDER_PAYMENT_STATUS_PAID,
  // ORDER_BUYER_CANNOT_CANCEL_MESSAGE,
} from "../../consts";
import AppBarWithOnlyHeader from "../../Base/AppBarWithOnlyHeader";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import {config} from "../../../config";
import firebase, {useAuth} from "../../../core/hooks/useFirebase";

function Alert(props) {
  return <MuiAlert elevation={0} variant="filled" {...props} />;
}

const PlaceOrdersPage = () => {
  const classes = statusButtonsStyles();
  const router = useRouter();
  const {orderid, payNow} = router.query;
  const {db} = useAuth();
  const [order, setOrder] = useState(null);
  const [store, setStore] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [
    confirmPaymentAlert, setConfirmPaymentAlert] = useState(false);
  const [
    cancelConfirmationDialogOpen, setCancelConfirmationDialogOpen,
  ] = React.useState(false);

  const {razorpayKeyId} = config;

  const handleCancelConfirmationDialogClose = () => {
    setCancelConfirmationDialogOpen(false);
  };

  const updatePaymentStatusToPAID = async () => {
    const orderRef = db.collection("orders").doc(orderid);
    const createdAt = moment().unix();
    await orderRef.set({
      paymentStatus: ORDER_PAYMENT_STATUS_PAID,
      paymentStatusUpdatedAt: createdAt,
    }, {merge: true});
    setConfirmPaymentAlert(true);
  };

  const handleCancelConfirmation = async () => {
    const orderRef = db.collection("orders").doc(orderid);
    const createdAt = moment().unix();
    await orderRef.update({
      cancelStatus: ORDER_CANCELLED_STATUS_CANCELLED,
      cancelStatusTime: createdAt,
    });
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port ? ":" + window.location.port: "";
    const endpoint = `/placeorders/${menu.id}?confirm=1`;
    const endpointUrl = `${protocol}//${hostname}${port}${endpoint}`;
    window.location = endpointUrl;
    // setCancelConfirmationDialogOpen(false);
  };

  useEffect(() => {
    firebase.analytics().logEvent("landed_btp");
    const fetchOrder = async () => {
      const orderRef = db.collection("orders").doc(orderid);
      orderRef.onSnapshot(async doc => {
	const rawOrder = {...doc.data(), id: doc.id};
	setOrder(rawOrder);
	if (rawOrder.storeid) {
	  const storeRef = db.collection("stores").doc(rawOrder.storeid);
	  const storeDoc = await storeRef.get();
	  const rawStore = {...storeDoc.data(), id: storeDoc.id};
	  setStore(rawStore);
	  const menuRef = db.collection("menus").doc(doc.data().menuid);
	  const menuDoc = await menuRef.get();
	  const rawMenu = {...menuDoc.data(), id: menuDoc.id};
	  setMenu(rawMenu);
	  if (payNow === "1") {
	    openPayModal(rawStore, rawOrder);
	  }
	  setLoading(false);
	}
      });
      // const newOrder = await orderRef.get();
      // if (newOrder.exists) setOrder({...newOrder.data(), id: newOrder.id});
      // setLoading(false);
    };
    if (orderid) {
      fetchOrder();
    }
  }, [orderid]);

  const openPayModal = (store, order) => {
    const name = store.name;
    const orderidShort = order.id.slice(0, 5).toUpperCase();
    const description = `For order #${orderidShort}`;
    // TODO: move this to order creation and updation
    // const amount = toString(parseInt(order.total)*100);
    const amountInt = parseInt(order.total)*100;
    const amount = amountInt.toString();
    const buyerContact = `91${order.buyerPhoneNumber}`;
    const options = getPaymentOptions(
      name,
      description,
      amount,
      order.buyerName,
      buyerContact,
      order.razorpayOrderId,
      razorpayKeyId,
      updatePaymentStatusToPAID,
    );
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (loading) return <Spinner />;

  if (!order) return <Spinner />;

  const orderidShort = order.id.slice(0, 5).toUpperCase();

  // Buyer cannot cancel if
  // 1. order is already cancelled
  // 2. order is confirmed
  // 3. menu is expired
  const isOrderCancelled =
    order.cancelStatus === ORDER_CANCELLED_STATUS_CANCELLED;

  const isOrderConfirmed = order.orderStatusTwo;

  // const currentUnixTime = moment().unix();
  // const hasMenuExpired = currentUnixTime > menu.expiresAt;

  const isOrderPaid = order.paymentStatus === ORDER_PAYMENT_STATUS_PAID;

  const buyerCannotCancelOrder =
    isOrderCancelled || isOrderConfirmed || isOrderPaid;

  const disclaimerMessage =
    `For any modifications to the order, please contact ${store.name} at ${store.phoneNumber}`
  const Disclaimer = () => (
    <Alert severity="warning">{disclaimerMessage}</Alert>);

  const paymentConfirmationMessage =
    `Your payment has been successful`;
  const PaymentConfirmation = () => (
    <Alert severity="success">{paymentConfirmationMessage}</Alert>);

  let status;
  if (order.orderStatusOne) {
    status = "PLACED";
  }
  if (order.orderStatusTwo) {
    status = "CONFIRMED";
  }
  if (order.orderStatusThree) {
    status = "READY";
  }
  if (order.orderStatusFour) {
    status = "FULFILLED";
  }

  const headerTitle = `Your ${store.name.toUpperCase()} Order`;

  // TODO: consolidate this
  const orderItems = order.orderItems;
  let orderDetailsFormatted = "";
  Object.keys(orderItems).forEach(itemId => {
    const orderItem = orderItems[itemId];
    if (orderDetailsFormatted.length > 1) {
      orderDetailsFormatted = `${orderDetailsFormatted}\n${orderItem.orderQuantity} x ${orderItem.name}`;
    } else {
      orderDetailsFormatted = `${orderItem.orderQuantity} x ${orderItem.name}`;
    }
  });
  /*
  */

  return (
    <>
      <AppBarWithOnlyHeader headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  {(confirmPaymentAlert) ? <PaymentConfirmation /> : null}
	  {(buyerCannotCancelOrder) ? (
	    <DisclaimerContainer>
	      <Disclaimer />
	    </DisclaimerContainer>
	  ) : null }
	  <div style={{height: 5}} />
	  <HeaderContainerTwo>
	    <RegularText>
	      Order #{orderidShort} - 
	    </RegularText>
	    <StatusText>{status} -</StatusText>
	    <StatusText>{order.paymentStatus}</StatusText>
	  </HeaderContainerTwo>
	  {(order.cancelStatus === ORDER_CANCELLED_STATUS_CANCELLED) ? (
	    <HeaderContainer>
	      <div style={{color: "red"}}>
		The order is cancelled
	      </div>
	    </HeaderContainer>
	  ) : null
	  }
	  <CartDetails order={order} store={store} />
	  <StatusTimeline order={order} />
	  <div style={{height: 80}} />
	  <ActionsContainerTwo>
	    { (buyerCannotCancelOrder) ? (
	      null
	    ) : (<Button
	      className={classes.cancelTwo}
	      variant="outlined"
	      color="primary"
	      onClick={() => setCancelConfirmationDialogOpen(true)}
	    >CANCEL</Button>
	    )}
	    {(order.paymentStatus === ORDER_PAYMENT_STATUS_PAID) ? (
	      null
	    ) : (<Button
		className={classes.payNow}
		variant="outlined"
		color="primary"
		onClick={() => openPayModal(store, order)}
	      >PAY NOW</Button>
	    )}
	  </ActionsContainerTwo>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
      <CancelConfirmationDialog
	open={cancelConfirmationDialogOpen}
	handleClose={handleCancelConfirmationDialogClose}
	handleConfirm={handleCancelConfirmation}
      />
    </>
  );
};

export default PlaceOrdersPage;
