import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import AppBarForDialog from "../Base/AppBarForDialog";
import CreateItem from "./CreateItem";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateItemDialog({
  open,
  handleClose,
  buttonName,
  type,
  item={},
  store,
  setExpanded,
  refreshPage,
}) {
  const headerTitle = "Add Community";

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
	  type={type}
	  buttonName={buttonName}
	  defaults={item}
	  id={item.id}
	  handleClose={handleClose}
	  store={store}
	  setExpanded={setExpanded}
	  refreshPage={refreshPage}
	/>
      </Dialog>
    </div>
  );
}
