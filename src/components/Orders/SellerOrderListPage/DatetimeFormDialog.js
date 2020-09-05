import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment-timezone";
import Slide from "@material-ui/core/Slide";

import AppBarForDialog from "../../Base/AppBarForDialog";
import {
  HeaderContainer,
  ActionsContainer,
} from "../components";
import {FormContainer} from "../../Base/components";
import FabButton from "../../Base/ExtraBigFabButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderFormDialog({
  title,
  open,
  handleClose,
  buttonName,
  handleButtonClick,
  estimatedDateTime,
  handleEstimatedDateTimeChange,
}) {
  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
    >
      <AppBarForDialog
	headerTitle={title}
	handleClose={handleClose}
      />
      <DialogContent>
	<HeaderContainer>
	  Pick Tentative Date and Time
	</HeaderContainer>
	<FormContainer>
	  <div style={{height: 40}} />
	  <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} >
	    <DateTimePicker
	      style={{width: "100%", paddingBottom: 20}}
	      label="Date And Time"
	      value={estimatedDateTime}
	      onChange={handleEstimatedDateTimeChange}
	      disablePast
	    />
	  </MuiPickersUtilsProvider>
	</FormContainer>
      </DialogContent>
      <ActionsContainer>
	<FabButton
	  buttonName={buttonName}
	  onClick={handleButtonClick}
	/>
      </ActionsContainer>
    </Dialog>
  );
}
