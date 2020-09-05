import React from "react";
import Button from "@material-ui/core/Button";
import {CSVLink} from "react-csv";

import {createOrderReports} from "./utils";
import {
  ActionsContainer,
} from "../components";

const DownloadButton = ({orders, catalogItemsLookUp}) => {
  const orderReports = createOrderReports(orders, catalogItemsLookUp);

  return (
    <ActionsContainer>
      {
	<CSVLink
	  style={{textDecoration: "none"}}
	  data={orderReports}
	  // I also tried adding the onClick event on the link itself
	  filename={"sample.csv"}
	  target="_blank"
	>
	  <Button
	    // className={classes.cancelTwo}
	    variant="outlined"
	    color="primary"
	    // onClick={() => setCancelConfirmationDialogOpen(true)}
	  >Download To CSV</Button>
	</CSVLink>
      }
    </ActionsContainer>
  );
};

export default DownloadButton;
