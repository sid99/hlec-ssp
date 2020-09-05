import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MuiAlert from "@material-ui/lab/Alert";
import {useRouter} from "next/router";
import moment from "moment-timezone";

import {
  ActionsContainer,
} from "../components";
import MenuCatalog from "../MenuCatalog";
import OrderingFormDialog from "../OrderingFormDialog";
import {
  MENU_TYPE_DEFAULT,
  MENU_SHIPPING_TYPE_DELIVERY,
  ORDER_CANCELLED_STATUS_NOT_CANCELLED,
  ORDER_PAYMENT_STATUS_NOT_PAID,
  MENU_EXPIRED_WARNING_MESSAGE,
  ORDER_CANCELLATION_SUCCESS_MESSAGE,
} from "../../consts";
import FabButton from "../../Base/FabButton";
import Spinner from "../../Base/Spinner";
import {getLookUp, getDictionary} from "../../CatalogItems/utils";
import AppBarWithOnlyHeader from "../../Base/AppBarWithOnlyHeader";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../../Base/MobilePageContainers";
import firebase, {useAuth} from "../../../core/hooks/useFirebase";
import {
  getBuyerOrderTrackingWithPayNowRoute,
  getBuyerOrderTrackingWithPayLaterRoute,
} from "../../../config";

function Alert(props) {
  return <MuiAlert elevation={0} variant="filled" {...props} />;
}

