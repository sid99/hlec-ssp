import React from "react";
import styled from "styled-components";

import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

// Main containers
export const AddItemContainer = styled.div({
  // border: '1px solid black',
  position: "fixed",
  left: 0,
  bottom: 0,
  marginBottom: 40,
  width: "100%",
  textAlign: "center",
});

const useStyles = makeStyles((theme) => ({
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
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <AddItemContainer>
    <div className={classes.root}>
      <Fab color="primary" className={classes.addItem} variant="extended">
        Create Campaign
      </Fab>
    </div>
  </AddItemContainer>
  );
}
