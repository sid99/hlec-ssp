import React from "react";
import Button from "@material-ui/core/Button";

import {OrderStatusButtonsContainer} from "./components";
import {statusButtonsStyles} from "./styles";

// These buttons are just used to open the dialogs
// Different order status states are
// OrderType-Pickup
// placed
// confirmed
// ready to pickup
// picked up
// OrderType-Delivery
// placed
// confirmed
// delivered
export default function StatusButtons({
  item,
  handleStatusButtonClick,
  setPaymentConfirmationDialogOpen,
}) {
  const classes = statusButtonsStyles();
  const {paymentStatus, status} = item;

  const disableConfirmButton = (status.toLowerCase() === "placed") ?
    false : true;
  const disableReadyToPickupButton = (status.toLowerCase() === "confirmed") ?
    false : true;
  const disablePickedupButton = (status.toLowerCase() === "ready to pickup") ?
    false : true;
  const disableDeliveredButton = (status.toLowerCase() === "confirmed") ?
    false : true;
  const disbalePaidButton = (paymentStatus.toLowerCase() === "paid") ?
    true : false;

  return (
    <OrderStatusButtonsContainer>
      <Button
	className={classes.base}
	variant="outlined"
	color="primary"
	// disabled={disableConfirmButton}
	onClick={() => handleStatusButtonClick("confirmed")}
      >CONFIRM ORDER</Button>
      { (item.shippingType === "Pickup") ?
	  (<>
	    <Button
	      className={classes.base}
	      variant="outlined"
	      color="primary"
	      disabled={disableReadyToPickupButton}
	      onClick={() => handleStatusButtonClick("ready to pickup")}
	    >READY TO PICKUP
	    </Button>
	    <Button
	      className={classes.base}
	      variant="outlined"
	      color="primary"
	      disabled={disablePickedupButton}
	      onClick={() => handleStatusButtonClick("picked up")}
	    >PICKED UP
	    </Button>
	  </>) : null
      }
      { (item.shippingType === "Delivery") ?
	<Button
	  className={classes.base}
	  variant="outlined"
	  color="primary"
	  disabled={disableDeliveredButton}
	  onClick={() => handleStatusButtonClick("delivered")}
	>DELIVERED
	</Button> : null
      }
      <Button
	className={classes.base}
	variant="outlined"
	color="primary"
	disabled={disbalePaidButton}
	onClick={() => setPaymentConfirmationDialogOpen(true)}
      >PAID</Button>
    </OrderStatusButtonsContainer>
  );
}
