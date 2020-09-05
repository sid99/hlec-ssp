import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import moment from "moment-timezone";

import Alerts from "./Alerts";
import {
  ButtonsContainer,
  ButtonsTopContainer,
  ButtonsBottomContainer,
} from "./components";
import {statusButtonsStyles} from "../styles";
import DatetimeFormDialog from "./DatetimeFormDialog";
import
PaymentConfirmationDialog from "./PaymentConfirmationDialog";
import
FullfillmentConfirmationDialog from "./FullfillmentConfirmationDialog";
import {
  ORDER_PAYMENT_STATUS_PAID,
} from "../../consts";
import {getBuyerOrderTrackingWithPayNowRoute} from "../../../config";
import {useAuth} from "../../../core/hooks/useFirebase";

const StatusButtons = ({
  checked,
  emptyChecked,
  emptySelectedAll,
  updateOrdersLoading,
  menuLookup,
  ordersLookup,
}) => {
  const classes = statusButtonsStyles();
  const defaultDateTime = moment();
  const {db} = useAuth();

  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogButtonName, setDialogButtonName] = useState("");
  const [statusType, setStatusType] = useState("");
  const [statusField, setStatusField] = useState("");
  const [statusUpdatedAtField, setStatusUpdatedAtField] = useState("");
  const [
    statusEstimatedDateTimeField, setStatusEstimatedDateTimeField,
  ] = useState("");
  const [dateTimeFormOpen, setDateTimeFormOpen] = React.useState(false);
  const [
    fulfillmentConfirmationDialogOpen, setFulfillmentConfirmationDialogOpen,
  ] = React.useState(false);
  const [
    paymentConfirmationDialogOpen, setPaymentConfirmationDialogOpen,
  ] = React.useState(false);
  const [
    estimatedDateTime, handleEstimatedDateTimeChange,
  ] = useState(defaultDateTime);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  const handleDateTimeFormOpen = () => {
    setDateTimeFormOpen(true);
  };

  const handleDateTimeFormClose = () => {
    setDialogTitle("");
    setDialogButtonName("");
    setStatusField("");
    setStatusUpdatedAtField("");
    setDateTimeFormOpen(false);
  };

  const handleFulfillmentConfirmationDialogClose = () => {
    setFulfillmentConfirmationDialogOpen(false);
  };

  const handleFulfillmentConfirmation = async () => {
    const batch = db.batch();
    const ordersRef = db.collection("orders");
    const createdAt = moment().unix();

    checked.forEach(orderId => {
      const order = ordersLookup[orderId];
      const orderRef = ordersRef.doc(orderId);
      const orderIdShort = orderId.slice(0, 5).toUpperCase();
      let message;

      if (order.paymentStatus === ORDER_PAYMENT_STATUS_PAID) {
	message = `Your Order #${orderIdShort} is fulfilled by ${order.storeName}. Contact ${order.storePhoneNumber} in case of any issue.`;
      } else {
	message = `Your Order #${orderIdShort} is fulfilled by ${order.storeName}. Contact ${order.storePhoneNumber} in case of any issue.`;
      }

      if (!order[statusField]) {
	batch.update(
	  orderRef, {
	    [statusField]: true,
	    [statusUpdatedAtField]: createdAt,
	    sendMessage: true,
	    message,
	  });
      }
    });
    await batch.commit();
    emptySelectedAll();
    emptyChecked();
    handleFulfillmentConfirmationDialogClose();
  };

  const handlePaymentConfirmationDialogClose = () => {
    setPaymentConfirmationDialogOpen(false);
  };

  const handlePaymentConfirmation = async () => {
    const batch = db.batch();
    const ordersRef = db.collection("orders");
    const createdAt = moment().unix();

    checked.forEach(orderId => {
      const orderRef = ordersRef.doc(orderId);
      batch.update(
	orderRef,
	{
	  paymentStatus: ORDER_PAYMENT_STATUS_PAID,
	  paymentStatusUpdatedAt: createdAt,
	}
      );
    });
    await batch.commit();
    emptySelectedAll();
    emptyChecked();
  };

  // batch updating the orders
  const handleDateTimeFormDialogButtonClick = async () => {
    // updateOrdersLoading(true);
    const batch = db.batch();
    const ordersRef = db.collection("orders");
    const createdAt = moment().unix();
    const estimatedDateTimeFormatted = estimatedDateTime.unix();

    checked.forEach(orderId => {
      const order = ordersLookup[orderId];
      const orderRef = ordersRef.doc(orderId);
      const orderIdShort = orderId.slice(0, 5).toUpperCase();
      let message;
      if (statusType === "two") {
	if (order.paymentStatus === ORDER_PAYMENT_STATUS_PAID) {
	  message = `Your Order #${orderIdShort} is confirmed by ${order.storeName}`;
	} else {
	  message = `Your Order #${orderIdShort} is confirmed by ${order.storeName}`;
	}
      }
      if (statusType === "three") {
	message = `Your Order #${orderIdShort} is dispatched by ${order.storeName}`;
      }

      if (!order[statusField]) {
	batch.update(orderRef, {
	  [statusField]: true,
	  [statusUpdatedAtField]: createdAt,
	  [statusEstimatedDateTimeField]: estimatedDateTimeFormatted,
	  sendMessage: true,
	  message,
	});
      }
    });

    await batch.commit();
    emptySelectedAll();
    emptyChecked();
    handleDateTimeFormClose();
  };

  const handleButtonClick = statusType => {
    if (checked.length === 0) {
      setAlertSeverity("error");
      setAlertMessage("No orders are selected");
      setAlertOpen(true);
      return 0;
    }

    if (statusType === "two") {
      setStatusType("two");
      setDialogTitle("Order Confirmation");
      setDialogButtonName("Order Confirmed");
      setStatusField("orderStatusTwo");
      setStatusUpdatedAtField("orderStatusTwoUpdatedAt");
      setStatusEstimatedDateTimeField("orderStatusTwoEstimatedDateTime");
      handleDateTimeFormOpen();
    }

    if (statusType === "three") {
      setStatusType("three");
      setDialogTitle("Ready To Pickup/Delivery");
      setDialogButtonName("Order Ready To Pickup/Delivery");
      setStatusField("orderStatusThree");
      setStatusUpdatedAtField("orderStatusThreeUpdatedAt");
      setStatusEstimatedDateTimeField("orderStatusThreeEstimatedDateTime");
      handleDateTimeFormOpen();
    }

    if (statusType === "four") {
      setStatusField("orderStatusFour");
      setStatusUpdatedAtField("orderStatusFourUpdatedAt");
      setFulfillmentConfirmationDialogOpen(true);
    }

    if (statusType === "payment") {
      setPaymentConfirmationDialogOpen(true);
    }
  };

  return (
    <>
      <Alerts
	open={alertOpen}
	handleClose={handleAlertClose}
	severity={alertSeverity}
	message={alertMessage}
      />
      <ButtonsContainer>
	<ButtonsTopContainer>
	  <Button
	    className={classes.base}
	    variant="outlined"
	    color="primary"
	    onClick={() => handleButtonClick("two")}
	  >CONFIRM</Button>
	  <Button
	    className={classes.base}
	    variant="outlined"
	    color="primary"
	    onClick={() => handleButtonClick("three")}
	  >READY</Button>
	</ButtonsTopContainer>
	<ButtonsBottomContainer>
	  <Button
	    className={classes.base}
	    variant="outlined"
	    color="primary"
	    onClick={() => handleButtonClick("four")}
	  >FULFILLED</Button>
	  <Button
	    className={classes.base}
	    variant="outlined"
	    color="primary"
	    onClick={() => handleButtonClick("payment")}
	  >PAID</Button>
	</ButtonsBottomContainer>
      </ButtonsContainer>
      <DatetimeFormDialog
	open={dateTimeFormOpen}
	title={dialogTitle}
	buttonName={dialogButtonName}
	handleButtonClick={handleDateTimeFormDialogButtonClick}
	handleClose={handleDateTimeFormClose}
	estimatedDateTime={estimatedDateTime}
	handleEstimatedDateTimeChange={handleEstimatedDateTimeChange}
      />
      <PaymentConfirmationDialog
	open={paymentConfirmationDialogOpen}
	handleClose={handlePaymentConfirmationDialogClose}
	handleConfirm={handlePaymentConfirmation}
      />
      <FullfillmentConfirmationDialog
	open={fulfillmentConfirmationDialogOpen}
	handleClose={handleFulfillmentConfirmationDialogClose}
	handleConfirm={handleFulfillmentConfirmation}
      />
    </>
  );
};

export default StatusButtons;
