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
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

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
	    <div>Shipping Details</div>
	    <div>{shippingType}</div>
	  </OrderDetailsCartHeaderContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails className={classes.description}>
	  <OrderItemsContainer>
	  <OrderItemsHeader> {shippingType} Address </OrderItemsHeader>
	    <OrderItemContainer>
	      {(shippingType === MENU_SHIPPING_TYPE_PICKUP && storeAddress) ?
	      storeAddress : null}
	    </OrderItemContainer>
	    <OrderItemContainer>
	      {(shippingType === MENU_SHIPPING_TYPE_DELIVERY && buyerAddress) ?
	      buyerAddress : null}
	    </OrderItemContainer>
	  </OrderItemsContainer>
	</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
