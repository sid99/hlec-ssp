import React from "react";

import Banner from "./Banner";
import Form from "./Form";
import ImageUpload from "./ImageUpload";

const StoreForm = ({
  control,
  errors,
  defaults={},
  loading,
  bannerUrl,
  setBannerUrl,
  setLoading,
  expiryDateTime,
  handleExpiryDateTimeChange,
}) => {
  return (
    <div style={{width: "100%", paddingTop: 20, border: "1px hidden white"}}>
      <Banner loading={loading} url={bannerUrl} />
      <ImageUpload setImageUrl={setBannerUrl} setLoading={setLoading} />
      <Form
	defaults={defaults}
	control={control}
	errors={errors}
	expiryDateTime={expiryDateTime}
	handleExpiryDateTimeChange={handleExpiryDateTimeChange}
      />
    </div>
  );
};

export default StoreForm;
