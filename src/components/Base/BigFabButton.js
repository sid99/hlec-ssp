import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

import {FabButtonContainer} from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  addItem: {
    // color: 'red',
    height: 80,
    width: 200,
    // border: "1px solid black",
    // fontSize: 12,
  },
}));

export default function FabButton({buttonName, onClick}) {
  const classes = useStyles();

  return (
    <FabButtonContainer>
      <div className={classes.root}>
	<Fab
	  color="primary"
	  size="large"
	  className={classes.addItem}
	  variant="extended"
	  onClick={onClick}
	>
	  {buttonName}
	</Fab>
      </div>
    </FabButtonContainer>
  );
}
