import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment-timezone";
import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";

import StatusButtons from "../StatusButtons";
import {
  BuyerDetails,
  ItemContainer,
  LeftContainer,
  PriceContainer,
  RightContainer,
  CancelStatusContainer,
  OrderNumberContainer,
  OrderNumber,
  OrderItemsHeader,
  DetailsContainer,
  OrderItemsContainer,
  OrderItemContainer,
} from "./components";
import DatetimeFormDialog from "./DatetimeFormDialog";
import
CancelConfirmationDialog from "./CancelConfirmationDialog";
import
PaymentConfirmationDialog from "./PaymentConfirmationDialog.js";
import {statusButtonsStyles} from "../styles";
import {useAuth} from "../../../core/hooks/useFirebase";

// TODO: rename and refactor this workflow
export default function OrderItemPreview({
  item,
  store,
  menu,
}) {
  const defaultDate = (item.settlementDate) ?
    moment(item.settlementDate) : moment();
  const defaultTime = (item.settlementTime) ?
    moment(item.settlementTime) : moment();

  const classes = statusButtonsStyles();
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogButtonName, setDialogButtonName] = useState("");
  const [statusType, setStatusType] = useState("");
  const [message, setMessage] = useState("");
  const [statusTimeField, setStatusTimeField] = useState("");
  const [statusField, setStatusField] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [
    cancelConfirmationDialogOpen, setCancelConfirmationDialogOpen,
  ] = React.useState(false);
  const [
    paymentConfirmationDialogOpen, setPaymentConfirmationDialogOpen,
  ] = React.useState(false);
  const [selectedDate, handleDateChange] = useState(defaultDate);
  const [selectedTime, handleTimeChange] = useState(defaultTime);

  const {db} = useAuth();
  const orderRef = db.collection("orders").doc(item.id);

  item.shippingType = menu.shippingType;
  const selectedDateFormatForMessage = moment(
    item.settlementDate).format("DD-MM-YYYY");
  const selectedTimeFormatForMessage = moment(
    item.settlementTime).format("HH:mm");
  // const confirmedMessage = `Your order is confirmed and tentatively scheduled for ${selectedDateFormatForMessage} around ${selectedTimeFormatForMessage} for ${shippingType}`;
  // const readyToPickupMessage = `Your order ready to pick up on ${selectedDateFormatForMessage} around ${selectedTimeFormatForMessage}`;
  // const deliveryStartedMessage = `Your order delivery started and should be delivered on ${selectedDateFormatForMessage} around ${selectedTimeFormatForMessage}`;
  const confirmedMessage = "Your order is confirmed.";
  const readyToPickupMessage = "Your order is ready to pick up.";

  const handleCancelConfirmationDialogClose = () => {
    setCancelConfirmationDialogOpen(false);
  };

  const handleCancelConfirmation = async () => {
    const createdAt = moment().unix();
    await orderRef.update({
      cancelStatus: "cancelled",
      cancelStatusTime: createdAt,
    });
    // sendMessage to buyer
    sendMessageToBuyer("Order Cancelled");
    setCancelConfirmationDialogOpen(false);
  };

  const handlePaymentConfirmationDialogClose = () => {
    setPaymentConfirmationDialogOpen(false);
  };

  const handlePaymentConfirmation = async () => {
    const createdAt = moment().unix();
    await orderRef.update({
      paymentStatus: "paid",
      paymentStatusTime: createdAt,
    });
    setPaymentConfirmationDialogOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStatusType("");
    setDialogTitle("");
    setDialogButtonName("");
    setStatusField("");
    setStatusTimeField("");
    setMessage("");
    setOpen(false);
  };

  const handlePaidButtonClikc = () => {
  }

  const handleStatusButtonClick = statusType => {
    if (statusType === "confirmed") setStatusType("confirmed");
    if (statusType === "confirmed") setDialogTitle("Order Confirmation");
    if (statusType === "confirmed") setDialogButtonName("Order Confirmed");
    if (statusType === "confirmed") setStatusField("confirmedStatus");
    if (statusType === "confirmed") setStatusTimeField("confirmedStatusTime");
    if (statusType === "confirmed") setMessage(confirmedMessage);
    if (statusType === "confirmed") handleClickOpen();

    if (statusType === "ready to pickup") setStatusType("ready to pickup");
    if (statusType === "ready to pickup") setDialogTitle("Ready To Pickup");
    if (
      statusType === "ready to pickup") setDialogButtonName("Ready to Pickup");
    if (statusType === "ready to pickup") setStatusField("readyToPickupStatus");
    if (statusType === "ready to pickup") setStatusTimeField("readyToPickupStatusTime");
    if (statusType === "ready to pickup") setMessage(readyToPickupMessage);
    if (statusType === "ready to pickup") handleClickOpen();

    if (statusType === "picked up") {
      handleConfirmationStatusClick(
	"picked up",
	"pickedUpStatus",
	"pickedUpStatusTime",
	"Picked Up",
      );
    }

    if (statusType === "delivered") {
      handleConfirmationStatusClick(
	"delivered",
	"deliveredStatus",
	"deliveredStatusTime",
	"Delivered",
      );
    }
  };

  const sendMessageToBuyer = async message => {
    if (message === "") return 0;
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port ? ":" + window.location.port: "";
    const endpoint = "/api/sendMessage";
    const endpointUrl = `${protocol}//${hostname}${port}${endpoint}`;
    const postOpts = {
      message,
      phoneNumber: item.buyer.phoneNumber,
    };
    const fetchPostOpts = {
      method: "post",
      body: JSON.stringify(postOpts),
    };
    await fetch(endpointUrl, fetchPostOpts);
  };

  const handleConfirmationStatusClick = async (
    statusType,
    statusField,
    statusTimeField,
    message,
  ) => {
    const createdAt = moment().unix();
    await orderRef.update({
      status: statusType,
      [statusField]: true,
      [statusTimeField]: createdAt,
    });
    // sendMessage to buyer
    sendMessageToBuyer(message);
  };

  const handleDialogButtonClick = async () => {
    // update the order doc
    const orderRef = db.collection("orders").doc(item.id);
    const selectedDateFormat = selectedDate.format();
    const selectedTimeFormat = selectedTime.format();
    const createdAt = moment().unix();
    await orderRef.update({
      settlementTime: selectedTimeFormat,
      settlementDate: selectedDateFormat,
      status: statusType,
      [statusField]: true,
      [statusTimeField]: createdAt,
    });
    // sendMessage to buyer
    sendMessageToBuyer(message);
    setOpen(false);
    handleClose();
  };

  const orderidShort = item.id.slice(0, 5).toUpperCase();
  const {orderItems} = item;
  item.paymentStatus = (item.paymentStatus === undefined) ?
    "not paid" : item.paymentStatus.toUpperCase();

  return (
    <>
      <ExpansionPanel
	expanded={expanded}
	// onChange={() => setExpanded(!expanded)}
      >
	<ExpansionPanelSummary
	  expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)}/>}
	  // expandIcon={<ExpandMoreIcon />}
	  aria-controls="panel1bh-content"
	  id="panel1bh-header"
	>
	  <ItemContainer>
	    <LeftContainer>
	      <OrderNumberContainer>
		<OrderNumber>#{orderidShort} - {item.status.toUpperCase()}</OrderNumber>
	      </OrderNumberContainer>
	      <PriceContainer>INR {item.total} - {item.paymentStatus.toUpperCase()}</PriceContainer>
	      {(item.buyer) ? (
		<BuyerDetails>
		  {item.buyer.name} - {item.buyer.phoneNumber}
		</BuyerDetails>
	      ) : null
	      }
	    </LeftContainer>
	    <RightContainer>
	      {(item.cancelStatus === "cancelled") ?
	      <CancelStatusContainer>CANCELLED</CancelStatusContainer> : <StatusButtons
		  item={item}
		  handleStatusButtonClick={handleStatusButtonClick}
		  setPaymentConfirmationDialogOpen={setPaymentConfirmationDialogOpen}
		/>
		}
	    </RightContainer>
	  </ItemContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails>
	  <DetailsContainer>
	    {(item.deliveryAddress) ? (
	      <BuyerDetails>{item.deliveryAddress}</BuyerDetails>
	    ) : null
	    }
	    <div style={{height: 10}} />
	    <OrderItemsHeader> Order Details </OrderItemsHeader>
	    <OrderItemsContainer>
	      {Object.keys(orderItems).map(itemid => (
		<OrderItemContainer key={itemid}>
		  {orderItems[itemid].orderQuantity} x {orderItems[itemid].name}
		</OrderItemContainer>
	      ))}
	    </OrderItemsContainer>
	    {(item.cancelStatus === "cancelled") ?
	      null : (
		<>
		  <div style={{height: 20}} />
		  <Button
		    className={classes.cancel}
		    variant="outlined"
		    onClick={() => setCancelConfirmationDialogOpen(true)}
		  >CANCEL
		  </Button>
		</>
	      )
	    }
	  </DetailsContainer>
	</ExpansionPanelDetails>
      </ExpansionPanel>
      <DatetimeFormDialog
	open={open}
	title={dialogTitle}
	buttonName={dialogButtonName}
	handleButtonClick={handleDialogButtonClick}
	handleClose={handleClose}
	handleClickOpen={handleClickOpen}
	selectedDate={selectedDate}
	selectedTime={selectedTime}
	handleDateChange={handleDateChange}
	handleTimeChange={handleTimeChange}
      />
      <CancelConfirmationDialog
	open={cancelConfirmationDialogOpen}
	handleClose={handleCancelConfirmationDialogClose}
	handleConfirm={handleCancelConfirmation}
      />
      <PaymentConfirmationDialog
	open={paymentConfirmationDialogOpen}
	handleClose={handlePaymentConfirmationDialogClose}
	handleConfirm={handlePaymentConfirmation}
      />
    </>
  );
}
