import React from "react";

import {FormItemImageContainer, FormItemImage} from "./components";
import bannerPlaceholder from "./assets/bannerPlaceholder.png";
import Spinner from "../Base/Spinner";

export default function BannerWrap({loading, url}) {
  if (loading) {
    return (
      <FormItemImageContainer>
	<Spinner />
      </FormItemImageContainer>
    );
  }
  if (!url) {
    return (
      <FormItemImageContainer>
	<FormItemImage src={bannerPlaceholder} alt="banner" />
      </FormItemImageContainer>
    );
  }
  return (
    <FormItemImageContainer>
      <FormItemImage src={url} alt="banner" />
    </FormItemImageContainer>
  );
}
