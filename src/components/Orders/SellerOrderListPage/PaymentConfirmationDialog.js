import BaseConfirmationDialog from "./BaseConfirmationDialog";

const title = "Do you want to confirm the Order payment?";

export default function AlertDialog({
  open,
  handleClose,
  handleConfirm,
}) {
  return (<BaseConfirmationDialog
    title={title}
    open={open}
    handleClose={handleClose}
    handleConfirm={handleConfirm}
  />);
}
