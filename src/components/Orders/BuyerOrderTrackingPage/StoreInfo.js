import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";
import {
  OrderItemsContainer,
  OrderItemContainer,
  OrderDetailsCartHeaderContainer,
} from "../components";

export default function OrderDetailsStoreInfo({
  store,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

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
	    <div>Store Details</div>
	  </OrderDetailsCartHeaderContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails className={classes.description}>
	  <OrderItemsContainer>
	    <OrderItemContainer>Name: {store.name}</OrderItemContainer>
	    <OrderItemContainer>Phone Number: {store.phoneNumber}</OrderItemContainer>
	  </OrderItemsContainer>
	</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
