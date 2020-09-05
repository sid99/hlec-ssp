// This component is taken from material react documentation
import React from "react";
import {useRouter} from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import InboxIcon from "@material-ui/icons/Inbox";
import Divider from "@material-ui/core/Divider";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ListIcon from "@material-ui/icons/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PeopleIcon from "@material-ui/icons/People";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

import {routes} from "../../config";

/*
const MenuItems = [
    {
      name: "About Amana",
      url: "https://amana.ai",
      icon: InfoIcon,
    },
    {
      name: "Blog",
      url: "https://medium.com/@amana.ai",
      icon: GroupWorkIcon,
    },
  ];
  */

const imageContainerStyle = {
  display: "flex",
  flex: 1,
  justifyContent: "flex-start",
  // border: "1px solid black",
  // height: 100,
  width: "100%",
  selfAlign: "center",
  paddingLeft: 16,
  marginBottom: -10,
  marginTop: -10,
};

export default function AppMenu() {
  const router = useRouter();

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/becho-ssp-client-test.appspot.com/o/branding%2Fbecho_logo_2.png?alt=media";

  return (
    <div style={{border: "0px solid black"}}>
      <div style={imageContainerStyle}>
	<img src={logoUrl} width="117.1875" height="28.125" alt="logo" />
      </div>
      <Divider />
      <List>
	<ListItem button>
	  <ListItemIcon>
	    <StorefrontIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="My Store"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.STORE)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <ApartmentIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Communities"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.COMMUNITIES)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <ListIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Catalog"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.CATALOG_ITEMS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <ListAltIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Menus"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.MENUS)}
	  />
	</ListItem>
	<Divider />
	<ListItem button>
	  <ListItemIcon>
	    <DynamicFeedIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Orders"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.ORDERS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <DoneAllIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Settled Orders"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.SETTLED_ORDERS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <NotInterestedIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Unsettled Orders"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.UNSETTLED_ORDERS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <CancelPresentationIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Cancelled Orders"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.CANCELLED_ORDERS)}
	  />
	</ListItem>
	<Divider />
	<ListItem button>
	  <ListItemIcon>
	    <AssessmentIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Reports"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.REPORTS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <AccountBalanceIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Payments"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.PAYMENTS)}
	  />
	</ListItem>
	<Divider />
	<ListItem button>
	  <ListItemIcon>
	    <PeopleIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Members"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.MEMBERS)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <AccountBoxIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="Account"
	    style={{color: "#000"}}
	    onClick={() => router.push(routes.ACCOUNT)}
	  />
	</ListItem>
	<ListItem button>
	  <ListItemIcon>
	    <AccountBoxIcon />
	  </ListItemIcon>
	  <ListItemText
	    primary="New"
	    style={{color: "#000"}}
	    onClick={() => router.push("/one")}
	  />
	</ListItem>
      </List>
    </div>
  );
}
