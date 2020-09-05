import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    alignItems: "center",
  },
  title: {
    marginLeft: theme.spacing(2),
  },
}));

export default function AppBarWithOnlyHeader({
  headerTitle,
}) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
	<Typography variant="h6" align="center" className={classes.title}>
	  {headerTitle}
	</Typography>
      </Toolbar>
    </AppBar>
  );
}
