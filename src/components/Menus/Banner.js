import React from "react";

import {BannerContainer, Banner} from "./components";
import bannerPlaceholder from "./assets/bannerPlaceholder.png";
import Spinner from "../Base/Spinner";

export default function BannerWrap({loading, url}) {
  if (loading) {
    return (
      <BannerContainer>
	<Spinner />
      </BannerContainer>
    );
  }
  if (!url) {
    return (
      <BannerContainer>
	<Banner src={bannerPlaceholder} alt="banner" />
      </BannerContainer>
    );
  }
  return (
    <BannerContainer>
      <Banner src={url} alt="banner" />
    </BannerContainer>
  );
}
