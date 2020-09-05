import React from "react";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";

import {
  HeaderContainer, 
  FormButtonContainer,
  FormContainer
} from "../Base/components";
import {BottomButtonStyle} from "../Base/styles";
import {routes} from "../../config";
import protectRoute from "../../core/protectRoute";
import AppBar from "../Base/AppBar";
import {MobilePageOuterContainer} from "../Base/MobilePageContainers";
import {useAuth} from "../../core/hooks/useFirebase";

function AccountPage() {
  const {db, user, signout} = useAuth();
  const router = useRouter();
  const headerTitle = "Account";
  const buttonName = "Logout";
  const deleteButtonName = "Delete Store and Logout";

  const next = () => {
    router.push(routes.REDIRECT_AFTER_LOGOUT);
  };

  const handleClick = () => {
    signout(next);
  };

  const handleDeleteStoreAndLogout = async () => {
    const storesRef = db.collection("stores");
    const query = storesRef.where("owner", "==", user.uid);
    const storesSnapshot = await query.get();
    const stores = storesSnapshot.docs.map(
      doc => ({id: doc.id, ...doc.data()}));
    const store = stores[0];
    const catalogItemsRef = db.collection("catalogItems");
    const catalogItemsRefQuery = catalogItemsRef.where("store", "==", store.id);
    const catalogItems = await catalogItemsRefQuery.get();
    catalogItems.forEach(async doc => {
      await doc.ref.delete();
    });
    const menusRef = db.collection("menusRef");
    const menusRefQuery = menusRef.where("store", "==", store.id);
    const menus = await menusRefQuery.get();
    menus.forEach(async doc => {
      await doc.ref.delete();
    });
    const ordersRef = db.collection("ordersRef");
    const ordersRefQuery = ordersRef.where("store", "==", store.id);
    const orders = await ordersRefQuery.get();
    orders.forEach(async doc => {
      await doc.ref.delete();
    });
    const storesAgain = await query.get();
    storesAgain.forEach(async doc => {
      await doc.ref.delete();
    });
    router.push(routes.REDIRECT_AFTER_LOGOUT);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<FormContainer>
	  <HeaderContainer>
	    Email: {user.email}
	  </HeaderContainer>
	  <FormButtonContainer>
	    <Button
	      style={BottomButtonStyle}
	      type="submit"
	      variant="contained"
	      color="primary"
	      onClick={handleDeleteStoreAndLogout}
	    >
	      {deleteButtonName}
	    </Button>
	    <div style={{height: 60}} />
	  </FormButtonContainer>
	  <FormButtonContainer>
	    <Button
	      style={BottomButtonStyle}
	      type="submit"
	      variant="contained"
	      color="primary"
	      onClick={handleClick}
	    >
	      {buttonName}
	    </Button>
	    <div style={{height: 60}} />
	  </FormButtonContainer>
	</FormContainer>
      </MobilePageOuterContainer>
    </>
  );
}

export default protectRoute(AccountPage);
