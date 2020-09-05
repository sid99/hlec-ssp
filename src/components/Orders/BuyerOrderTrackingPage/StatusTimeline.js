import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment-timezone";
// import _ from "lodash";

import {TIMEZONE} from "../../../config";

export default function OrderDetails({order}) {
  const {shippingType} = order;

  const oneStatusTime = ("orderStatusOneUpdatedAt" in order) ?
    moment.unix(order.orderStatusOneUpdatedAt).tz(
      TIMEZONE).format("DD-MM-YYYY HH:mm") : "NA";
  const twoStatusTime = ("orderStatusTwoUpdatedAt" in order && order.orderStatusTwo) ?
    moment.unix(order.orderStatusTwoUpdatedAt).tz(
      TIMEZONE).format("DD-MM-YYYY HH:mm") : "NA";
  const threeStatusTime = ("orderStatusThreeUpdatedAt" in order && order.orderStatusThree) ?
    moment.unix(order.orderStatusThreeUpdatedAt).tz(
      TIMEZONE).format("DD-MM-YYYY HH:mm") : "NA";
  const fourStatusTime = ("orderStatusFourUpdatedAt" in order && order.orderStatusFour) ?
    moment.unix(order.orderStatusFourUpdatedAt).tz(
      TIMEZONE).format("DD-MM-YYYY HH:mm") : "NA";

  // status
  const thirdStatus = (shippingType === "PICKUP") ?
    "Ready to Pickup" : "Delivery started";
  const fourthStatus = (shippingType === "PICKUP") ?
    "PickedUp" : "Delivered";

  // color
  const firstColor = "secondary";
  const secondColor = "secondary";
  const thirdColor = "secondary";
  const fourthColor = "secondary";

  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{oneStatusTime}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
	   <TimelineDot variant="outlined" color={firstColor} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Order Placed</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{twoStatusTime}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
	    <TimelineDot variant="outlined" color={secondColor} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Order Confirmed</Typography>
          </TimelineContent>
        </TimelineItem>
	<TimelineItem>
	  <TimelineOppositeContent>
	    <Typography color="textSecondary">{threeStatusTime}</Typography>
	  </TimelineOppositeContent>
	  <TimelineSeparator>
	    <TimelineDot variant="outlined" color={thirdColor} />
	    <TimelineConnector />
	  </TimelineSeparator>
	  <TimelineContent>
	    <Typography>{thirdStatus}</Typography>
	  </TimelineContent>
	</TimelineItem>
	<TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{fourStatusTime}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
	    <TimelineDot variant="outlined" color={fourthColor} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{fourthStatus}</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
