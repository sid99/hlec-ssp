import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";
import {
  OrderItemsHeader,
  OrderItemsContainer,
  OrderItemContainer,
  OrderDetailsCartHeaderContainer,
} from "../components";
import {
  MENU_SHIPPING_TYPE_DELIVERY,
  MENU_SHIPPING_TYPE_PICKUP,
} from "../../consts";

export default function OrderDetailsCart({
  order,
  store,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const {orderItems, total} = order;
  const {shippingType, storeAddress, buyerAddress} = order;

  return (
    <div className={classes.root}>
      <ExpansionPanel
	className={classes.expanded}
	expanded={expanded}
	onChange={() => setExpanded(!expanded)}
      >
	<ExpansionPanelSummary
	  expandIcon={<ExpandMoreIcon />}
	  aria-controls="panel1a-content"
	  id="panel1a-header"
	  className={classes.summary}
	>
	  <OrderDetailsCartHeaderContainer>
	    <div>Order Details</div>
	    <div>Total: INR {total}</div>
	  </OrderDetailsCartHeaderContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails className={classes.description}>
	  <div>
	    <OrderItemsContainer>
	      <OrderItemsHeader> Cart </OrderItemsHeader>
	      {Object.keys(orderItems).map(itemid => (
		<OrderItemContainer key={itemid}>
		  {orderItems[itemid].orderQuantity} x {orderItems[itemid].name}
		</OrderItemContainer>
	      ))}
	    </OrderItemsContainer>
	    <div style={{height: 10}} />
	    <OrderItemsContainer>
	      <OrderItemsHeader> {shippingType} Address </OrderItemsHeader>
	      <OrderItemContainer>
		{(shippingType === MENU_SHIPPING_TYPE_PICKUP && storeAddress) ?
		storeAddress : null}
		{(shippingType === MENU_SHIPPING_TYPE_DELIVERY && buyerAddress) ?
		buyerAddress : null}
	      </OrderItemContainer>
	    </OrderItemsContainer>
	    <div style={{height: 10}} />
	    <OrderItemsContainer>
	      <OrderItemsHeader> Store Details </OrderItemsHeader>
	      <OrderItemContainer>Name: {store.name}</OrderItemContainer>
	      <OrderItemContainer>Phone Number: {store.phoneNumber}</OrderItemContainer>
	    </OrderItemsContainer>
	  </div>
	</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
