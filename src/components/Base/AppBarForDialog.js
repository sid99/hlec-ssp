import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function AppBarForDialog({
  headerTitle,
  handleClose,
}) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
	<Typography variant="h6" className={classes.title}>
	  {headerTitle}
	</Typography>
	<IconButton
	  edge="start"
	  color="inherit"
	  onClick={handleClose}
	  aria-label="close"
	>
	  <CloseIcon />
	</IconButton>
      </Toolbar>
    </AppBar>
  );
}
