import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import AppBarForDialog from "../Base/AppBarForDialog";
// import ItemForm from "./ItemForm";
import Reports from "../Reports/Reports";
import ItemCatalog from "./ItemCatalog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogWrap({
  open,
  handleClose,
  parent,
  menu,
  menuid,
  headerTitle,
  catalogItemsLookUp,
}) {
  const renderMain = () => {
    if (parent === "reports") {
      return <Reports />;
    }
    if (parent === "catalog") {
      return (
	<ItemCatalog
	  menu={menu}
	  catalogItemsLookUp={catalogItemsLookUp}
	/>);
    }
    return <div />;
  };

  return (
    <div>
      <Dialog
	fullScreen
	open={open}
	onClose={handleClose}
	TransitionComponent={Transition}
      >
	<AppBarForDialog
	  headerTitle={headerTitle}
	  handleClose={handleClose}
	/>
	{renderMain()}
      </Dialog>
    </div>
  );
}
