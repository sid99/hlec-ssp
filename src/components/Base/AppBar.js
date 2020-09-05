// This component is taken from material react documentation
import React from "react";
import {useRouter} from "next/router";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./AppBarStyles";
import AppMenu from "./AppMenu";

export default function ButtonAppBar({headerTitle}) {
  const classes = useStyles();

  const router = useRouter();
  const anchor = "left";
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const UserMenu = () => (
    <List>
      <ListItem button>
        <ListItemText
          primary="Home"
          style={{color: "#000"}}
          onClick={() => router.push(routes.HOME_PAGE)}
        />
      </ListItem>
      <ListItem button>
        <ListItemText
          primary="Skin Assessment"
          style={{color: "#000"}}
          onClick={() => router.push(routes.SKIN_ASSESSMENT_PAGE)}
        />
      </ListItem>
    </List>
  );

  const list = (anchor) => (
    <div
      className={clsx(classes.DesktopList)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{paddingTop: "20px"}}
    >
      {AppMenu()}
      <Divider />
    </div>
  );

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/becho-ssp-client-test.appspot.com/o/branding%2Fbecho_logo.png?alt=media"

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
	  <IconButton
	    edge="start"
	    className={classes.menuButton}
	    color="inherit"
	    aria-label="menu"
	    onClick={toggleDrawer(anchor, true)}
	  >
	    <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
	    {headerTitle}
          </Typography>
	  <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
