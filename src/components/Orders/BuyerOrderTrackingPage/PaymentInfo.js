import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";
import {
  OrderDetailsCartHeaderContainer,
} from "../components";

export default function OrderDetailsPaymentInfo({
  order,
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
	    <div>Payment Details</div>
	    <div>{order.paymentStatus.toUpperCase()}</div>
	  </OrderDetailsCartHeaderContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails className={classes.description}>
	</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
