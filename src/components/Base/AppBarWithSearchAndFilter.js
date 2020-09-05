// This component is taken from material react documentation
import React from "react";
// import {useRouter} from "next/router";
// import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import FilterListIcon from "@material-ui/icons/FilterList";

import useStyles from "./AppBarStyles";
import AppMenu from "./AppMenu";
import {FilterHeaderContainer} from "./components";
import FilterList from "./FilterList";

export default function ButtonAppBar({headerTitle, handleChange}) {
  const classes = useStyles();
  const anchorLeft = "left";
  const anchorRight = "right";
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const renderAppMenu = anchor => (
    <div
      className={clsx(classes.DesktopList)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{paddingTop: "20px"}}
    >
      <AppMenu />
      <Divider />
    </div>
  );

  const renderFilters = anchor => (
    <div
      className={clsx(classes.DesktopList)}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onClick={() => null}
      onKeyDown={toggleDrawer(anchor, false)}
      // style={{paddingTop: "20px"}}
    >
      <FilterList />
      <Divider />
    </div>
  );

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
	  <IconButton
	    edge="start"
	    className={classes.menuButton}
	    color="inherit"
	    aria-label="menu"
	    onClick={toggleDrawer(anchorLeft, true)}
	  >
	    <MenuIcon />
          </IconButton>
	  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{"aria-label": "search"}}
	      onChange={handleChange}
            />
          </div>
	  <div className={classes.grow} />
          <div className={classes.sectionMobile}>
	    <IconButton
	      color="inherit"
	      onClick={toggleDrawer(anchorRight, true)}
	    >
	      <FilterListIcon />
            </IconButton>
	  </div>
	  <Drawer
	    anchor={anchorLeft}
	    open={state[anchorLeft]}
	    onClose={toggleDrawer(anchorLeft, false)}
	  >
	    {renderAppMenu(anchorLeft)}
	  </Drawer>
	  <Drawer
	    anchor={anchorRight}
	    open={state[anchorRight]}
	    onClose={toggleDrawer(anchorRight, false)}
	  >
	    <FilterHeaderContainer>Filters</FilterHeaderContainer>
	    {renderFilters(anchorRight)}
	  </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