const PlaceOrdersPage = () => {
  const router = useRouter();
  const {menuid, confirm} = router.query;
  const {db} = useAuth();
  const [store, setStore] = useState(null);
  const [menu, setMenu] = useState({});
  const [catalogItemsByCategory, setCatalogItemsByCategory] = useState(null);
  const [catalogItemsLookUp, setCatalogItemsLookUp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const buttonNameTwo = "Place Order";
  const buttonName = "Checkout";
  const placeOrderButtonOne = "Place Order & Pay Now";
  const placeOrderButtonTwo = "Place Order & Pay Later";

  const {control, errors, watch, handleSubmit} = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchAllFields = watch();
  const orderItems = {};

  useEffect(() => {
    firebase.analytics().logEvent("landed_bcp");
    const fetchAll = async () => {
      const menuRef = db.collection("menus").doc(menuid);
      const newMenu = await menuRef.get();
      if (newMenu.exists) {
	const menu = {...newMenu.data(), id: newMenu.id}
	setMenu(menu)
	// TODO: pull only the relevant catalogItems
	const storeid = menu.storeid;
	// fetching stores
	const storeRef = db.collection("stores").doc(storeid);
	const storeDoc = await storeRef.get();
	const store = {id: storeid, ...storeDoc.data()};
	setStore(store);
	const catalogItemsRef = db.collection("catalogItems");
	const catalogItemsQuery = catalogItemsRef.where(
	  "storeid", "==", storeid);
	const unsubscribeCatalogItems = catalogItemsQuery
	  .onSnapshot(querySnapshot => {
	    const catalogItems = querySnapshot.docs.map(
	      doc => ({id: doc.id, ...doc.data()}));
	    if (menu.menuType === MENU_TYPE_DEFAULT) {
	      menu.catalogItemIds = catalogItems.map(item => (item.id));
	    }
	    const menuCatalogItems = catalogItems.filter(
	      item => menu.catalogItemIds.includes(item.id));
	    const catalogItemsByCategory = getDictionary(menuCatalogItems);
	    setCatalogItemsByCategory(catalogItemsByCategory);
	    const catalogItemsLookUp = getLookUp(menuCatalogItems);
	    setCatalogItemsLookUp(catalogItemsLookUp);
	    setLoading(false);
	  });
	return () => {
	  unsubscribeCatalogItems();
	};
      } else {
	setLoading(false);
      }
    };
    if (menuid) {
      fetchAll();
    }
  }, [menuid]);

  let total = 0;

  Object.keys(watchAllFields).forEach(field => {
    if (
      field != "deliveryAddress" &&
      field != "phoneNumber" &&
      field != "name"
    ) {
      const orderQuantity = watchAllFields[field];
      const catalogItemPrice = parseFloat(catalogItemsLookUp[field].price);
      total = total + catalogItemPrice*orderQuantity;
      if (orderQuantity > 0) {
	orderItems[field] = {orderQuantity, ...catalogItemsLookUp[field]};
      }
    }
  });

  const handleClick = async (d, payNowTwo) => {
    setLoading(true);
    const ordersRef = db.collection("orders");
    let buyerAddress = "";
    if (menu.shippingType === MENU_SHIPPING_TYPE_DELIVERY) {
      buyerAddress = d.deliveryAddress;
    }
    // FIRESTORE CRUD
    // BECHO PROTOCOL
    const createdAt = moment().unix();
    const order = await ordersRef.add({
      buyerAddress,
      buyerName: d.name,
      buyerPhoneNumber: d.phoneNumber,
      cancelStatus: ORDER_CANCELLED_STATUS_NOT_CANCELLED,
      cancelStatusUpdatedAt: createdAt,
      createdAt,
      menuid: menu.id,
      orderItems,
      orderStatusOne: true,
      orderStatusOneUpdatedAt: createdAt,
      orderStatusTwo: false,
      orderStatusTwoUpdatedAt: createdAt,
      orderStatusTwoEstimatedDateTime: 0,
      orderStatusThree: false,
      orderStatusThreeUpdatedAt: createdAt,
      orderStatusThreeEstimatedDateTime: 0,
      orderStatusFour: false,
      orderStatusFourUpdatedAt: createdAt,
      paymentStatus: ORDER_PAYMENT_STATUS_NOT_PAID,
      paymentStatusUpdatedAt: createdAt,
      shippingType: menu.shippingType,
      storeid: menu.storeid,
      storeAddress: store.address,
      storeName: store.name,
      storePhoneNumber: store.phoneNumber,
      total,
    });
    let buyerOrderTrackingUrl;

    if (payNowTwo) {
      buyerOrderTrackingUrl = getBuyerOrderTrackingWithPayNowRoute(
	order.id);
    } else {
      buyerOrderTrackingUrl = getBuyerOrderTrackingWithPayLaterRoute(
	order.id);
    }
    router.push(buyerOrderTrackingUrl);
    // const telegramUrl = `https://t.me/ava_v0_bot?start=${orderid.id}`;
    // const whatsappUrl = `https://wa.me/918088620975?text=${config.whatsappMessage} ${orderid.id}`;
    // window.location = whatsappUrl;
    /*
    */
  };

  const handleClickOne = d => {
    handleClick(d, true);
  };

  const handleClickTwo = d => {
    handleClick(d, false);
  };

  const handleDialogOpen = () => {
    if (total > 0) {
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  if (loading) return <Spinner />;

  if (!menu) return <Spinner />;

  const headerTitle = `${store.name} Menu`;

  const currentUnixTime = moment().unix();
  const hasMenuExpired = currentUnixTime > menu.expiresAt;

  return (
    <>
      <AppBarWithOnlyHeader headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  {(confirm === "1") ? (
	    <Alert severity="success">{ORDER_CANCELLATION_SUCCESS_MESSAGE}</Alert>
	  ): null
	  }
	  {(hasMenuExpired) ? (
	    <Alert severity="warning">{MENU_EXPIRED_WARNING_MESSAGE}</Alert>
	  ): null
	  }
	  <MenuCatalog
	    menu={menu}
	    catalogItemsByCategory={catalogItemsByCategory}
	    catalogItemsLookUp={catalogItemsLookUp}
	    control={control}
	    total={total}
	    errors={errors}
	  />
	  <div style={{height: 150}} />
	  <ActionsContainer>
	    <FabButton
	      buttonName={buttonName}
	      onClick={handleDialogOpen}
	    />
	  </ActionsContainer>
	  <OrderingFormDialog
	    title={"Checkout"}
	    open={dialogOpen}
	    handleClose={handleDialogClose}
	    buttonName={buttonNameTwo}
	    handleButtonClick={handleClick}
	    total={total}
	    orderItems={orderItems}
	    store={store}
	    menu={menu}
	    catalogItemsByCategory={catalogItemsByCategory}
	    control={control}
	    errors={errors}
	    handleSubmit={handleSubmit}
	    buttonNameOne={placeOrderButtonOne}
	    buttonNameTwo={placeOrderButtonTwo}
	    handleButtonClickOne={handleClickOne}
	    handleButtonClickTwo={handleClickTwo}
	  />
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
};

export default PlaceOrdersPage;
