import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";

import AppBarForDialog from "../Base/AppBarForDialog";
import {
  SmallHeaderContainer,
  ActionsContainerTwo,
  OrderItemsContainer,
  OrderItemContainerTwo,
  CheckOutTotalContainer,
} from "./components";
import {
  nameInput,
  addressInput,
  phoneNumberInput,
} from "./inputs";
import {
  MENU_SHIPPING_TYPE_DELIVERY,
  MENU_SHIPPING_TYPE_PICKUP,
} from "../consts";
import Input from "../Base/Input";
import {FormContainer} from "../Base/components";
import FabButton from "../Base/FabButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderingFormDialog({
  title,
  open,
  handleClickOpen,
  handleClose,
  buttonName,
  handleButtonClick,
  total,
  orderItems,
  store,
  menu,
  control,
  errors,
  handleSubmit,
  buttonNameOne,
  buttonNameTwo,
  handleButtonClickOne,
  handleButtonClickTwo,
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
	<SmallHeaderContainer>
	  Cart
	</SmallHeaderContainer>
	<OrderItemsContainer>
	  {Object.keys(orderItems).map(itemid => (
	    <div key={itemid}>
	      <OrderItemContainerTwo>
		<div>
		  {orderItems[itemid].orderQuantity} x {orderItems[itemid].name.slice(0,40)}
		</div>
		  <div>
		  {orderItems[itemid].orderQuantity*parseFloat(orderItems[itemid].price)}
		</div>
	      </OrderItemContainerTwo>
	    </div>
	  ))}
	</OrderItemsContainer>
	<Divider variant="middle" style={{marginTop: 10, marginBottom: 10}} />
	<CheckOutTotalContainer>
	  Total: {total}
	</CheckOutTotalContainer>
	<div style={{height: 0}} />
	<SmallHeaderContainer>
	  Phone Number
	</SmallHeaderContainer>
	<div style={{height: 20}} />
	{(menu.shippingType === MENU_SHIPPING_TYPE_PICKUP) ?
	    (<FormContainer>
	      <Input
		config={nameInput}
		control={control}
		errors={errors}
	      />
	      <Input
		config={phoneNumberInput}
		control={control}
		errors={errors}
	      />
	      <SmallHeaderContainer>
		{menu.shippingType} Address
	      </SmallHeaderContainer>
	      <div style={{height: 20}} />
	      {store.address}
	    </FormContainer>) : null
	}
	{(menu.shippingType === MENU_SHIPPING_TYPE_DELIVERY) ?
	    (<FormContainer>
	      <Input
		config={nameInput}
		control={control}
		errors={errors}
	      />
	      <Input
		config={phoneNumberInput}
		control={control}
		errors={errors}
	      />
	      <SmallHeaderContainer>
		{menu.shippingType} Address
	      </SmallHeaderContainer>
	      <div style={{height: 20}} />
	      <Input
		config={addressInput}
		control={control}
		errors={errors}
	      />
	    </FormContainer>) : null
	}
      </DialogContent>
      <div style={{height: 150}} />
      <ActionsContainerTwo>
	<FabButton
	  buttonName={buttonNameOne}
	  onClick={handleSubmit(handleButtonClickOne)}
	/>
	<FabButton
	  buttonName={buttonNameTwo}
	  onClick={handleSubmit(handleButtonClickTwo)}
	/>
      </ActionsContainerTwo>
    </Dialog>
  );
}
/*
*/
