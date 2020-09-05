import React, {useState} from "react";
import {useRouter} from "next/router";
import moment from "moment-timezone";

import Banner from "./Banner";
import Form from "./Form";
import ImageUpload from "./ImageUpload";
import {
  MENU_TYPE_DEFAULT,
  MENU_SHIPPING_TYPE_DELIVERY,
  STORE_CREATION_ERROR_MESSAGE,
} from "../consts";
import firebase, {useAuth} from "../../core/hooks/useFirebase";
import {routes, config} from "../../config";

const StoreForm = ({
  buttonName,
  type,
  defaults={},
  id,
  handleClose,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(defaults.bannerUrl);
  const {user, db} = useAuth();

  const onSubmit = async data => {
    // FIRESTORE CRUD
    // BECHO PROTOCOL
    const storesRef = db.collection("stores");
    const menusRef = db.collection("menus");
    if (!bannerUrl) {
      alert("Error store banner image is not uploaded");
    }
    if (bannerUrl && type === "create") {
      try {
	const createdAt = moment().unix();
	// const expiresAt = 2524608000; // Saturday, January 1, 2050 12:00:00 AM
	const storeDoc = await storesRef.add({
	  name: data.name,
	  description: data.description,
	  address: data.address,
	  phoneNumber: data.phoneNumber,
	  category: data.category,
	  bannerUrl,
	  owner: user.uid,
	  createdAt,
	});
	const menDoc = await menusRef.add({
	  bannerUrl,
	  catalogItemIds: [],
	  createdAt,
	  description: data.description,
	  // expiresAt,
	  menuType: MENU_TYPE_DEFAULT,
	  name: data.name,
	  shippingType: MENU_SHIPPING_TYPE_DELIVERY,
	  storeid: storeDoc.id,
	});
	const menuDocRef = db.collection("menus").doc(menDoc.id);
	// This is the code for shareable url creation
	const protocol = window.location.protocol;
	const hostname = window.location.hostname;
	const port = window.location.port ? ":" + window.location.port: "";
	const endpoint = "/api/shortLink";
	const endpointUrl = `${protocol}//${hostname}${port}${endpoint}`;
	const {dynamicLinkBase} = config;
	// const dynamicLinkBase = `https://viluvainc.page.link/?link=${endpointUrl}/placeorders/`;
	const postOpts = {
	  longDynamicLink: `${dynamicLinkBase}${menDoc.id}&st=${data.name}&sd=${data.description}&si=${bannerUrl.split('&')[0]}`,
	};
	const fetchPostOpts = {
	  method: "post",
	  body: JSON.stringify(postOpts),
	};
	const foo = await fetch(endpointUrl, fetchPostOpts);
	const bar = await foo.json();
	await menuDocRef.update({shareableLink: bar.shortLink});
	firebase.analytics().logEvent("created_store");
	router.push(routes.CATALOG_ITEMS);
      } catch (e) {
	console.log(e);
	alert(STORE_CREATION_ERROR_MESSAGE);
	router.push(routes.ACCOUNT);
      }
    }
    if (bannerUrl && type === "update") {
      const storeRef = storesRef.doc(id);
      const updatedAt = moment().unix();
      await storeRef.set({
	name: data.name,
	description: data.description,
	address: data.address,
	phoneNumber: data.phoneNumber,
	category: data.category,
	bannerUrl,
	owner: user.uid,
	updatedAt,
      });
      firebase.analytics().logEvent("updated_store");
      handleClose();
    }
  };

  return (
    <div style={{width: "100%", border: "1px solid white"}}>
      <Banner loading={loading} url={bannerUrl} />
      <ImageUpload setImageUrl={setBannerUrl} setLoading={setLoading} />
      <Form
	buttonName={buttonName}
	onSubmit={onSubmit}
	defaults={defaults}
	type={type}
      />
    </div>
  );
};

export default StoreForm;
