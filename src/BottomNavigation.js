import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StorefrontIcon from '@material-ui/icons/Storefront';
import AppsIcon from '@material-ui/icons/Apps';
import StorageIcon from '@material-ui/icons/Storage';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    right: 0,
    boxShadow: "0px 0px 0px 1px #E8E8E8",
    backgroundColor: "#F5F5F5",
  },
});

export default function SimpleBottomNavigation({value}) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
	if (newValue === "yourplugins") router.push("/yourplugins");
	if (newValue === "pluginstore") router.push("/pluginstore");
	if (newValue === "yourstore") router.push("/store");
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
	value="pluginstore"
	className={classes.selected}
	label="Plugin Store"
	icon={<AppsIcon />}
      />
      <BottomNavigationAction
	value="yourplugins"
	className={classes.selected}
	label="Your Plugins"
	icon={<StorageIcon />}
      />
      <BottomNavigationAction
	value="yourstore"
	className={classes.selected}
	label="Your Store"
	icon={<StorefrontIcon />}
      />
    </BottomNavigation>
  );
}
