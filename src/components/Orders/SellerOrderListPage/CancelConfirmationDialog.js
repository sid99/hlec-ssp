import BaseConfirmationDialog from "./BaseConfirmationDialog";

const title = "Do you want to cancel the Order ?";

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
