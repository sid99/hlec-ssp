import React from "react";
import Paper from "@material-ui/core/Paper";

import {
  statsPaperStyles,
  StatsContainer,
} from "./components";

const Stats = ({
  totalOrders,
  totalSales,
}) => {
  return (
    <StatsContainer>
      <Paper
	style={statsPaperStyles}
	variant="outlined"
      >Total Orders: {totalOrders}</Paper>
      <Paper
	style={statsPaperStyles}
	variant="outlined"
      >Total Sales: INR {totalSales}</Paper>
    </StatsContainer>
  );
};

export default Stats;
