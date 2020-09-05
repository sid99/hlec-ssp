import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import {
  BottomContainer,
  BuyerAddressContainer,
  CancelStatusContainer,
  DetailsContainer,
  ItemContainer,
  LeftContainer,
  LeftDetailsContainer,
  OrderItemsContainer,
  OrderItemContainer,
  OrderItemsHeader,
  OrderStatusContainer,
  PaymentStatusContainer,
  RightContainer,
  RightDetailsContainer,
  TopContainer,
} from "./NewItemComponents";
import {
  ORDER_CANCELLED_STATUS_CANCELLED,
} from "../../consts";
import {statusButtonsStyles} from "../styles";

import styles from "./styles";

export default function Item({
  item,
  handleToggle,
  checked,
  handleOrderCancel,
  onlyDisplay,
}) {
  const classes = statusButtonsStyles();

  const {id} = item;
  const labelId = `checkbox-list-label-${id}`;
  const [expanded, setExpanded] = useState(false);
  const orderidShort = item.id.slice(0, 5).toUpperCase();

  const {orderItems} = item;
  let status;
  if (item.orderStatusTwo) {
    status = "CONFIRMED";
  }
  if (item.orderStatusThree) {
    status = "READY"
  }
  if (item.orderStatusFour) {
    status = "FULFILLED";
  }

  // const orderIdShort = orderId.slice(0, 5).toUpperCase();

  return (
    <div
      style={styles.listItem}
      key={item.id}
    >
      <ExpansionPanel
	expanded={expanded}
	style={{width: "100%", border: "0px solid black", marginRight: 0}}
	// onChange={() => setExpanded(!expanded)}
      >
	<ExpansionPanelSummary
	  expandIcon={<ExpandMoreIcon
	    style={{border: "0px solid yellow", marginTop: 0, marginLeft: 0}}
	    onClick={() => setExpanded(!expanded)}/>}
	  style={{border: "0px solid blue", marginTop: -10, marginBottom: -10}}
	  // expandIcon={<ExpandMoreIcon />}
	  aria-controls="panel1bh-content"
	  id="panel1bh-header"
	>
	  {(!onlyDisplay) ? (
	      <Checkbox
		size="small"
		onClick={handleToggle(id)}
		edge="start"
		checked={checked.indexOf(id) !== -1}
		tabIndex={-1}
		disableRipple
		inputProps={{"aria-labelledby": labelId}}
	      />) : null
	  }
	  <ItemContainer>
	    <LeftContainer>
	      <TopContainer>
		<LeftDetailsContainer>
		  {item.buyerPhoneNumber} - INR {item.total}
		</LeftDetailsContainer>
	      </TopContainer>
	      <BottomContainer>
		{(item.buyerName) ? (<LeftDetailsContainer>
		    {item.buyerName}
		  </LeftDetailsContainer>) : null
		}
	      </BottomContainer>
	    </LeftContainer>
	    <RightContainer>
	      {(item.cancelStatus === ORDER_CANCELLED_STATUS_CANCELLED) ?
		  (<>
		    <TopContainer>
		  <RightDetailsContainer>
		    <CancelStatusContainer>
		      CANCELLED
		    </CancelStatusContainer>
		  </RightDetailsContainer>
		</TopContainer>
		<BottomContainer />
	      </>): (<>
		<TopContainer>
		  <RightDetailsContainer>
		    <OrderStatusContainer>
		      {status}
		    </OrderStatusContainer>
		  </RightDetailsContainer>
		</TopContainer>
		<BottomContainer>
		  <RightDetailsContainer>
		    <PaymentStatusContainer>
		      {item.paymentStatus.toUpperCase()}
		    </PaymentStatusContainer>
		  </RightDetailsContainer>
		</BottomContainer>
	      </>)
	      }
	    </RightContainer>
	  </ItemContainer>
	</ExpansionPanelSummary>
	<ExpansionPanelDetails style={{border: "0px solid black", padding: 5, paddingLeft: 16, margin: 0}}>
	  <DetailsContainer>
	    {(item.buyerAddress) ? (
	      <BuyerAddressContainer>
		Address: {item.buyerAddress}
	      </BuyerAddressContainer>
	    ) : null
	    }
	    <BuyerAddressContainer>OrderId: #{orderidShort}</BuyerAddressContainer>
	    <OrderItemsHeader> Order Details </OrderItemsHeader>
	    <OrderItemsContainer>
	      {Object.keys(orderItems).map(itemid => (
		<OrderItemContainer key={itemid}>
		  {orderItems[itemid].orderQuantity} x {orderItems[itemid].name}
		</OrderItemContainer>
	      ))}
	    </OrderItemsContainer>
	    {(item.cancelStatus === ORDER_CANCELLED_STATUS_CANCELLED || item.orderStatusFour || onlyDisplay) ?
	      null : (<>
		<div style={{height: 6}} />
		<Button
		  className={classes.cancel}
		  variant="outlined"
		  onClick={() => handleOrderCancel(item.id)}
		>CANCEL
		</Button>
	      </>)
	    }
	  </DetailsContainer>
	</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
