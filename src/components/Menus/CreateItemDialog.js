import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import CreateItem from "./CreateItem";
import AppBarForDialog from "../Base/AppBarForDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateItemDialog({
  open,
  handleClose,
  catalogItemsByCategory,
  store,
  defaults,
  parent,
}) {
  const headerTitle = "Create Menu";

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
	<CreateItem
	  catalogItemsByCategory={catalogItemsByCategory}
	  store={store}
	  handleClose={handleClose}
	  defaults={defaults}
	  parent={parent}
	/>
      </Dialog>
    </div>
  );
}
