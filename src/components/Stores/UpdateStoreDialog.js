import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import AppBarForDialog from "../Base/AppBarForDialog";
import StoreForm from "./StoreForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateStoreDialog({
  open,
  handleClose,
  store,
}) {
  const headerTitle = "Update My Store";
  const buttonName = "Update Store";

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
	<StoreForm
	  type="update"
	  buttonName={buttonName}
	  defaults={store}
	  id={store.id}
	  handleClose={handleClose}
	/>
      </Dialog>
    </div>
  );
}
