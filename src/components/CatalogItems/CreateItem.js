import React, {useState} from "react";
import moment from "moment-timezone";

import Banner from "./Banner";
import Form from "./Form";
import ImageUpload from "./ImageUpload";
import firebase, {useAuth} from "../../core/hooks/useFirebase";
import {ItemImageFormContainer} from "./components";

const ItemForm = ({
  buttonName,
  type,
  defaults={},
  id,
  handleClose,
  storeid,
  setExpanded,
  refreshPage,
}) => {
  const [loading, setLoading] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(defaults.bannerUrl);
  const {db} = useAuth();
  const itemsRef = db.collection("catalogItems");

  const onSubmit = async data => {
    if (type === "create") {
      const createdAt = moment().unix();
      if (bannerUrl) {
	await itemsRef.add({...data, outOfStock: false, storeid, bannerUrl, createdAt});
      } else {
	await itemsRef.add({...data, outOfStock: false, storeid, createdAt});
      }
      firebase.analytics().logEvent("created_catalog_item");
      // setExpanded(false);
      // handleClose();
      refreshPage();
    }
    if (type === "update") {
      const itemRef = itemsRef.doc(id);
      const updatedAt = moment().unix();
      if (bannerUrl) {
	await itemRef.update({...data, bannerUrl, updatedAt});
      } else {
	await itemRef.update({...data, updatedAt});
      }
      firebase.analytics().logEvent("updated_catalog_item");
      setExpanded(false);
      handleClose();
      // refreshPage();
    }
  };

  return (
    <div style={{border: "1px solid white"}}>
      <ItemImageFormContainer>
	<Banner loading={loading} url={bannerUrl} />
	<ImageUpload setImageUrl={setBannerUrl} setLoading={setLoading} />
      </ItemImageFormContainer>
      <Form buttonName={buttonName} onSubmit={onSubmit} defaults={defaults} />
    </div>
  );
};

// <Banner loading={loading} url={bannerUrl} />
// <ImageUpload setImageUrl={setBannerUrl} setLoading={setLoading} />
export default ItemForm;
