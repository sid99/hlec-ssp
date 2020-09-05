import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  open,
  handleClose,
  handleConfirm,
  title,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
	{title}</DialogTitle>
      <DialogActions>
	<Button onClick={handleClose} color="primary">
	  Cancel
	</Button>
	<Button onClick={handleConfirm} color="primary" autoFocus>
	  Confirm
	</Button>
      </DialogActions>
    </Dialog>
  );
}

/*
      <DialogContent>
	<DialogContentText id="alert-dialog-description">
	  Let Google help apps determine location. This means sending anonymous location data to
	  Google, even when no apps are running.
	</DialogContentText>
      </DialogContent>
*/
